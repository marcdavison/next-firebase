import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const sessionValue = request.cookies.get('sessionValue')?.value;

  if (sessionValue !== 'correct-value') {
    console.log('🚫 Invalid or missing session cookie. Redirecting to /other');
    return NextResponse.redirect(new URL('/other', request.url));
  }
  console.log('✅ Middleware engaged');
  console.log('🧠 Session cookie value in middleware:', sessionValue);

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard'], // Only intercept requests to /dashboard
};
