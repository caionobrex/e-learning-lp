import { Course } from '@prisma/client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ICartStore {
  products: Course[]
  total: number
  addProduct: (product: Course) => void
  removeProduct: (productId: string) => void
}

export const useCartStore = create<ICartStore>()(
  persist(
    (set) => ({
      products: [],
      total: 0,
      addProduct: (product) =>
        set((state) => {
          if (state.products.filter((p) => product.id === p.id).length > 0) {
            return state
          }
          return { products: [...state.products, product] }
        }),
      removeProduct: (productId) =>
        set((state) => ({
          products: state.products.filter(
            (product) => product.id !== productId,
          ),
        })),
    }),
    {
      name: 'cart-store',
    },
  ),
)
