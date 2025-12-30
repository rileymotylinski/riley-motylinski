import { NextResponse, type NextRequest } from 'next/server'
export { auth as middleware } from "@/auth"
import { auth } from "@/auth"
 
// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
    console.log("not auth");
    let session = await auth();
    
    if (!session?.user) {
        
        return NextResponse.redirect("http://localhost:3000")
    }
   return NextResponse.next();
}

// any requests to anything under admin will automaticlly refresh token
export const config = {
  matcher: '/admin/:path*/',
}