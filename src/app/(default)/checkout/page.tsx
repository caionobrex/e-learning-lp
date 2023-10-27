'use client'

import { Payment } from '@mercadopago/sdk-react'
import clsx from 'clsx'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { MdSync } from 'react-icons/md'
import { SignUpCard } from '../signup/components/SignUpCard'
import axios from 'axios'
import { useCartStore } from '@/stores/cart'

const initialization = {
  amount: 100,
}

const customization = {
  paymentMethods: {
    bankTransfer: 'all',
    creditCard: 'all',
    debitCard: 'all',
    mercadoPago: 'all',
  },
}

// Credit Cards
// 5031 4332 1540 6351
// 123
// 11/25

const Checkout = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const products = useCartStore((state) => state.products)
  const session = useSession()

  const onSubmit = async ({ selectedPaymentMethod, formData }) => {
    console.log(formData)
    setEmail(formData.payer.email)
    if (!session) {
      setIsOpen(true)
    }

    await axios.post('/api/pay', {
      products: products.map((p) => p.id),
      paymentMethod: formData.payment_method_id,
      token: formData.token,
      issuer: formData.issuer_id,
      installments: formData.installments,
      payer: {
        email: formData.payer.email,
      },
    })
  }

  const onError = async (error) => {
    // callback chamado para todos os casos de erro do Brick
    console.log(error)
  }

  const onReady = async () => setIsLoading(false)

  return (
    <main className="min-h-screen custom-container pt-10 flex flex-col items-center">
      {isLoading ? (
        <MdSync className="animate-spin text-white text-3xl" />
      ) : null}
      <div
        className={clsx('w-full md:w-[30rem]', isLoading ? 'hidden' : 'block')}
      >
        <Payment
          initialization={{
            ...initialization,
            payer: {
              email: session.data?.user?.email ?? '',
            },
          }}
          customization={{
            paymentMethods: {
              bankTransfer: 'all',
              creditCard: 'all',
              debitCard: 'all',
              mercadoPago: 'all',
            },
            visual: {
              style: { theme: 'dark' },
              defaultPaymentOption: { bankTransferForm: true },
            },
          }}
          onSubmit={onSubmit}
          onReady={onReady}
          onError={onError}
        />
      </div>
      {isOpen ? (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center">
          <SignUpCard defaultValues={{ email }} />
        </div>
      ) : null}
    </main>
  )
}

export default Checkout
