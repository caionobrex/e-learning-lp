import { prisma } from '@/db'
import { Pay } from '@/usecases/pay'
import { getServerSession } from 'next-auth'
import { NextRequest } from 'next/server'

const handler = async (req: NextRequest) => {
  const session = await getServerSession()
  if (!session) return Response.json({ res: 'no session' })
  console.log(await req.json())
  const { products, token, installments, issuer, paymentMethod } =
    await req.json()

  const user = await prisma.user.findUnique({
    where: { email: session.user!.email! },
  })

  try {
    await new Pay(prisma).execute({
      userId: user!.id,
      products,
      token,
      installments,
      issuer,
      paymentMethod,
    })
  } catch (err) {
    console.log(err)
    return Response.json({ res: 'failed' })
  }

  return Response.json({ res: 'ok' })
}

export { handler as POST }
