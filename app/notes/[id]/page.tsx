"use client"
import { useState, useEffect } from "react"

export default function Page({ params }: { params: Promise<{ id: string }> }) {
    const [notes, setNotes] = useState(null);
    const [id, setId] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            const { id } = await params;
            setId(id);
            const response = await fetch(`/api/notes/${id}`);
            if (response.status === 404) {
                setNotes(undefined);
                return;
            }
            if (!response.ok) {
                console.error("Failed to fetch note");
                return;
            }
            const notesData = await response.json();
            setNotes(notesData);
        }
        fetchData();
    }, [params]);

    const updateNote = async (e: any) => {
        e.preventDefault();
        const title = e.target[0].value;
        const content = e.target[1].value;
        const author = e.target[2].value;
        const note = JSON.stringify({ title, content, author });
        console.log(note);

        const updatedNote = await fetch(`/api/notes/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content, author }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(updatedNote);
    }

    if (notes === undefined) {
        return <div>404 - Note not found</div>;
    }

    if (!notes) {
        return <div>Loading..</div>;
    }

    return (
        <div>
            <form className="max-w-sm mx-auto" onSubmit={updateNote}>
                <h1 className="text-2xl font-bold">Opdater note</h1>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titel</label>
                    <input className="font-bold block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" defaultValue={notes?.title || ''} />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Besked</label>
                    <textarea className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={notes?.content || ''}></textarea>
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Skrevet af</label>
                    <input className="font-bold block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" defaultValue={notes?.author || ''} />
                </div>
                <button className="bg-blue-500 text-white p-2 rounded mt-5" type="submit">Opdater note</button>
            </form>
            <br />
            <a href="/notes" className="text-blue-500 hover:underline">Tilbage til alle noter</a>
        </div>
    )
}
