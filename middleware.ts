// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // langsung ijinkan tanpa cek token
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
