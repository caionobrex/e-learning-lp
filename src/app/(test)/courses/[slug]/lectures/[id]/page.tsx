import { prisma } from '@/db'
import { redirect } from 'next/navigation'
import { Tabs } from './components/Tabs'
import { Player } from './components/Player'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import FolderIcon from '@/assets/FolderNotchOpen.png'
import PlayIcon from '@/assets/PlayCircle.svg'
import Clock from '@/assets/Clock.svg'
import { BackButton } from './components/BackButton'
import { Collapsible } from '@/app/(default)/courses/[slug]/components/Tabs/components/Collapsible'

export default async function Lecture({
  params: { slug, id },
}: {
  params: { slug: string; id: string }
}) {
  const session = await getServerSession()
  if (!session || !session.user) redirect('/')

  const lecture = await prisma.lecture.findUnique({
    where: { id },
    include: {
      Module: { select: { Course: { select: { id: true, slug: true } } } },
    },
  })
  if (!lecture || lecture.Module?.Course?.slug !== slug) {
    redirect('/')
  }

  const enrolledCourse = await prisma.enrolledCourses.findFirst({
    where: {
      user: { email: session.user.email! },
      courseId: lecture.Module.Course.id,
    },
  })

  if (!enrolledCourse) redirect('/')

  const course = await prisma.course.findUnique({
    where: { id: lecture.Module.Course.id! },
    include: { Modules: { include: { lectures: true } } },
  })

  if (!course) redirect('/')

  const lectureProgress = await prisma.lectureProgress.findMany({
    where: { courseId: course.id, user: { email: session.user.email! } },
    orderBy: { updatedAt: 'desc' },
  })
  const currentLecture = lectureProgress.find(
    (lec) => lecture.id === lec.lectureId,
  )

  return (
    <>
      <header className="bg-primary-400 py-4">
        <div className="lecture-container flex flex-col gap-y-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="text-white flex flex-col gap-y-3 lg:flex-row lg:items-center gap-x-8">
            <div className="flex items-center gap-x-8">
              <BackButton />
              <span className="font-semibold text-2xl mb-1 block">
                {course.name}
              </span>
            </div>
            <ul className="flex flex-col gap-y-1 lg:flex-row lg:items-center gap-x-6">
              <li className="flex items-center gap-x-2">
                <Image src={FolderIcon} alt="Orange open folder png" />
                <span>{course.modulesCount} seções</span>
              </li>
              <li className="flex items-center gap-x-2">
                <Image src={PlayIcon} alt="Orange open folder png" />
                <span>{course.lecturesCount} aulas</span>
              </li>
              <li className="flex items-center gap-x-2">
                <Image src={Clock} alt="Orange open folder png" />
                <span>{course.duration}</span>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-x-3">
            <button className="text-primary-600 px-4 py-3 bg-primary font-medium text-sm">
              Review
            </button>
            <button className="bg-primary-600 px-4 py-3 text-white font-medium text-sm">
              Proxima Aula
            </button>
          </div>
        </div>
      </header>
      <main className="text-white min-h-screen pt-6 grid lg:grid-cols-10 gap-x-6 lecture-container mx-auto">
        <div className="col-span-6 2xl:col-span-7 pb-60">
          <Player
            courseId={course.id}
            lectureId={lecture.id}
            videoSrc={lecture.video}
            currentTime={currentLecture?.progress}
          />
          <div className="mt-6">
            <h1 className="text-2xl font-semibold mb-10">{lecture.name}</h1>
            <Tabs lecture={lecture} />
          </div>
        </div>
        <div className="bg-primary-400 col-span-4 2xl:col-span-3 px-8 py-4">
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center justify-between">
              <span className="font-medium text-xl">Conteúdo</span>
              <span>{enrolledCourse.progress}% Completed</span>
            </div>
            <div className="mt-4">
              <ul className="flex flex-col gap-y-4">
                {course.Modules.map((module, index) => (
                  <li key={module.id}>
                    <Collapsible
                      module={module}
                      lectureId={lecture.id}
                      defaultOpen={index === 0}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-primary-400 pt-16 pb-8">
        <div className="custom-container grid lg:grid-cols-10 gap-y-10 gap-x-16 text-white">
          <div className="flex flex-col gap-y-4 lg:col-span-4">
            <span className="text-2xl font-medium">
              <span className="font-extrabold">Sky</span>Lunar
            </span>
            <p className="font-thin">
              Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolore eu fugiat nulla
              pariatur.{' '}
            </p>
          </div>
          <div className="flex flex-col gap-y-4 lg:col-span-2">
            <span className="text-2xl font-medium">Quick Links</span>
            <p className="font-thin">
              Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolore eu fugiat nulla
              pariatur.{' '}
            </p>
          </div>
          <div className="flex flex-col gap-y-4 lg:col-span-4">
            <span className="text-2xl font-medium">Contact Us</span>
            <p className="font-thin">
              Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolore eu fugiat nulla
              pariatur.{' '}
            </p>
          </div>
        </div>
        <div className="text-center mt-20 text-white border-t border-gray-500 pt-6 custom-container font-thin">
          Copyright 2023 | All Rights Reserved
        </div>
      </footer>
    </>
  )
}
