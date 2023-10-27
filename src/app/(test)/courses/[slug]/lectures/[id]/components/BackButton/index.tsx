'use client'

import { useRouter } from 'next/navigation'
import { BiArrowBack } from 'react-icons/bi'

export const BackButton = () => {
  const router = useRouter()

  return (
    <button
      type="button"
      className="bg-primary-600 rounded-full w-14 h-14 flex justify-center items-center hover:bg-opacity-60"
      onClick={router.back}
    >
      <BiArrowBack className="text-2xl" />
    </button>
  )
}
