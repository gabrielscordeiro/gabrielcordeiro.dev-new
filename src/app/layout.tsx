import './globals.css'

import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next'
import { Questrial } from 'next/font/google'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { cn } from '@/lib/utils'

const questrial = Questrial({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
    title: 'Gabriel Schmidt Cordeiro | Dev',
    description: 'Senior Front-end Developer',
    keywords: ['Frontend Developer', 'Web Developer', 'HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.jS', 'Next.js architecture', 'Senior Front-end Developer'],
    creator: 'Gabriel Schmidt Cordeiro',
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
                <GoogleAnalytics gaId="G-SKV4BSGH8H" />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    ) 
}
