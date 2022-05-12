import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
//! Middeware for protection against CSRF attacks
const signedinPages = ['/user']

export default function middleware(req: NextRequest): NextResponse | undefined {
	const url = req.nextUrl.clone()
	url.pathname = '/signin'
	if (signedinPages.find(p => p === req.nextUrl.pathname)) {
		const token = req.cookies.TRAX_ACCESS_TOKEN

		if (!token) {
			return NextResponse.redirect(url)
		}
	}
}
