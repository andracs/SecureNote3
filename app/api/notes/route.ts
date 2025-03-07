import prisma from '@/lib/prisma'

// GET endpoint to fetch notes
export async function GET(request: Request) {
  // For example, fetch data from your DB here
  const notes = await prisma.note.findMany();

  return new Response(JSON.stringify(notes), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

// PUT use notes/[id] instead
export async function PUT(request: Request) {
  return new Response("Use notes/[id] instead", { status: 501 });
} 

// DELETE use notes/[id] instead
export async function DELETE(request: Request) {
  return new Response("Use notes/[id] instead", { status: 501 });
}


// POST endpoint to create a new note
export async function POST(request: Request) {
  // Parse the request body
  try {
    const body = await request.json();
    console.log("Body --> " + body);
    const { note } = body;
    const newNote = { id: Date.now(), note };

    return new Response(JSON.stringify(newNote), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    if (e instanceof Error) {
      return new Response(e.message, { status: 400 });
    }
    return new Response('Unknown error', { status: 400 });
  }

  // e.g. Insert new user into your DB
}