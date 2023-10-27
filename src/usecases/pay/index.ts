import { PaymentMethod } from '@/enums/paymentMethod'
import { PrismaClient } from '@prisma/client'
import { MercadoPagoConfig, Payment } from 'mercadopago'

const DEFAULT_ACCESS_TOKEN =
  'TEST-2152264619489912-111319-dd976587a0f667ea37629d3bc5719a0b-814760624'

const client = new MercadoPagoConfig({
  accessToken: DEFAULT_ACCESS_TOKEN,
})

const payment = new Payment(client)

export class Pay {
  constructor(private readonly prisma: PrismaClient) {}

  async execute({
    userId,
    products,
    coupon,
    paymentMethod,
    issuer,
    token,
    installments,
  }: {
    userId: string
    products: string[]
    coupon?: string
    token: string
    issuer: number
    paymentMethod: PaymentMethod
    installments: number
  }) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } })
    const productsList = await this.prisma.course.findMany({
      where: { id: { in: products } },
    })
    const total = productsList.reduce(
      (acc, curr) => acc + curr.discountedPrice,
      0,
    )
    const payload = {
      token,
      installments,
      transaction_amount: total,
      description: 'Compra de curso na plataforma SkyLunar.',
      payment_method_id: paymentMethod,
      issuer_id: issuer,
      payer: {
        email: user?.email,
        // identification: {
        //   type: req.identificationType,
        //   number: req.number
        // }
      },
    }
    try {
      const res = await payment.create({ body: payload })
      console.log(res)
    } catch (err) {
      // todo
      console.log(err)
    }
    await this.prisma.enrolledCourses.createMany({
      data: productsList.map((course) => ({
        userId,
        courseId: course.id,
        progress: 0,
      })),
    })
  }
}
