import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
export async function POST(request: NextRequest) {
  const { value } = await request.json();

  const response = NextResponse.json({ success: true });
  response.cookies.set('sessionValue', value, {
    httpOnly: true,
    secure: true,
    path: '/',
    sameSite: 'lax',
  });

  return response;
}
