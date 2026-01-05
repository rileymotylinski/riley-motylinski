import { NextResponse, type NextRequest } from 'next/server';
export { auth as middleware } from "@/auth";
import { auth } from "@/auth";
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();
const rateLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5,'10 s') // 5 requests ever 10s from the same ip
})
 
// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
    // rate limiting
    const ip = request.headers.get('x-forwarded-for') ?? '127.0.0.1';
    const { success } = await rateLimiter.limit(ip);

    if (!success) {
        return new Response('Rate limit exceeded', { status: 429 });
    }
    
    let session = await auth();

    if (!session?.user) {
      return NextResponse.redirect(process.env.NEXT_PUBLIC_HOME_URL!)
    }
   return NextResponse.next();
}

// any requests to anything under admin will automaticlly refresh token
export const config = {
  matcher: ['/admin/:path*/','/api/:path*/'],
}