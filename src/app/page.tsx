import Link from "next/link";
import Image from "next/image";
import HeroDashedLine from '@/assets/heroDashedLine.svg'
import Rocket from '@/assets/rocket.svg'
import HeroEllipse from '@/assets/heroEllipse.svg'
import Pencil from '@/assets/pencil.svg'
import Arrow from '@/assets/arrow.svg'
import Internet from '@/assets/internet.svg'
import RocketLaunch from '@/assets/rocketLaunch.png'
import Trophies from '@/assets/trophies.png'
import Circle from '@/assets/circle.svg'
import Profile from '@/assets/profile.svg'
import Basket from '@/assets/basket.svg'
import Menu from '@/assets/menu.svg'

const courses = [
  { img: '/images/courses/course-1.png', name: `Motion Graphics: Create a Nice Typography Animation`, category: { name: 'Web Development' } },
  { img: '/images/courses/course-2.png', name: `Motion Graphics: Create a Nice Typography Animation`, category: { name: 'Web Development' } },
  { img: '/images/courses/course-3.png', name: `Motion Graphics: Create a Nice Typography Animation`, category: { name: 'Web Development' } },
  { img: '/images/courses/course-4.png', name: `Motion Graphics: Create a Nice Typography Animation`, category: { name: 'Web Development' } },
  { img: '/images/courses/course-5.png', name: `Motion Graphics: Create a Nice Typography Animation`, category: { name: 'Web Development' } },
  { img: '/images/courses/course-6.png', name: `Motion Graphics: Create a Nice Typography Animation`, category: { name: 'Web Development' } },
]

const categories = [
  { img: '/images/categories/category-1.svg', name: `Digital Marketing` },
  { img: '/images/categories/category-1.svg', name: `Web Development` },
  { img: '/images/categories/category-1.svg', name: `Graphic Design` },
  { img: '/images/categories/category-1.svg', name: `Art & Humanities` },
  { img: '/images/categories/category-1.svg', name: `Personal Development` },
  { img: '/images/categories/category-1.svg', name: `IT and Software` },
]

export const CourseCard = ({ course }) => {
  return (
    <div className="bg-primary-400 rounded-2xl transition-all duration-500 lg:hover:-translate-y-5">
      <div className="relative h-48">
        <Image src={course.img} alt={course.name} fill style={{ objectFit: 'cover' }} className="rounded-t-2xl" />
      </div>
      <div className="p-6">
        <span className="text-primary-300 text-xs font-semibold">{course.category.name}</span>
        <h2 className="mt-2 text-white font-bold text-lg">
          {course.name}
        </h2>
        <div className="flex justify-between items-center mt-6 text-primary-300 text-xs font-semibold">
          <span>5,957 students</span>
          <span>01h 49m</span>
        </div>
      </div>
    </div>
  )
}

