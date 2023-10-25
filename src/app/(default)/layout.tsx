import Basket from '@/assets/basket.svg';
import Menu from '@/assets/menu.svg';
import Profile from '@/assets/profile.svg';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Image from "next/image";
import Link from "next/link";
import Logo from '@/assets/logo.png'
import '../../css/globals.css';
import { SessionProvider } from '@/providers/SessionProvider';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()

  return (
    <SessionProvider>
      <html lang="en">
        <body className={montserrat.className}>
          <header className="custom-container text-white border-b border-dashed">
            <div className="flex justify-between items-center py-8">
              <Link href="/">
                <Image src={Logo} alt="Logo" width={50} height={50} className="rounded-full" />
              </Link>
              <ul className="items-center gap-x-10 hidden lg:flex">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="">Cursos</Link>
                </li>
                <li>
                  <Link href="">Blog</Link>
                </li>
              </ul>
              <div className="items-center gap-x-16 hidden lg:flex">
                <ul className="flex items-center gap-x-5">
                  <li>
                    <Link href="/cart"><Image src={Basket} alt="" /></Link>
                  </li>
                  <li>
                    <Link href="/profile"><Image src={Profile} alt="" /></Link>
                  </li>
                </ul>
                {session?.user ? null : (
                  <div className="flex items-center gap-x-4">
                    <Link href="/signin" type="button">Login</Link>
                    <Link href="/signup" className="border-2 py-3 px-10 rounded-br-2xl rounded-tl-2xl w-full lg:w-auto hover:bg-primary transition-all">Signup</Link>
                  </div>
                )}
              </div>
              <button type="button" className="lg:hidden">
                <Image src={Menu} alt="mobile menu" width={25} height={25} />
              </button>
            </div>
          </header>
          {children}
          <footer className="bg-primary-400 pt-16 pb-8">
            <div className="custom-container grid lg:grid-cols-10 gap-y-10 gap-x-16 text-white">
              <div className="flex flex-col gap-y-4 lg:col-span-4">
                <span className="text-2xl font-medium"><span className="font-extrabold">Sky</span>Lunar</span>
                <p className="font-thin">Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolore eu fugiat nulla pariatur. </p>
              </div>
              <div className="flex flex-col gap-y-4 lg:col-span-2">
                <span className="text-2xl font-medium">Quick Links</span>
                <p className="font-thin">Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolore eu fugiat nulla pariatur. </p>
              </div>
              <div className="flex flex-col gap-y-4 lg:col-span-4">
                <span className="text-2xl font-medium">Contact Us</span>
                <p className="font-thin">Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolore eu fugiat nulla pariatur. </p>
              </div>
            </div>
            <div className="text-center mt-20 text-white border-t border-gray-500 pt-6 custom-container font-thin">
              Copyright 2023 | All Rights Reserved
            </div>
          </footer>
        </body>
      </html>
    </SessionProvider>
  )
}