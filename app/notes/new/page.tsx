"use client"

import { useState } from "react";

// A form which calls the api to create a new note
export default function NewNote() { 
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const note = { title, author, content };

    try {
      const res = await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      });

      if (res.ok) {
        setTitle("");
        setAuthor("");
        setContent("");
      } else {
        console.error("Failed to create note");
      }
    } catch (error) {
      console.error("Failed to create note");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Ny note</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Titel"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Forfatter"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Indhold"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded"
          >
            Opret note
          </button>
        </div>
      </form>
    </div>
  );
} 
