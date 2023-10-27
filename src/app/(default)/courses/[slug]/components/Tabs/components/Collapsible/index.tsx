'use client'

import Clock from '@/assets/Clock.svg'
import PlayIcon from '@/assets/PlayCircle.svg'
import { Module, Prisma } from '@prisma/client'
import * as RadixCollapsible from '@radix-ui/react-collapsible'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

export const Collapsible = ({
  module,
  lectureId,
  defaultOpen = false,
}: {
  module: Module & Prisma.ModuleGetPayload<{ include: { lectures: true } }>
  lectureId?: string
  defaultOpen?: boolean
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <RadixCollapsible.Root
      className="border-b border-gray-600 pb-4"
      defaultOpen={defaultOpen}
      onOpenChange={setIsOpen}
    >
      <RadixCollapsible.Trigger className="w-full">
        <div className="flex flex-col gap-y-2 lg:flex-row lg:items-center lg:justify-between w-full">
          <div className="flex items-center gap-x-1">
            {isOpen ? (
              <MdKeyboardArrowUp className="text-2xl text-secondary" />
            ) : (
              <MdKeyboardArrowDown className="text-2xl" />
            )}
            <span
              className={clsx(
                'font-medium text-left',
                isOpen ? 'text-secondary' : '',
              )}
            >
              {module.name}
            </span>
          </div>
          <ul className="flex items-center gap-x-6 text-sm">
            <li className="flex items-center gap-x-2">
              <Image src={PlayIcon} alt="Play circle icon svg" />
              <span>{module.lecturesCount} aulas</span>
            </li>
            <li className="flex items-center gap-x-2">
              <Image src={Clock} alt="Orange clock svg" />
              <span>{module.duration}</span>
            </li>
          </ul>
        </div>
      </RadixCollapsible.Trigger>
      <RadixCollapsible.Content className="pt-3">
        <ul className="flex flex-col gap-y-3">
          {module.lectures.map((lecture) => (
            <li
              key={lecture.id}
              className={clsx(
                'flex items-center gap-x-2 text-sm',
                lecture.id === lectureId ? 'text-primary-500' : '',
              )}
            >
              <Image src={PlayIcon} alt="Play circle icon svg" />
              {lecture.name}
            </li>
          ))}
        </ul>
      </RadixCollapsible.Content>
    </RadixCollapsible.Root>
  )
}
