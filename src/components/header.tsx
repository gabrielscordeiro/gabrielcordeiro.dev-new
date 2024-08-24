import Image from 'next/image'
import Link from 'next/link'

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
                    <li>
                        <Link href="#" className="text-md">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="text-md">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="text-md">
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="text-md">
                            Blog
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}