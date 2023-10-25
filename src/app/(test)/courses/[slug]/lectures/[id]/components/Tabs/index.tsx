'use client'

import { Lecture } from '@prisma/client'
import * as RadixTabs from '@radix-ui/react-tabs'
import { useTabsController } from './useTabsController'

export const Tabs = ({ lecture }: { lecture: Lecture }) => {
  const { getTabClassName, onClickHandler } = useTabsController()

  return (
    <RadixTabs.Root defaultValue="tab1">
      <RadixTabs.List className="gap-x-4 grid grid-cols-4 border-b border-gray-600">
        <RadixTabs.Trigger
          value="tab1"
          className={getTabClassName(0)}
          onClick={onClickHandler(0)}
        >
          Descrição
        </RadixTabs.Trigger>
        <RadixTabs.Trigger
          value="tab2"
          className={getTabClassName(1)}
          onClick={onClickHandler(1)}
        >
          Notas
        </RadixTabs.Trigger>
        <RadixTabs.Trigger
          value="tab3"
          className={getTabClassName(2)}
          onClick={onClickHandler(2)}
        >
          Anexos
        </RadixTabs.Trigger>
        <RadixTabs.Trigger
          value="tab4"
          className={getTabClassName(3)}
          onClick={onClickHandler(3)}
        >
          Comentários
        </RadixTabs.Trigger>
      </RadixTabs.List>
      <RadixTabs.Content value="tab1" className="pt-10">
        <div className="">
          <span className="text-white text-2xl font-semibold">
            Descrição da Aula
          </span>
          <p className="mt-3 text-gray-300">{lecture.description}</p>
        </div>
      </RadixTabs.Content>
      <RadixTabs.Content value="tab2" className="pt-10">
        <header className="flex items-center justify-between gap-x-3 mb-4">
          <h3 className="text-2xl font-semibold">Conteúdo</h3>
          <ul className="flex items-center gap-x-4 text-sm">
            {/* {course.Modules.length}
            {course.Modules.map((module) => (
              <li key={module.id}>{module.name}</li>
            ))} */}
          </ul>
        </header>
        <div className="border border-primary-400 p-4">
          {/* {course.Modules.map((module) => (     
            <Collapsible.Root className="border-b pb-4" key={module.id}>
              <Collapsible.Trigger className="text-xl">{module.name}</Collapsible.Trigger>
              
              <Collapsible.Content className="pt-3">
                <ul className="flex flex-col gap-y-1">
                  {module.lectures.map((lecture) => (
                    <li key={lecture.id}>{lecture.name}</li>
                  ))}
                </ul>
              </Collapsible.Content>
            </Collapsible.Root>
          ))} */}
        </div>
      </RadixTabs.Content>
      <RadixTabs.Content value="tab3" className="pt-10">
        <header className="flex items-center justify-between gap-x-3 mb-6">
          <h3 className="text-2xl font-semibold">Instrutor do Curso</h3>
        </header>
        {/* <div className="border border-primary-400 p-6 flex gap-x-6">
          <div className="w-32 h-32 bg-white rounded-full relative">
            {course.instructor.picture ? (
              <Image src={course.instructor.picture} alt="" fill className="rounded-full object-cover" />
            ) : (
              <span>{course.instructor.firstName}</span>
            )}
          </div>
          <div className="flex-1 flex flex-col gap-y-4">
            <header className="flex flex-col gap-y-1">
              <h5 className="text-xl font-semibold">{course.instructor.firstName + ' ' + course.instructor.lastName}</h5>
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
              <p>
                {course.instructor.description}
              </p>
            </footer>
          </div>
        </div> */}
      </RadixTabs.Content>
      <RadixTabs.Content value="tab4" className="pt-10">
        dsa
      </RadixTabs.Content>
    </RadixTabs.Root>
  )
}
