import { PrismaClient } from '@prisma/client'

export enum PaymentMethod {
  CARD = 'CARD',
  PIX = 'PIX',
  BOLETO = 'BOLETO',
}

export class Pay {
  constructor(private readonly prisma: PrismaClient) {}

  async execute({
    userId,
    products,
    coupon,
    paymentMethod,
    token,
    installments,
  }: {
    userId: string
    products: string[]
    coupon?: string
    token?: string
    paymentMethod: PaymentMethod
    installments?: number
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
      transaction_amount: total,
      token,
      description: 'Compra de curso na plataforma SkyLunar.',
      installments,
      payment_method_id: '',
      // issuer_id: req.issuer,
      payer: {
        email: user?.email,
        // identification: {
        //   type: req.identificationType,
        //   number: req.number
        // }
      },
    }
  }
}
