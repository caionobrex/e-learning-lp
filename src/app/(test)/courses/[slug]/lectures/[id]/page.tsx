import { prisma } from '@/db'
import { redirect } from 'next/navigation'
import { Tabs } from './components/Tabs'

export default async function Lecture({
  params: { slug, id },
}: {
  params: { slug: string; id: string }
}) {
  const lecture = await prisma.lecture.findUnique({
    where: { id },
    include: {
      Module: { select: { Course: { select: { id: true, slug: true } } } },
    },
  })
  if (!lecture || lecture.Module?.Course?.slug !== slug) {
    redirect('/')
  }

  const course = await prisma.course.findUnique({
    where: { id: lecture.Module!.Course!.id! },
  })

  if (!course) redirect('/')

  return (
    <>
      <header className="bg-primary-400 py-4">
        <div className="lecture-container flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="text-white">
            <span className="font-semibold text-2xl mb-1 block">
              {course.name}
            </span>
            <ul className="flex items-center gap-x-4">
              <li>
                <span>{course.modulesCount}</span>
              </li>
              <li>
                <span>{course.lecturesCount}</span>
              </li>
              <li>
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
      <main className="text-white min-h-screen pt-6 grid lg:grid-cols-7 gap-x-6 lecture-container mx-auto">
        <div className="col-span-5 pb-60">
          <div className="w-full">
            <div style={{ paddingTop: '56.25%', position: 'relative' }}>
              <iframe
                src="https://player.vimeo.com/video/876040533?h=8edf1496ed&title=0&byline=0"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="mt-6">
            <h1 className="text-2xl font-semibold mb-10">{lecture.name}</h1>
            <Tabs lecture={lecture} />
          </div>
        </div>
        <div className="bg-primary-400 col-span-2 px-8 py-4">
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center justify-between">
              <span>Course Contents</span>
              <span>15% Completed</span>
            </div>
            <div className="h-2 bg-blue-300"></div>
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
