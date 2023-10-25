import { prisma } from '@/db'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: '' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.username },
        })
        if (!user) return null
        if (user.password === credentials?.password) {
          return { ...user, name: user.firstName + ' ' + user.lastName }
        }
        return null
      },
    }),
  ],
})

export { handler as GET, handler as POST }
