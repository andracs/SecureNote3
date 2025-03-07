import prisma from '@/lib/prisma'
import { NextRequest } from 'next/server';

// GET endpoint to fetch notes
export async function GET(request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const noteId = (await params).id;
  
  const note = await prisma.note.findFirst({
    where: {
      id: Number(noteId)
    }
  });

  if (note && note.published) {
    return new Response(JSON.stringify(note), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } else {
    return new Response("Note not found", { status: 404 });
  }
}

// DELETE endpoint to delete a note
export async function DELETE(request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const noteId = (await params).id;

  try {
    const updatedNote = await prisma.note.update({
      where: {
        id: Number(noteId)
      },
      data: {
        published: false
      }
    });

    return new Response(JSON.stringify(updatedNote), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response("Note not found", { status: 404 });
  }
}

// PUT endpoint to update a note
export async function PUT(request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const noteId = (await params).id;
  const data = await request.json();

  try {
    const updatedNote = await prisma.note.update({
      where: {
        id: Number(noteId)
      },
      data
    });

    return new Response(JSON.stringify(updatedNote), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response("Note not found", { status: 404 });
  }
}



// CREATE not implemented
export async function CREATE(request: Request) {
  return new Response("Use note/ without number argument", { status: 501 });
}