export const CategoryCard = ({ category }) => {
  return (
    <div className="bg-transparent border border-gray-600 rounded-3xl grid grid-cols-4 p-6 gap-x-6 items-center transition-all duration-500 lg:hover:-translate-y-5">
      <div className="relative p-4 col-span-1 bg-[#DF385B] rounded-xl flex justify-center items-center">
        <Image src={category.img} alt={category.name} width={40} height={40} />
      </div>
      <div className="col-span-3">
        <h3 className="mt-2 text-white font-bold text-lg">
          {category.name}
        </h3>
        <div className="flex justify-between items-center mt-3 text-primary-300 text-xs font-medium">
          <span className="text-primary-100">5,957 students</span>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <header className="custom-container text-white border-b border-dashed">
        <div className="flex justify-between py-8">
          <h1 className="text-2xl"><span className="font-extrabold">Education</span>Temp</h1>
          <ul className="items-center gap-x-10 hidden lg:flex">
            <li>
              <Link href="">Home</Link>
            </li>
            <li>
              <Link href="">Courses</Link>
            </li>
            <li>
              <Link href="">Blog</Link>
            </li>
            <li>
              <Link href="">Shop</Link>
            </li>
          </ul>
          <div className="items-center gap-x-16 hidden lg:flex">
            <ul className="flex items-center gap-x-5">
              <li><Image src={Basket} alt="" /></li>
              <li><Image src={Profile} alt="" /></li>
            </ul>
            <div className="flex items-center gap-x-4">
              <button type="button">Login</button>
              <button type="button" className="border-2 py-3 px-10 rounded-br-2xl rounded-tl-2xl w-full lg:w-auto">Signup</button>
            </div>
          </div>
          <button type="button" className="lg:hidden">
            <Image src={Menu} alt="mobile menu" width={25} height={25} />
          </button>
        </div>
      </header>

      <main className="min-h-screen pb-28">
        <section className="custom-container text-white mt-8 md:mt-24">
          <div className="relative">
            <Image src={HeroDashedLine} alt="Dashed Line" className="hidden lg:block" />
            <div className="lg:absolute left-1/2 -top-4 lg:-top-5 2xl:-top-8 lg:-translate-x-1/2 w-full h-full flex flex-col lg:items-center">
              <h1 className="text-4xl md:text-5xl 2xl:text-6xl text-center font-bold">
                Good coaching is good teaching
              </h1>
              <p className="text-center mt-6 text-sm md:mt-14 font-semibold md:text-xl lg:w-3/4 mx-auto text-gray-300">
                In a coaching role, you ask the questions and rely more on your staff, who become the experts, to provide the information.
              </p>
              <div className="flex flex-col gap-y-4 items-center gap-x-8 mt-10 md:flex-row">
                <button type="button" className="border-2 py-3 px-10 rounded-bl-2xl rounded-tr-2xl w-full lg:w-auto">Join as Student</button>
                <button type="button" className="border-2 py-3 px-10 rounded-bl-2xl rounded-tr-2xl w-full lg:w-auto">Join as Instructor</button>
              </div>
              <Image src={Rocket} alt="Dashed Line" className="lg:absolute lg:block -bottom-[26rem] lg:-bottom-[36rem] xl:-bottom-[28rem] xl:left-52 2xl:left-64 -z-10" />
            </div>
            <Image src={Pencil} alt="Dashed Line" className="hidden absolute xl:top-1/3 xl:block xl:left-28 -z-20" />
            <Image src={Arrow} alt="Dashed Line" className="hidden absolute top-1/2 xl:block -translate-y-1/2 left-72 -z-20" />
            <Image src={Internet} alt="Dashed Line" className="hidden absolute top-1/2 xl:block -translate-y-1/2 right-36 -z-20" />
            <Image src={HeroEllipse} alt="Dashed Line" className="absolute -bottom-[2rem] lg:-bottom-[36rem] 2xl:left-40 -z-20" />
          </div>
        </section>

        <section className="custom-container mt-10 lg:mt-[26rem]">
          <span className="text-primary text-center block font-bold text-sm">Join Dominie At Best</span>
          <h2 className="text-center text-3xl text-white font-semibold mt-2">Featured Courses</h2>
          <ul className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-8 lg:mt-20">
            {courses.map((course) => (
              <li key={course.name}>
                <CourseCard course={course} />
              </li>
            ))}
          </ul>
          <div className="flex justify-center mt-10">
            <button type="button" className="border-2 py-3 px-10 rounded-bl-2xl rounded-tr-2xl text-white">Learn More</button>
          </div>
        </section>

        <section className="mt-24 lg:mt-28 relative">
          <Image src={Circle} alt="Dashed Line" className="absolute -right-0 -top-96 -z-20" />
          <div className="custom-container">
            <h2 className="text-center text-3xl text-white font-semibold mt-2">Top Categories</h2>
            <ul className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-6 lg:gap-x-10 gap-y-8 lg:mt-20">
              {categories.map((category) => (
                <li key={category.name}>
                  <CategoryCard category={category} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-20 custom-container lg:mt-40 relative">
          <Image src={HeroEllipse} alt="Dashed Line" className="absolute -top-36 lg:-top-96 -z-20" />
          <div className="bg-primary-400 rounded-2xl grid lg:grid-cols-2">
            <div className="flex flex-col items-center">
              <Image src={RocketLaunch} alt="ds" />
            </div>
            <div className="text-white py-16 text-center px-6 lg:px-20">
              <h2 className="font-bold text-primary-500 mb-1">Testimonials</h2>
              <p className="font-bold text-2xl">what our students say?</p>
              
              <ul className="mt-14 grid grid-cols-3 md:grid-cols-5 gap-8">
                <li>
                  <Image src="/images/users/user1.png" alt="ds" width={90} height={90} />
                </li>
                <li>
                  <Image src="/images/users/user2.png" alt="ds" width={90} height={90} />
                </li>
                <li>
                  <Image src="/images/users/user3.png" alt="ds" width={90} height={90} />
                </li>
                <li>
                  <Image src="/images/users/user4.png" alt="ds" width={90} height={90} />
                </li>
                <li>
                  <Image src="/images/users/user5.png" alt="ds" width={90} height={90} />
                </li>
              </ul>
              <div className="mt-20">
                <h5 className="mb-2 font-bold text-xl">Ramjan Ali Anik</h5>
                <span className="text-primary-50">Bostsolf.co</span>
                <p className="mt-8 text-center text-primary-50 font-thin">
                  One ipsum dolor sit amet, elit, sed do eiusmod tempor ut labore et
                  dolore magna aliqua. Quis ipsum ultrices gravida. Risus dolore
                  magna aliqua. Quis ipsum ultrices gravida.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 lg:mt-60 custom-container">
          <h2 className="text-white text-3xl font-semibold text-center">About latest tips,news and course</h2>
          <p className="text-white mt-4 text-center">
            Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices
          </p>
          <ul className="grid gap-y-8 md:grid-cols-2 lg:grid-cols-3 gap-x-8 mt-20">
            <li>
              <div className="text-white rounded-2xl">
                <div className="h-80 relative">
                  <Image src="/images/blog/post-1.png" alt="Dashed Line" fill className="z-20 rounded-2xl" />
                </div>
                <div className="px-3">
                  <h3 className="mt-8 font-bold mb-2">
                    5 Graphic Design Skills That Will Strengthen Your Creativity
                  </h3>
                  <span className="text-sm">Apr 9, 2020</span>
                </div>
              </div>
            </li>
            <li>
              <div className="text-white rounded-2xl">
                <div className="h-80 relative">
                  <Image src="/images/blog/post-1.png" alt="Dashed Line" fill className="z-20 rounded-2xl" />
                </div>
                <div className="px-3">
                  <h3 className="mt-8 font-bold mb-2">
                    5 Graphic Design Skills That Will Strengthen Your Creativity
                  </h3>
                  <span className="text-sm">Apr 9, 2020</span>
                </div>
              </div>
            </li>
            <li>
              <div className="text-white rounded-2xl">
                <div className="h-80 relative">
                  <Image src="/images/blog/post-1.png" alt="Dashed Line" fill className="z-20 rounded-2xl" />
                </div>
                <div className="px-3">
                  <h3 className="mt-8 font-bold mb-2">
                    5 Graphic Design Skills That Will Strengthen Your Creativity
                  </h3>
                  <span className="text-sm">Apr 9, 2020</span>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section className="mt-32 relative">
          <div className="custom-container grid lg:grid-cols-2 gap-y-6 items-center">
            <div>
              <span className="text-primary block font-bold text-sm">Join Dominie At Best</span>
              <p className="text-white font-semibold text-3xl mt-6">The number one factor in  relevance drives out resistance.</p>
              <p className="text-[#B7CBFA] mt-8">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button type="button" className="border-2 py-3 px-10 rounded-bl-2xl rounded-tr-2xl w-full lg:w-auto mt-12 text-white">Learn More</button>
            </div>
            <div className="flex flex-col items-center">
              <Image src={Trophies} alt="" />
            </div>
          </div>
          <Image src={Circle} alt="Dashed Line" className="absolute -right-0 -top-96 -z-20" />
        </section>
      </main>
      
      <footer className="bg-primary-400 pt-16 pb-8">
        <div className="custom-container grid lg:grid-cols-10 gap-y-10 gap-x-16 text-white">
          <div className="flex flex-col gap-y-4 lg:col-span-4">
            <span className="text-2xl font-medium">EducationTemp</span>
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
    </>
  )
}
