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
    ],

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
    
      return session;
    },
        async signIn({ user, account, profile }) {
          await connectToMongo();
          if (account.provider === "github") {
            return handleGitHubSignIn(profile, account.accessToken);
          } else if (account.provider === "google") {
            return handleGoogleSignIn(profile);
          }
      
          return false; 
        },     
      
      },
      
    });
    