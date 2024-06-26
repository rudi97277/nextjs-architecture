import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes = ['/portal/master/companies/branch']
const auth = true

// export default function middlewareAuth(req: NextRequest) {
//   if (auth && protectedRoutes?.includes(req.nextUrl.pathname)) {
//     const absUrl = new URL('/', req.nextUrl.origin)
//     // return NextResponse.redirect(absUrl.toString())


//   } else {


//   }
// }

export function middleware(request: NextRequest) {
  return NextResponse.next()

}