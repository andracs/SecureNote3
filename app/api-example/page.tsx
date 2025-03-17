"use client"
import CustomLink from "@/components/custom-link"
import { useEffect, useState } from "react"

export default function Page() {
  const [data, setData] = useState()
  useEffect(() => {
    ;(async () => {
      const res = await fetch("/api/protected")
      const json = await res.json()
      setData(json)
    })()
  }, [])
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">API Endpoints Documentation</h1>
      <ul>
        <li><strong>GET /api/notes</strong> &mdash; Fetch all notes.</li>
        <li><strong>POST /api/notes</strong> &mdash; Create a new note.</li>
        <li><strong>PUT /api/notes/[id]</strong> &mdash; Update an existing note.</li>
        <li><strong>DELETE /api/notes/[id]</strong> &mdash; Delete an existing note.</li>
      </ul>
      <p>Brug fx <a href="https://curl.se" className="text-blue-600 font-bold">curl</a> eller <a href="https://www.postman.com" className="text-blue-600 font-bold">Postman</a> til at arbejde med API'en.
      </p>
    </div>
  )
}
