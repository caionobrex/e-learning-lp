import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }  
        if (user) return user
        return null
      }
    })
  ]
})

export { handler as GET, handler as POST }