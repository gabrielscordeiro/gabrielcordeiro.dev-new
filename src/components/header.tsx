import Image from 'next/image'
import Link from 'next/link'

import { menu } from '@/data/menu'

export function Header() {
    return (
        <header>
            <div className="container mx-auto flex items-center justify-between py-9">
                <h1>
                    <Image
                        src="assets/logo.svg"
                        alt="Gabriel Cordeiro Dev Logo"
                        width={200}
                        height={25}
                    />
                </h1>


                <ul className="group flex justify-between gap-8 text-neutral-200">
                    {menu.map((item) => (
                        <li key={item.link}>
                            <Link href={item.link} className="text-md">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}