import { prisma } from '@/db'
import { getServerSession } from 'next-auth'
import { NextRequest } from 'next/server'

const handler = async (req: NextRequest) => {
  const session = await getServerSession()
  if (!session) return Response.json({ res: 'no session' })
  const { courseId } = await req.json()
  const course = await prisma.course.findUnique({ where: { id: courseId } })
  if (!course?.isFree) {
    return new Response('not allowed', { status: 403 })
  }
  const user = await prisma.user.findUnique({
    where: { email: session.user!.email! },
    include: { enrolledCourses: true },
  })

  if (
    !!user?.enrolledCourses.find(
      (enrolledCourse) => enrolledCourse.courseId === courseId,
    )
  ) {
    return new Response('already enrolled', { status: 403 })
  }

  if (!user) {
    return new Response('not allowed', { status: 403 })
  }

  try {
    await prisma.enrolledCourses.create({
      data: {
        userId: user.id,
        courseId: course.id,
        progress: 0,
      },
    })
  } catch (err) {
    return Response.json({ res: 'failed' })
  }

  return Response.json({ res: 'ok' })
}

export { handler as POST }
