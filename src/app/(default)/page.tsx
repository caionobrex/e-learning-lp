import Arrow from '@/assets/arrow.svg';
import Circle from '@/assets/circle.svg';
import HeroDashedLine from '@/assets/heroDashedLine.svg';
import HeroEllipse from '@/assets/heroEllipse.svg';
import Internet from '@/assets/internet.svg';
import Pencil from '@/assets/pencil.svg';
import Rocket from '@/assets/rocket.svg';
import RocketLaunch from '@/assets/rocketLaunch.png';
import Trophies from '@/assets/trophies.png';
import { prisma } from '@/db';
import Image from "next/image";
import Link from 'next/link';

// const courses = [
//   { img: '/images/courses/course-1.png', name: `HTML + CSS`, category: { name: 'Desenvolvimento WEB' } },
//   { img: '/images/courses/course-4.png', name: `Logica de programação`, category: { name: 'Desenvolvimento WEB' } },
//   { img: '/images/courses/course-5.png', name: `Javascript`, category: { name: 'Desenvolvimento WEB' } },
//   { img: '/images/courses/course-3.png', name: `HTML + CSS + JS`, category: { name: 'Desenvolvimento WEB' } },
//   { img: '/images/courses/course-1.png', name: `React`, category: { name: 'Desenvolvimento WEB' } },
//   { img: '/images/courses/course-4.png', name: `NodeJS`, category: { name: 'Desenvolvimento WEB' } },
//   { img: '/images/courses/course-2.png', name: `Full-Stack`, category: { name: 'Desenvolvimento WEB' } },
// ]

// const categories = [
//   { img: '/images/categories/category-1.svg', name: `Programação` },
//   { img: '/images/categories/category-1.svg', name: `Desenvolvimento WEB` },
//   // { img: '/images/categories/category-1.svg', name: `Graphic Design` },
//   // { img: '/images/categories/category-1.svg', name: `Art & Humanities` },
//   // { img: '/images/categories/category-1.svg', name: `Personal Development` },
//   // { img: '/images/categories/category-1.svg', name: `IT and Software` },
// ]

export const CourseCard = ({ course }) => {
  return (
    <Link href={`/courses/${course.slug}`} className="bg-primary-400 rounded-2xl transition-all duration-500 lg:hover:-translate-y-5 block">
      <div className="relative h-48">
        <Image src={course.img} alt={course.name} fill style={{ objectFit: 'cover' }} className="rounded-t-2xl" />
      </div>
      <div className="p-6">
        <span className="text-primary-300 text-xs font-semibold">{course.category.name}</span>
        <h2 className="mt-2 text-white font-bold text-lg">
          {course.name}
        </h2>
        <div className="flex justify-between items-center mt-6 text-primary-300 text-xs font-semibold">
          <span>{course.studentsCount} students</span>
          <span>01h 49m</span>
        </div>
      </div>
    </Link>
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
          <span className="text-primary-100">{category.studentsCount} students</span>
        </div>
      </div>
    </div>
  )
}

export default async function Home() {
  const [courses, categories] = await Promise.all([
    prisma.course.findMany({ include: { CoursesOnCategories: { include: { category: true } } } }),
    prisma.category.findMany()
  ])

  return (
    <>
      <Image src={Circle} alt="Dashed Line" className="absolute -right-0 -top-72 -z-20 animate-pulse" />
      <main className="min-h-screen pb-28">
        <section className="custom-container text-white mt-8 md:mt-24">
          <div className="relative">
            <Image src={HeroDashedLine} alt="Dashed Line" className="hidden lg:block" />
            <div className="lg:absolute left-1/2 -top-4 lg:-top-5 2xl:-top-8 lg:-translate-x-1/2 w-full h-full flex flex-col lg:items-center">
              <h1 className="text-4xl sm:text-5xl 2xl:text-6xl text-center font-bold">
                Seja um baita de um <span>programador</span>
              </h1>
              <p className="text-center mt-6 text-sm md:mt-14 font-semibold md:text-xl lg:w-3/4 mx-auto text-gray-300">
                In a coaching role, you ask the questions and rely more on your staff, who become the experts, to provide the information.
              </p>
              <div className="flex flex-col gap-y-4 items-center gap-x-8 mt-10 sm:flex-row">
                <button type="button" className="border-2 py-3 px-10 rounded-bl-2xl rounded-tr-2xl w-full lg:w-auto hover:bg-primary transition-all">Join as Student</button>
                <button type="button" className="border-2 py-3 px-10 rounded-bl-2xl rounded-tr-2xl w-full lg:w-auto hover:bg-primary transition-all">Join as Instructor</button>
              </div>
              <Image src={Rocket} alt="Dashed Line" className="lg:absolute lg:block -bottom-[26rem] lg:-bottom-[36rem] xl:-bottom-[30rem] xl:left-52 2xl:left-64 -z-10" />
            </div>
            <Image src={Pencil} alt="Dashed Line" className="hidden absolute xl:top-1/3 xl:block xl:left-28 -z-20" />
            <Image src={Arrow} alt="Dashed Line" className="hidden absolute top-1/2 xl:block -translate-y-1/2 left-72 -z-20" />
            <Image src={Internet} alt="Dashed Line" className="hidden absolute top-1/2 xl:block -translate-y-1/2 right-36 -z-20" />
            <Image src={HeroEllipse} alt="Dashed Line" className="absolute -bottom-[2rem] lg:-bottom-[36rem] 2xl:left-40 -z-20" />
          </div>
        </section>

        <section className="custom-container mt-10 lg:mt-[34rem] xl:mt-[26rem]">
          <span className="text-primary text-center block font-bold text-sm">Join Dominie At Best</span>
          <h2 className="text-center text-3xl text-white font-semibold mt-2">Nossos Cursos</h2>
          <ul className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-8 lg:mt-20">
            {courses.map((course) => (
              <li key={course.id}>
                <CourseCard course={{ ...course, category: { name: course.CoursesOnCategories[0].category.name } }} />
              </li>
            ))}
          </ul>
          <div className="flex justify-center mt-10">
            <button type="button" className="border-2 py-3 px-10 rounded-bl-2xl rounded-tr-2xl text-white hover:bg-primary transition-all">Saiba Mais</button>
          </div>
        </section>

        <section className="mt-24 lg:mt-28 relative">
          <Image src={Circle} alt="Dashed Line" className="absolute -right-0 -top-96 -z-20" />
          <div className="custom-container">
            <h2 className="text-center text-3xl text-white font-semibold mt-2">Top Categorias</h2>
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
              <h2 className="font-bold text-primary-500 mb-1">Testemunhas</h2>
              <p className="font-bold text-2xl">O que nossos estudantes dizem?</p>
              
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
                <p className="mt-8 text-center text-primary-50 text-sm">
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

        <section className="mt-16 lg:mt-32 relative">
          <div className="custom-container grid lg:grid-cols-2 gap-y-6 items-center">
            <div>
              <span className="text-primary block font-bold text-sm">Join Dominie At Best</span>
              <p className="text-white font-semibold text-3xl mt-6">The number one factor in  relevance drives out resistance.</p>
              <p className="text-[#B7CBFA] mt-8">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button type="button" className="border-2 py-3 px-10 rounded-bl-2xl rounded-tr-2xl w-full lg:w-auto mt-12 text-white hover:bg-primary transition-all">Learn More</button>
            </div>
            <div className="flex flex-col items-center">
              <Image src={Trophies} alt="" />
            </div>
          </div>
          <Image src={Circle} alt="Dashed Line" className="absolute -right-0 -top-96 -z-20" />
        </section>
      </main>
    </>
  )
}