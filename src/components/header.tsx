import Image from 'next/image'
import Link from 'next/link'
import { HiMenu } from 'react-icons/hi'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent,SheetTrigger } from '@/components/ui/sheet'
import { menu } from '@/data/menu'

export function Header() {
    return (
        <header>
            <div className="container mx-auto flex items-center justify-between p-4 lg:px-0 lg:py-9">
                <h1 title="Gabriel Cordeiro">
                    <Link href="/">
                        <Image
                            src="assets/logo.svg"
                            alt="Gabriel Cordeiro Dev Logo"
                            width={200}
                            height={25}
                        />
                    </Link>
                </h1>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="default" size="icon" className="lg:hidden">
                            <HiMenu className="size-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="left" className="border-neutral-900 bg-neutral-900">
                        <div className="grid gap-2 py-6">
                            {menu.map((item) => (
                                <Link key={item.link} href={item.link} className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>


                <ul className="group hidden justify-between gap-8 text-neutral-200 lg:flex">
                    {menu.map((item) => (
                        <li key={item.link}>
                            <Link href={item.link} className="text-md text-neutral-300 transition-colors hover:text-neutral-50">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}