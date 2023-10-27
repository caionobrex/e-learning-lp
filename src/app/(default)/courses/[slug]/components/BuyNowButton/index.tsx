import { Course } from '@prisma/client'

export const BuyNowButton = ({ product }: { product: Course }) => {
  return (
    <button
      type="button"
      className="bg-secondary text-white w-full py-3 mt-4 font-semibold transition-all duration-500 border border-secondary hover:bg-transparent"
    >
      Comprar Agora
    </button>
  )
}
