export const runtime = "nodejs";

import axios from "axios";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const { data: user } = await axios.post(
            `${process.env.NEXTAUTH_URL}/api/auth/verify`,
            credentials
          );
          return user || null;
        } catch (err) {
          console.error(
            "Authorization failed:",
            err.response?.data || err.message
          );
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },

  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60 * 7,
  },

  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      // Khi user đăng nhập lần đầu
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.fullName = user.fullName;
        token.role = user.role;
        token.verify = user.verify;
      }

      // Tự động cập nhật "verify" mỗi lần
      try {
        const { data: updatedUser } = await axios.get(
          `${process.env.NEXTAUTH_URL}/api/auth/account/${token.id}`
        );
        token.verify = updatedUser.data.emailVerified;
      } catch (err) {
        console.error("Failed to refresh verify status", err.message);
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.fullName = token.fullName;
      session.user.role = token.role;
      session.user.verify = token.verify;
      return session;
    },
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);

export { handlers as GET, handlers as POST };
