import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const sessionValue = request.cookies.get('sessionValue')?.value;
  console.log('✅ Middleware engaged');
  console.log('🧠 Session cookie value in middleware:', sessionValue);

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard'], // Only intercept requests to /dashboard
};
