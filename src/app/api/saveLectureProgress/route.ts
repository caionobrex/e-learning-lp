import { prisma } from '@/db'
import { getServerSession } from 'next-auth'
import { NextRequest } from 'next/server'

const handler = async (req: NextRequest) => {
  const session = await getServerSession()
  if (!session) return Response.json({ res: 'no session' })
  const { lectureId, courseId, time } = await req.json()

  const user = await prisma.user.findUnique({
    where: { email: session.user!.email! },
  })

  try {
    const result = await prisma.lectureProgress.update({
      where: { userId_lectureId: { userId: user!.id, lectureId }, courseId },
      data: { progress: time, updatedAt: new Date() },
    })
  } catch (err) {
    await prisma.lectureProgress.create({
      data: { lectureId, courseId, userId: user!.id, progress: time },
    })
  }

  return Response.json({ res: 'ok' })
}

export { handler as PATCH }
