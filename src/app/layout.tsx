import './globals.css'

import type { Metadata } from 'next'
import { Questrial } from 'next/font/google'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { cn } from '@/lib/utils'

const questrial = Questrial({ subsets: ['latin'], weight: ['400'] })

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
                questrial.className,
                'bg-zinc-950 text-neutral-200'
            )}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    ) 
}
