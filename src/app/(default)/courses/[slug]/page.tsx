import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { Tabs } from "./components/Tabs"

export default async function Course() {
  const session = await getServerSession()
  const course = {
    price: 20,
    isFree: false
  }

  return (
    <>
      <main className="min-h-screen gap-x-4 pb-20">
        <div className="bg-primary-400 h-96 col-span-2 pt-20">
          <div className="custom-container grid h-full grid-cols-3 gap-x-6">
            <div className="col-span-2 h-full">
              <h1 className="flex flex-col gap-y-5 text-white">
                <span className="text-3xl font-semibold">
                  Complete Website Responsive Design: from Figma to Webflow to Website Design
                </span>
                <p className="text-gray-300 text-lg">3 in 1 Course: Learn to design websites with Figma, build with Webflow, and make a living freelancing.</p>
              </h1>
              <div className="mt-6 text-white flex items-center justify-between">
                <div className="flex items-center gap-x-4">
                  <div className="w-16 h-16 bg-black rounded-full flex justify-center items-center">Photo</div>
                  <div className="flex flex-col gap-y-2">
                    <span className="text-gray-300">Created By:</span>
                    <span className="font-medium">Dianne Russell</span>
                  </div>
                </div>
                <div>
                  dsa
                </div>
              </div>
            </div>
            <div className="custom-container">
              <div className="w-full h-96 bg-gray-900 pt-4">
                <div className="custom-container">
                  <header className="text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium text-xl">R$14.00</span>
                      </div>
                    </div>
                  </header>
                  <button type="button" className="bg-primary-400 text-white w-full py-3 mt-4 font-semibold">Adicionar Ao Carrinho</button>
                  <button type="button" className="bg-primary-400 text-white w-full py-3 mt-4 font-semibold">Comprar Agora</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="custom-container grid grid-cols-3 mt-8">
          <div className="col-span-2">
            <div className="h-96 bg-gray-900"></div>
            <div className="text-white mt-9 pb-10">
              <Tabs />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
