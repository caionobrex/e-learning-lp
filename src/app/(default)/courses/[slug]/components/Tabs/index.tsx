'use client'

import * as RadixTabs from "@radix-ui/react-tabs"
import { useTabsController } from "./useTabsController"
import * as Collapsible from "@radix-ui/react-collapsible"

export const Tabs = () => {
  const { getTabClassName, onClickHandler } = useTabsController()

  return (
    <RadixTabs.Root defaultValue="tab1">
    <RadixTabs.List className="gap-x-4 grid grid-cols-4 border-b border-gray-600">
      <RadixTabs.Trigger value="tab1" className={getTabClassName(0)} onClick={onClickHandler(0)}>
        Visão Geral
      </RadixTabs.Trigger>
      <RadixTabs.Trigger value="tab2" className={getTabClassName(1)} onClick={onClickHandler(1)}>
        Conteúdo
      </RadixTabs.Trigger>
      <RadixTabs.Trigger value="tab3" className={getTabClassName(2)} onClick={onClickHandler(2)}>
        Instrutor
      </RadixTabs.Trigger>
      <RadixTabs.Trigger value="tab4" className={getTabClassName(3)} onClick={onClickHandler(3)}>
        Avaliações
      </RadixTabs.Trigger>
    </RadixTabs.List>
    <RadixTabs.Content value="tab1" className="pt-10">
      <ul className="flex flex-col gap-y-12">
        <li className="">
          <span className="text-white text-2xl font-semibold">Descrição</span>
          <p className="mt-3 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
          </p>
        </li>
        <li className="">
          <span className="text-white text-2xl font-semibold">Pra quem é esse curso:</span>
          <p className="mt-3 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
          </p>
        </li>
        <li className="">
          <span className="text-white text-2xl font-semibold">Requisitos</span>
          <ul className="mt-3">
            <li>Nunc auctor consequat lorem, in posuere enim hendrerit sed.</li>
            <li>Nunc auctor consequat lorem, in posuere enim hendrerit sed.</li>
          </ul>
        </li>
      </ul>
    </RadixTabs.Content>
    <RadixTabs.Content value="tab2" className="pt-10">
      <header className="flex items-center justify-between gap-x-3 mb-6">
        <h3 className="text-2xl font-semibold">Conteúdo</h3>
        <ul className="flex items-center gap-x-3">
          <li>6 Módulos</li>
        </ul>
      </header>
      <div className="border border-primary-400 p-4">
        <Collapsible.Root>
          <Collapsible.Trigger>Começando</Collapsible.Trigger>
          <Collapsible.Content className="pt-3">ew</Collapsible.Content>
        </Collapsible.Root>
      </div>
    </RadixTabs.Content>
  </RadixTabs.Root>
  )
}