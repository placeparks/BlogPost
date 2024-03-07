import { User } from "@/lib/models";
import { connectToMongo } from "@/lib/utils";
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";

      
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
    ],

    callbacks: {
        async signIn({ user, account, profile }) {
          await connectToMongo();
      
          if (account.provider === "github") {
            return handleGitHubSignIn(profile, account.accessToken);
          } else if (account.provider === "google") {
            return handleGoogleSignIn(profile);
          }
      
          return false; 
        },
        
        async session({ session, token }) {
            session.user.isAdmin = token.isAdmin;
            
            return session;
          },
        async jwt({ token, user }) {
          if (user) {
            token.uid = user.id; 
            token.isAdmin = user.isAdmin;
          }
      
          return token;
        },
      
      },
      
    });
    