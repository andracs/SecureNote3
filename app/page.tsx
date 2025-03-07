import CustomLink from "@/components/custom-link"
import { auth } from "auth"

export default async function Index() {
  const session = await auth()

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-6xl font-bold text-center mt-10">🔐🗒️🤓 Securenote 3</h1>
      <p className="text-lg text-center">A simple note-taking app that stores your notes securely.</p>
    </div>
  )
}
