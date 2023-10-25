export default function Cart() {
  const cart = [{
    name: 'course 1',
    total: 200,
  }]

  return (
    <main className="min-h-screen custom-container text-white pt-10">
      <form className="grid grid-cols-2 gap-x-20">
        <div>
          <h1 className="text-3xl font-semibold">Método de Pagamento</h1>
          <ul className="mt-8 flex flex-col gap-y-4">
            <li>
              <button className="border px-6 py-3 w-full text-left" type="button">Pix</button>
            </li>
            <li>
              <button className="border px-6 py-3 w-full text-left" type="button">Boleto</button>
            </li>
            <li>
              <button className="border px-6 py-3 w-full text-left" type="button">Adicionar Cartão</button>
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 mt-8">
            <div className="flex flex-col gap-y-2 col-span-2">
              <label htmlFor="">Name</label>
              <input type="text" className="w-full py-2" />
            </div>
            <div className="flex flex-col gap-y-2 col-span-2">
              <label htmlFor="">Name</label>
              <input type="text" className="w-full" />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="">Name</label>
              <input type="text" className="w-full" />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="">Name</label>
              <input type="text" className="w-full" />
            </div>
          </div>
        </div>
        <div className="px-8">
          <div className="shadow-md border p-6 bg-primary-400 border-primary-300">
            <header className="border-b pb-2">
              Cursos
              <ul className="mt-3">
                <li>course 1</li>
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
                  <span>Coupon Discount</span>
                  <span>8%</span>
                </li>
              </ul>
            </main>
            <footer className="mt-6">
              <div className="flex items-center justify-between">
                <span>Total:</span>
                <span className="font-semibold text-xl">$75.00 BRL</span>
              </div>
              <button type="button" className="mt-3 w-full bg-primary-500 py-2">Pagar</button>
            </footer>
          </div>
        </div>
      </form>
    </main>
  )
}