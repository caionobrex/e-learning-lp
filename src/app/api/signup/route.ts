import { prisma } from '@/db'
import bcrypt from 'bcrypt'
import { NextRequest } from 'next/server'

const handler = async (req: NextRequest) => {
  const { email, firstName, lastName, password } = await req.json()
  if (!email || !firstName || !lastName || !password) {
    return new Response('Missing required fields', { status: 400 })
  }
  const user = await prisma.user.findUnique({ where: { email } })
  if (user) {
    return new Response('User already exists', { status: 400 })
  }
  await prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
      password: bcrypt.hashSync(password, 10),
    },
  })
  return Response.json({ res: 'ok' })
}

export { handler as POST }
