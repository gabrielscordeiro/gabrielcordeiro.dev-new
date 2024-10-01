import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'

interface PortifolioItemProps {
    tags: string[];
    logo: string
    title: string;
    image: string;
}

const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] })

export function PortfolioItem({
    tags,
    logo,
    title,
    image
}: PortifolioItemProps) {
    return (
        <Link href="/" className={cn(
            'flex flex-col rounded-2xl bg-neutral-800 relative my-12 overflow-hidden transition-transform delay-75 duration-150 hover:scale-[1.05]',
            inter.className
        )}>
            <div className="absolute right-8 top-8 flex justify-end gap-2">
                {tags.map((tag) => (
                    <div key={tag} className="rounded-xl bg-neutral-600 p-2 text-xs font-semibold text-neutral-200 md:p-3 md:text-xs">
                        {tag}
                    </div>
                ))}
            </div>

            <div className="mt-10 max-w-[28rem] p-5 pb-0 md:p-10">
                <Image
                    src="/assets/logo-example.png"
                    alt="Logo example"
                    width={140}
                    height={42}
                    className="mt-10"
                />

                <h4 className="mt-5 text-xl font-semibold leading-10 md:text-3xl">{title}</h4>
                
                <div className="hidden">
                    {logo}
                    {image}
                </div>
            </div>

            <Image
                src="/assets/thumb.png"
                alt="Project example"
                width={1164}
                height={964}
            />

        </Link>
    )
}