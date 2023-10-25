import { prisma } from "@/db"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Profile() {
  const session = await getServerSession()

  if (!session) redirect('/')

  const user = await prisma.user.findFirst({ where: { email: session.user!.email! } })

  return (
    <main className="min-h-screen text-white">
      <div className="bg-primary-400 h-44 pt-20">
        <div className="custom-container">
          {user?.firstName + ' ' + user?.lastName}
        </div>
      </div>
    </main>
  )
}