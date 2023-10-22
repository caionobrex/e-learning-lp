'use client'

import { SignInCard } from './components/SignInCard'
import Logo from '../../../public/images/users/user1.png'
import Image from 'next/image'

export default function SignIn() {
  return (
    <main className="min-h-screen">
      <div className="custom-container flex flex-col items-center justify-center z-50 lg:py-20 mt-8 rounded-2xl lg:bg-primary-400 lg:mt-10">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:gap-x-20">
          <div className="flex flex-col gap-y-6 lg:col-span-1 lg:w-96">
            <Image
              src={Logo}
              alt="logo"
              width={60}
              height={60}
              className="z-50"
            />
            <div>
              <p className="text-4xl leading-tight lg:text-5xl text-white font-semibold lg:leading-snug mb-3">
                Criar uma conta na <span className="text-primary">Inspace</span> é fácil.
              </p>
              <span className="text-gray-400 font-medium">© 2023 Inspace</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center lg:col-span-2">
            <SignInCard />
          </div>
        </div>
      </div>
    </main>
  )
}
