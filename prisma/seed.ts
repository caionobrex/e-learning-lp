import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // await prisma.post.create({
  //   data: {
  //     title: 'Hello world 2',
  //     slug: 'hello-world-2',
  //     content: 'dsadas',
  //     summary: '',
  //     thumb: '/images/blog/post-1.png',
  //     userId: '51eb94c9-bb40-4927-9e68-3fd8daca5cbd',
  //   }
  // })
  // const user = await prisma.user.create({
  //   data: {
  //     firstName: 'Caio',
  //     lastName: 'Nobre',
  //     email: 'joao@gmail.com',
  //     password: '123',
  //     description: 'dsadas',
  //   },
  // })

  // const category = await prisma.category.create({
  //   data: {
  //     name: 'Desenvolvimento WEB',
  //     img: '/images/categories/category-1.svg',
  //     studentsCount: 3,
  //     coursesCount: 3,
  //   },
  // })

  // const test = await prisma.module.create({
  //   data: {
  //     name: 'Getting Started',
  //     description: 'das',
  //     duration: 1000,
  //     lecturesCount: 2,
  //     lectures: {
  //       createMany: {
  //         data: [
  //           {
  //             name: 'Como funciona ?',
  //             description: 'dsadas',
  //             duration: 1000,
  //             video: '',
  //             thumbnail: '',
  //           },
  //           {
  //             name: 'Como funciona 2 ?',
  //             description: 'dsadas',
  //             duration: 1000,
  //             video: '',
  //             thumbnail: '',
  //           },
  //         ],
  //       },
  //     },
  //   },
  // })

  // const course = await prisma.course.create({
  //   data: {
  //     name: 'HTML + CSS',
  //     subTitle: 'das',
  //     description: 'dsa',
  //     video: '',
  //     userId: user.id,
  //     price: 12,
  //     discount: 10,
  //     discountedPrice: 10,
  //     duration: 1000,
  //     img: '/images/courses/course-1.png',
  //     studentsCount: 2,
  //     lecturesCount: 2,
  //     modulesCount: 2,
  //     Modules: {
  //       connect: { id: test.id },
  //     },
  //     rating: 5,
  //     slug: 'html-e-css',
  //     CoursesOnCategories: {
  //       create: {
  //         categoryId: category.id,
  //       },
  //     },
  //   },
  // })

  // await prisma.testimonial.createMany({
  //   data: [
  //     {
  //       name: 'Caio',
  //       content: '',
  //       picture: '',
  //     },
  //   ],
  // })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
