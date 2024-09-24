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
                    <div key={tag} className="rounded-xl bg-neutral-600 p-3 font-semibold text-neutral-200">
                        {tag}
                    </div>
                ))}
            </div>

            <div className="mt-10 max-w-[28rem] p-10 pb-0">
                <Image
                    src="/assets/logo-example.png"
                    alt="Logo example"
                    width={140}
                    height={42}
                    className="mt-10"
                />

                <h4 className="mt-5 text-3xl font-semibold leading-10">{title}</h4>

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