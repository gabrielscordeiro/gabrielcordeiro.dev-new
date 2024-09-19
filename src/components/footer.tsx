import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import { menu } from '@/data/menu'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] })

export function Footer() {
    return (
        <footer className={cn(
            'border-t-2 border-t-neutral-600',
            inter.className
        )}>
            <div className="container">
                <div className="grid grid-cols-2 gap-16 py-28">
                    <div>
                        <div className="flex items-center gap-8">
                            <div className="avatar overflow-hidden rounded-full">
                                <Image
                                    src="/assets/avatar-mini.png"
                                    alt="Gabriel Schmidt Cordeiro"
                                    width={134}
                                    height={134}
                                    className="brightness-125"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-semibold text-neutral-100">Gabriel S. Cordeiro</span>
                                <span className="text-xl text-neutral-500">Senior front-end developer</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-5xl font-semibold text-neutral-100">Get in touch</h4>
                    </div>
                </div>

                <div className="border-t border-t-neutral-500 py-8">
                    <ul className="group flex gap-8 text-xl font-semibold text-neutral-200">
                        {menu.map((item) => (
                            <li key={item.link}>
                                <Link href={item.link} className="text-md">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}