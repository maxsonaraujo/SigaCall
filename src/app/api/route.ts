import { NextRequest } from "next/server";
import { revalidatePath } from "next/cache";



// Define the GET request handler function
export async function GET(req: NextRequest) {
  // Check if the database instance has been initialized
  revalidatePath(req.nextUrl.basePath)



  // Perform a database query to retrieve all items from the "items" table
  const items:any = [];

  // Return the items as a JSON response with status 200
  return new Response(JSON.stringify(items), {
    headers: { "Content-Type": "application/json", 'Cache-Control': 'no-store' },
    status: 200,
  });
}


export const dynamic = 'force-dynamic'