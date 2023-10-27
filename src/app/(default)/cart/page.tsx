'use client'

import { PaymentMethod } from '@/enums/paymentMethod'
import { useCartStore } from '@/stores/cart'
import { initMercadoPago } from '@mercadopago/sdk-react'
import { Course } from '@prisma/client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

initMercadoPago('TEST-290653cb-94d1-4fc7-8a53-083a167255a7')

const paymentMethodMap = {
  [PaymentMethod.PIX]: 'PIX',
  [PaymentMethod.CARD]: 'Cartão de crédito',
  [PaymentMethod.BOLETO]: 'Boleto',
}

export interface ICartData {
  products: Course[]
  total: number
}

export default function Cart() {
  const session = useSession()
  const router = useRouter()
  const { products, total } = useCartStore((state) => ({
    products: state.products,
    total: state.total,
  }))
  const [cart, setCart] = useState<ICartData>({
    products: [],
    total: 0,
  })

  const payHandler = () => {
    // if (!session) {
    // }
    // try {
    //   await PaymentsService.pay({ products: cart.products.map((p) => p.id) })
    // } catch (err) {
    //   console.log(err)
    // }
    router.push('/checkout')
  }

  useEffect(() => {
    setCart({
      products,
      total,
    })
  }, [products, total])

  return (
    <main className="min-h-screen custom-container text-white pt-10">
      <form className="grid grid-cols-6 gap-x-20" id="formCheckout">
        <div className="col-span-4">
          <h2 className="mb-8 text-3xl font-semibold">Seus Items</h2>
          <ul className="flex flex-col gap-y-5">
            {cart.products.map((product) => (
              <li
                key={product.id}
                className="flex items-center justify-between w-full"
              >
                <div className="flex items-center gap-x-6">
                  <div className="relative w-16 h-16 rounded-full">
                    <Image
                      src={product.img}
                      alt={product.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <span className="font-medium text-xl">{product.name}</span>
                </div>
                <span className="font-medium text-lg">
                  {product.discountedPrice.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2">
          <div className="shadow-md p-6 bg-gray-900">
            <header className="border-b pb-2">
              Cursos
              <ul className="mt-3">
                {cart.products.map((product) => (
                  <li key={product.id}>{product.name}</li>
                ))}
              </ul>
            </header>
            <main className="border-b pb-4 mt-6">
              <span>Resumo do pedido</span>
              <ul className="mt-3 flex flex-col gap-y-2">
                <li className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span>$61.97 USD</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Cupom de Desconto</span>
                  <span>8%</span>
                </li>
              </ul>
            </main>
            <footer className="mt-6">
              <div className="flex items-center justify-between">
                <span>Total:</span>
                <span className="font-semibold text-xl">
                  {cart.total.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}{' '}
                  BRL
                </span>
              </div>
              <button
                type="button"
                className="mt-8 w-full bg-secondary py-3 rounded-bl-2xl rounded-tr-2xl font-medium"
                onClick={payHandler}
              >
                Pagar
              </button>
            </footer>
          </div>
        </div>
      </form>
    </main>
  )
}
