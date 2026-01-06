// import { NextResponse } from 'next/server'
 
// export function proxy(request) {
//   return NextResponse.json({ message: 'This is the proxy(middleware) response data from the about page' })
//   return NextResponse.redirect(new URL('/', request.url))
// }
 
// // Alternatively, you can use a default export:
// // export default function proxy(request) { ... }
 
// export const config = {
//   matcher: '/about/:path*',
// }



import { NextResponse } from 'next/server'
 
export function proxy(request) {
  if(request.nextUrl.pathname.startsWith('/about')) {{
    return NextResponse.rewrite(new URL('/', request.url))
  }}

  if(request.nextUrl.pathname.startsWith('/contact')) {{
    return NextResponse.rewrite(new URL('/about', request.url))
  }}
  return NextResponse.next()
}