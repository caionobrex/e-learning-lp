import { useState } from 'react'
import { clsx } from 'clsx'

export const useTabsController = () => {
  const [currentTab, setCurrentTab] = useState(0)

  const getTabClassName = (tabIndex: number) =>
    clsx(
      'pb-5 border-b-2',
      currentTab === tabIndex ? 'border-primary' : 'border-transparent',
    )

  const onClickHandler = (tabIndex: number) => () => setCurrentTab(tabIndex)

  return { getTabClassName, onClickHandler }
}
