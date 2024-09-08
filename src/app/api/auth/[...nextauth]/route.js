import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { getServerSession } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
export const authOptions = {
  //   adapter: PrismaAdapter(prisma),
  providers: [
    // GoogleProvider({
    //   clientId: process.env.AUTH_GOOGLE_ID,
    //   clientSecret: process.env.AUTH_GOOGLE_ID,
    // }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
