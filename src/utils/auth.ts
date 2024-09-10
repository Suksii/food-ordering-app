import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions, getServerSession } from "next-auth";
import Google from "next-auth/providers/google"
import { prisma } from "./connection";

declare module "next-auth" {
  interface Session {
    user: User & {
      isAdmin: Boolean
    }
  }
}
declare module "next-auth/jwt" {
  interface JWT {
      isAdmin: Boolean
  }
}

export const authOptions:NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt"
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    })
  ],
  callbacks: {
    async session({token, session}) {
      if(token) {
      session.user.isAdmin = token.isAdmin
      }
    },
    async jwt({token}) {
      const userInDd = await prisma.user.findUnique({
        where:{
          email: token.email!,
        },
      })
      token.isAdmin = userInDd?.isAdmin!;
    }
  }
}

export const getAuthSession = () => getServerSession(authOptions)