export default async function Lecture() {
  const lecture = {}

  return (
    <>
      <header className="bg-primary-400 px-8 py-4 flex items-center justify-between">
        <div className="">
          <span>Complete Website Responsive Design: from Figma to Webflow to Website Design</span>
        </div>
        <div>
          <button className="bg-white">Proxima Aula</button>
        </div>
      </header>
      <main className="text-white min-h-screen">
        <div className="w-full bg-gray-900 flex flex-col items-center">
          <div></div>
        </div>
      </main>
      <footer className="bg-primary-400 pt-16 pb-8">
        <div className="custom-container grid lg:grid-cols-10 gap-y-10 gap-x-16 text-white">
          <div className="flex flex-col gap-y-4 lg:col-span-4">
            <span className="text-2xl font-medium"><span className="font-extrabold">Sky</span>Lunar</span>
            <p className="font-thin">Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolore eu fugiat nulla pariatur. </p>
          </div>
          <div className="flex flex-col gap-y-4 lg:col-span-2">
            <span className="text-2xl font-medium">Quick Links</span>
            <p className="font-thin">Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolore eu fugiat nulla pariatur. </p>
          </div>
          <div className="flex flex-col gap-y-4 lg:col-span-4">
            <span className="text-2xl font-medium">Contact Us</span>
            <p className="font-thin">Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolore eu fugiat nulla pariatur. </p>
          </div>
        </div>
        <div className="text-center mt-20 text-white border-t border-gray-500 pt-6 custom-container font-thin">
          Copyright 2023 | All Rights Reserved
        </div>
      </footer>
      {/* <aside className="fixed top-0 right-0 bg-primary-400 w-96 h-full pt-8">
        <div className="custom-container">
          ds
        </div>
      </aside> */}
    </>
  )
}