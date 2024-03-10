import { User } from "@/lib/models";
import { connectToMongo } from "@/lib/utils";
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';

async function handleGitHubSignIn(profile, accessToken) {
  const res = await fetch("https://api.github.com/user/emails", {
    headers: {
      Authorization: `token ${accessToken}`,
    },
  });
  const emails = await res.json();

  if (Array.isArray(emails)) {
    const primaryEmail = emails.find((email) => email.primary && email.verified);
    if (primaryEmail) {
      profile.email = primaryEmail.email;
    }
  }

  try {
    // Use a combination of provider and user ID as the unique identifier
    const uniqueId = `github-${profile.id}`;

    const existingUser = await User.findOne({ email: uniqueId });
    if (!existingUser) {
      const newUser = new User({
        username: profile.login,
        email: uniqueId,
        image: profile.avatar_url,
        isAdmin: false,
      });
      await newUser.save();
    }
  } catch (error) {
    console.log(error);
    return false;
  }

  return true;
}

  
  async function handleGoogleSignIn(profile) {
    try {
      const existingUser = await User.findOne({ email: profile.email });
      if (!existingUser) {
        const newUser = new User({
          username: profile.name,
          email: profile.email,
          image: profile.picture,
          isAdmin: false,
        });
        await newUser.save();
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  
    return true;
  }

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            scope: 'read:user user:email',
          }),
          
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
          credentials: {
            email: { label: "Email", type: "text" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            console.log('Credentials:', credentials);
            await connectToMongo();
            const user = await User.findOne({ email: credentials.email });
            console.log('User:', user);
          
            if (!user) {
              console.log('No user found');
              return null;
            }
          
            const passwordCorrect = await bcrypt.compare(credentials.password, user.password);
            console.log('Password correct:', passwordCorrect);
          
            if (passwordCorrect) {
              return { id: user._id, name: user.username, email: user.email };
            }
          
            console.log('Password incorrect');
            return null;
          }
          
        }),
        
        
      ],
   pages: {
    error: '/auth/error', // Override the error page
    // ...
  },
  callbacks: {
    async jwt({ token, user, account }) {
      await connectToMongo();
      // Check if it's a sign-in event
      if (account && user) {
        let userEmail = user.email;
        // If the sign-in is from GitHub, construct the unique email ID
        if (account.provider === "github") {
          userEmail = `github-${user.id}`;
        }
        if (user) {
          token.id = user.id;
        }
        // Fetch the user from the database using the determined email or unique identifier
        const dbUser = await User.findOne({ email: userEmail }).lean();
        // Set isAdmin from the database record
        token.isAdmin = dbUser?.isAdmin ?? false;
      }
  
      return token;
    },
    
    async session({ session, token }) {
      // Transfer isAdmin to the session
      session.user.isAdmin = token.isAdmin;
      session.user.id = token.id;
      return session;
    },
        async signIn({ user, account, profile }) {
          await connectToMongo();
          if (account.provider === "github") {
            return handleGitHubSignIn(profile, account.accessToken);
          } else if (account.provider === "google") {
            return handleGoogleSignIn(profile);
          }
      
          return true; 
        },     
      
      },
      
    });
    
