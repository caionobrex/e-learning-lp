'use client'

import { useCartStore } from '@/stores/cart'
import { Course } from '@prisma/client'
import { useEffect, useState } from 'react'

export const AddToCartButton = ({ product }: { product: Course }) => {
  const { products, addProduct } = useCartStore((state) => ({
    products: state.products,
    addProduct: state.addProduct,
  }))
  const [added, setAdded] = useState(false)

  useEffect(() => {
    setAdded(!!products.find((p) => p.id === product.id))
  }, [product.id, products])

  return (
    <button
      type="button"
      className="border-secondary bg-opacity-50 border text-white w-full py-3 mt-4 font-semibold transition-all duration-500 hover:bg-secondary"
      onClick={() => addProduct(product)}
    >
      {added ? 'Produto no seu carrinho' : 'Adicionar Ao Carrinho'}
    </button>
  )
}
