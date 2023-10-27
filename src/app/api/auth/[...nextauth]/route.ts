import { prisma } from '@/db'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'

const handler = NextAuth({
  secret: process.env.NEXT_AUTH_SECRET,
  // callbacks: {
  //   jwt: async ({ token, user, account, profile, isNewUser }) => {
  //     console.log('user', user)
  //     console.log('token jwt function', token)
  //     return { ...token, test: 'dsadas' }
  //   },
  // },
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
        if (bcrypt.compareSync(credentials!.password, user.password)) {
          return { ...user, name: user.firstName + ' ' + user.lastName }
        }
        return null
      },
    }),
  ],
})

export { handler as GET, handler as POST }
