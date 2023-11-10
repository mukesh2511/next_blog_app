import connect from "@/app/utils/db";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",

      async authorize(credentials) {
        await connect();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (!user) {
            throw new Error("Invalid: Try again");
          }
          const checkPassword = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!checkPassword) {
            throw new Error("Invalid: Try again");
          }
          return user;
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  pages: { error: "/dashboard/login" },
});

export { handler as GET, handler as POST };
