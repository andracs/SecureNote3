import prisma from '@/lib/prisma'

// CREATE not implemented here 
export async function CREATE(request: Request) {
   return new Response("Not implemented", { status: 501 });
}


// GET endpoint to fetch notes
export async function GET(request: Request) {
    // For example, fetch data from your DB here
    const notes = [
      { id: 1, note: 'Køb' },
      { id: 2, note: 'Sælg' }
    ];
    return new Response(JSON.stringify(notes), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  // PUT endpoint to update a note
export async function PUT(request: Request) {
    try {
      const body = await request.json();
      console.log("Body --> " + body);
      const { id, note } = body;
      // Update the note in your DB here
      const updatedNote = { id, note };
  
      return new Response(JSON.stringify(updatedNote), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (e) {
      return new Response(e.message, { status: 400 });
    }
  }
  
  // DELETE endpoint to delete a note
  export async function DELETE(request: Request) {
    try {
      const body = await request.json();
      console.log("Body --> " + body);
      const { id } = body;
      // Delete the note from your DB here
  
      return new Response(JSON.stringify({ message: `Note with id ${id} deleted` }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (e) {
      return new Response(e.message, { status: 400 });
    }
  }
