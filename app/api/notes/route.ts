
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
    return new Response(e.message, { status: 400 });
  }

  // e.g. Insert new user into your DB
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

// PUT not implemented
export async function PUT(request: Request) {
  return new Response("Not implemented", { status: 501 });
} 

// DELETE not implemented
export async function DELETE(request: Request) {
  return new Response("Not implemented", { status: 501 });
}