import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware (request: NextRequest) {
  const token = request.cookies.get('course.token')?.value
  const currentRoute = request.nextUrl.pathname

  // caso o usuário não esteja logado, sera redirecionado para a pagina de login
  if (!token && currentRoute === '/') {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // caso o usuário esteja logado, não será possivel acessar as paginas de login e registro
  if (token && (currentRoute === '/login' || currentRoute === '/register')) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)' // todas as rotas exceto /api, /_next/static, /_next/image, /favicon.ico, /images
  ]
}
