import { getServerSession } from "next-auth"

export default async function Profile() {
  const session = await getServerSession()

  return (
    <div className="min-h-screen text-white custom-container">{session?.user?.name}</div>
  )
}