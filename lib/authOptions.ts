
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

export const authOptions:NextAuthOptions=
{
    adapter: PrismaAdapter(prisma),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
    ],
    callbacks: {
      session: ({ session, token }) => ({
        ...session,
        user: {
          ...(session.user || null),
          id: token?.sub,
        },
      }),
      async redirect({ url, baseUrl }) {

        // Allows relative callback URLs
        if (url.startsWith("/")) return `${baseUrl}${url}`
        // Allows callback URLs on the same origin
        else if (new URL(url).origin === baseUrl) return url
        return `${baseUrl}/shoes`
      }
    
    },
    secret: process.env.NEXT_AUTH_SECRET_KEY,
  }