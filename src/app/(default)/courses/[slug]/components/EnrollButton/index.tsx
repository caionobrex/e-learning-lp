'use client'

import { Course, Prisma } from '@prisma/client'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export const EnrollButton = ({
  course,
}: {
  course: Course &
    Prisma.CourseGetPayload<{
      include: { Modules: { include: { lectures: true } } }
    }>
}) => {
  const router = useRouter()

  const onClickHandler = async () => {
    try {
      await axios.post('/api/enroll', { courseId: course.id })
      const firstCourseLectureId = course.Modules[0].lectures[0].id
      router.push(`/courses/${course.slug}/lectures/${firstCourseLectureId}`)
    } catch (err: any) {
      alert(err.message)
    }
  }

  return (
    <button
      type="button"
      className="bg-secondary text-white w-full py-3 mt-4 font-semibold transition-all duration-500 border border-secondary hover:bg-transparent"
      onClick={onClickHandler}
    >
      Começar
    </button>
  )
}
