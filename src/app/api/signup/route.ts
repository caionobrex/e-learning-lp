import { prisma } from "@/db"

const handler = async (req: Request) => {
  const { email, firstName, lastName, password } = await req.json()

  if (!email || !firstName || !lastName || !password) {
    return new Response('Missing required fields', { status: 400 })
  }

  const user = await prisma.user.findUnique({ where: { email } })

  if (user) {
    return new Response('User already exists', { status: 400 })
  }
  
  await prisma.user.create({
    data: { email, firstName, lastName, password }
  })
}

export { handler as POST }
