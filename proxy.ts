import type { NextRequest } from 'next/server'
export { auth as middleware } from "@/auth"
 
// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {}

 
// any requests to anything under admin will automaticlly refresh token
export const config = {
  matcher: '/admin/:path*',
}