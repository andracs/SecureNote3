import prisma from '@/lib/prisma'

export default async function Home() {
  const users = await prisma.user.findMany();
  const notes = await prisma.note.findMany();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-start p-8">
      <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
        Elementer i databasen
      </h1>
      <h2 className="text-xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">Users</h2>
      <ol className="list-decimal pl-5 font-[family-name:var(--font-geist-sans)]">
        {users.map((user) => (
          <li key={user.id} className="mb-2">
        <span className='font-bold'>{user.name}</span> - {user.email}
          </li>
        ))}
      </ol>
      <hr className="my-8 w-full border-t border-[#e2e8f0]" />
      <h2 className="text-xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">Notes</h2>
      <ol className="list-disc pl-5">
        {notes.map((note) => (
            <li key={note.id} className="mb-2">
            <span className="font-bold">{note.title} </span> 
             skrevet af 
            <span className="italic">{note.author}</span>
            </li>
        ))}
      </ol>
    </div>
  );
}
