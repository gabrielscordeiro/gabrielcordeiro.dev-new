import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Gabriel Schmidt Cordeiro | Dev',
    description: 'Senior Front-end Developer',
}

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(
                inter.className,
                'bg-zinc-900'
            )}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    ) 
}
