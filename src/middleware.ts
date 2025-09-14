import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: [
    // Match all paths except for static files and internal Next.js paths
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Handle the redirect for /games/apps/codmod
  if (pathname === '/games/apps/codmod') {
    const url = request.nextUrl.clone();
    url.pathname = '/games/apps/cod-mobile-mod-menu';
    return NextResponse.redirect(url, 308); // Using 308 for permanent redirect
  }

  return NextResponse.next();
}
