"use client"

import { useState, useEffect } from "react"

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const [notes, setNotes] = useState<{ id: string; title: string; content: string; author: string }[]>([]);
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/notes/`);
      const notes = await response.json();
      setNotes(notes);
    }
    fetchData();
  }, [params]);

  const handleDelete = async (id: string) => {
    await fetch(`/api/notes/${id}`, {
      method: 'DELETE',
    });
    if (notes) {
      setNotes(notes.filter(note => note.id !== id));
    }
  };

  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold">Alle noter</h1>
      {notes && notes.map(note => (
        <div key={note.id} className="p-4 border rounded">
          <h2 className="text-xl font-semibold">
            <a href={`/notes/${note.id}`} className="text-blue-500 hover:underline">{note.title}</a>
          </h2>
          <p>{note.content}</p>
          <p className="text-sm text-gray-500">Author: {note.author.toLowerCase()}</p>
          <button
            onClick={() => handleDelete(note.id)}
            className="mt-2 text-red-500 hover:underline"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}
