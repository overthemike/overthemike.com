import type React from 'react'
import type { Metadata } from 'next'
import { Sometype_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Suspense } from 'react'
import './globals.css'

const someTypeMono = Sometype_Mono({
	variable: '--font-geist-mono',
	weight: '400',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Michael Sweeney - Staff+ Frontend Engineer',
	description:
		'Portfolio of Michael Sweeney, Staff+/Principal-level frontend engineer and Valtio core maintainer',
	generator: 'v0.app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className="dark">
			<body className={`font-mono ${someTypeMono.variable} ${someTypeMono.variable}`}>
				<Suspense fallback={null}>{children}</Suspense>
				<Analytics />
			</body>
		</html>
	)
}
