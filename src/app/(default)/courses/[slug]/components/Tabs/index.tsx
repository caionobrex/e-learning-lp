'use client'

import * as RadixTabs from '@radix-ui/react-tabs'
import { useTabsController } from './useTabsController'
import Image from 'next/image'
import RightArrow from '@/assets/rightArrow.svg'
import { Course, Prisma } from '@prisma/client'
import FolderIcon from '@/assets/FolderNotchOpen.png'
import PlayIcon from '@/assets/PlayCircle.svg'
import Clock from '@/assets/Clock.svg'
import { Collapsible } from './components/Collapsible'

export const Tabs = ({
  course,
}: {
  course: Course &
    Prisma.CourseGetPayload<{
      include: { Modules: { include: { lectures: true } }; instructor: true }
    }>
}) => {
  const { getTabClassName, onClickHandler } = useTabsController()

  return (
    <RadixTabs.Root defaultValue="tab1">
      <RadixTabs.List className="gap-x-4 grid grid-cols-3 border-b border-gray-600">
        <RadixTabs.Trigger
          value="tab1"
          className={getTabClassName(0)}
          onClick={onClickHandler(0)}
        >
          Visão Geral
        </RadixTabs.Trigger>
        <RadixTabs.Trigger
          value="tab2"
          className={getTabClassName(1)}
          onClick={onClickHandler(1)}
        >
          Conteúdo
        </RadixTabs.Trigger>
        <RadixTabs.Trigger
          value="tab3"
          className={getTabClassName(2)}
          onClick={onClickHandler(2)}
        >
          Instrutor
        </RadixTabs.Trigger>
        {/* <RadixTabs.Trigger
          value="tab4"
          className={getTabClassName(3)}
          onClick={onClickHandler(3)}
        >
          Avaliações
        </RadixTabs.Trigger> */}
      </RadixTabs.List>
      <RadixTabs.Content value="tab1" className="pt-10">
        <ul className="flex flex-col gap-y-12">
          <li className="">
            <span className="text-white text-2xl font-semibold">Descrição</span>
            <p className="mt-3 text-gray-300">{course.description}</p>
          </li>
          <li>
            <span className="text-white text-2xl font-semibold">
              Pra quem é este curso:
            </span>
            <ul className="mt-3 flex flex-col gap-y-3">
              <li className="flex items-center gap-x-2">
                <Image src={RightArrow} alt="right arrow" />
                <span>
                  This course is for those who want to launch a Freelance Web
                  Design career.
                </span>
              </li>
              <li className="flex items-center gap-x-2">
                <Image src={RightArrow} alt="right arrow" />
                <span>
                  This course is for those who want to launch a Freelance Web
                  Design career.
                </span>
              </li>
            </ul>
          </li>
          <li className="">
            <span className="text-white text-2xl font-semibold">
              Requisitos
            </span>
            <ul className="mt-3 list-disc pl-6 flex flex-col gap-y-3">
              <li>
                Nunc auctor consequat lorem, in posuere enim hendrerit sed.
              </li>
              <li>
                Nunc auctor consequat lorem, in posuere enim hendrerit sed.
              </li>
            </ul>
          </li>
        </ul>
      </RadixTabs.Content>
      <RadixTabs.Content value="tab2" className="pt-10">
        <header className="flex flex-col gap-y-3 lg:flex-row lg:items-center lg:justify-between gap-x-3 mb-6">
          <h3 className="text-2xl font-semibold">Conteúdo</h3>
          <ul className="flex items-center gap-x-6 text-sm">
            <li className="flex items-center gap-x-2">
              <Image src={FolderIcon} alt="Orange open folder png" />
              <span>{course.Modules.length} módulos</span>
            </li>
            <li className="flex items-center gap-x-2">
              <Image src={PlayIcon} alt="Play circle icon svg" />
              <span>{course.lecturesCount} aulas</span>
            </li>
            <li className="flex items-center gap-x-2">
              <Image src={Clock} alt="Orange clock svg" />
              <span>{course.duration}</span>
            </li>
          </ul>
        </header>
        <div className="border border-primary-400 px-4 py-6">
          <ul className="flex flex-col gap-y-6">
            {course.Modules.map((module, index) => (
              <li key={module.id}>
                <Collapsible module={module} defaultOpen={index === 0} />
              </li>
            ))}
          </ul>
        </div>
      </RadixTabs.Content>
      <RadixTabs.Content value="tab3" className="pt-10">
        <header className="flex items-center justify-between gap-x-3 mb-6">
          <h3 className="text-2xl font-semibold">Instrutor do Curso</h3>
        </header>
        <div className="border border-primary-400 p-6 flex gap-x-6">
          {course.instructor.picture ? (
            <div className="w-32 h-32 bg-primary-400 rounded-full relative">
              <Image
                src={course.instructor.picture}
                alt=""
                fill
                className="rounded-full object-cover"
              />
            </div>
          ) : (
            <div className="w-32 h-32 bg-primary-400 rounded-full relative flex justify-center items-center">
              <span className="font-bold text-xl">
                {course.instructor.firstName.split('')[0] +
                  course.instructor.lastName.split('')[0]}
              </span>
            </div>
          )}

          <div className="flex-1 flex flex-col gap-y-4">
            <header className="flex flex-col gap-y-1">
              <h5 className="text-xl font-semibold">
                {course.instructor.firstName + ' ' + course.instructor.lastName}
              </h5>
              <span>{course.instructor.title}</span>
            </header>
            <main>
              <ul>
                <li className="flex items-center gap-x-2">
                  <span>Icon</span>
                  <span>Rating</span>
                </li>
              </ul>
            </main>
            <footer>
              <p>{course.instructor.description}</p>
            </footer>
          </div>
        </div>
      </RadixTabs.Content>
      {/* <RadixTabs.Content value="tab4" className="pt-10">
        <header className="flex items-center justify-between gap-x-3 mb-6">
          <h3 className="text-2xl font-semibold">Instrutor do Curso</h3>
        </header>
      </RadixTabs.Content> */}
    </RadixTabs.Root>
  )
}
