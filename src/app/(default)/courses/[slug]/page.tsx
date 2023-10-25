import { prisma } from '@/db'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { Tabs } from './components/Tabs'
import Image from 'next/image'
import { Metadata } from 'next'

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const metadata: Metadata = {
    openGraph: {
      title: slug,
    },
  }
  return metadata
}

export default async function Course({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const course = await prisma.course.findFirst({
    where: { slug },
    include: { instructor: true, Modules: { include: { lectures: true } } },
  })

  if (!course) redirect('/')

  const session = await getServerSession()
  let hasThisCourse = false

  if (session) {
    hasThisCourse = !!(await prisma.enrolledCourses.findFirst({
      where: { user: { email: session.user!.email! }, courseId: course.id },
    }))
  }

  return (
    <>
      <main className="min-h-screen gap-x-4 pb-20">
        <div className="bg-primary-400 h-96 col-span-2 pt-20">
          <div className="custom-container grid h-full gap-y-10 lg:grid-cols-3 gap-x-6">
            <div className="lg:col-span-2 h-full">
              <h1 className="flex flex-col gap-y-5 text-white">
                <span className="text-3xl font-semibold">{course.name}</span>
                <span className="text-gray-300 text-lg">{course.subTitle}</span>
              </h1>
              <div className="mt-6 text-white flex items-center justify-between">
                <div className="flex items-center gap-x-4">
                  <div className="w-16 h-16 bg-black rounded-full relative flex justify-center items-center">
                    {course.instructor.picture ? (
                      <Image
                        src={course.instructor.picture}
                        alt=""
                        fill
                        className="object-cover rounded-full"
                      />
                    ) : (
                      <span>dsa</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <span className="text-gray-300">Criado por:</span>
                    <span className="font-medium">
                      {course.instructor.firstName +
                        ' ' +
                        course.instructor.lastName}
                    </span>
                  </div>
                </div>
                <div>dsa</div>
              </div>
            </div>
            <div className="custom-container">
              <div className="w-full h-96 bg-gray-900 pt-4">
                <div className="custom-container">
                  <header className="text-white mb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-x-2">
                        <span className="font-medium text-2xl">
                          {course.discountedPrice.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          })}
                        </span>
                        <span className="font-medium text-gray-300 text-sm line-through">
                          {course.price.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          })}
                        </span>
                      </div>
                      <span className="bg-primary-400 px-3 py-2 text-sm font-medium">
                        {course.discount}% off
                      </span>
                    </div>
                  </header>
                  <button
                    type="button"
                    className="bg-primary-400 text-white w-full py-3 mt-4 font-semibold"
                  >
                    Adicionar Ao Carrinho
                  </button>
                  <button
                    type="button"
                    className="bg-primary-400 text-white w-full py-3 mt-4 font-semibold"
                  >
                    Comprar Agora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="custom-container grid lg:grid-cols-3 mt-8">
          <div className="lg:col-span-2">
            <div style={{ paddingTop: '56.25%', position: 'relative' }}>
              <iframe
                src="https://player.vimeo.com/video/876040533?h=8edf1496ed&title=0&byline=0"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="text-white mt-9 pb-10">
              <Tabs course={course} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
