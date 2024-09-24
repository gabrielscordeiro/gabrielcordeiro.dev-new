import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { BiLogoGmail } from 'react-icons/bi'
import { FaArrowRight, FaGithub, FaInstagram, FaLinkedin, FaStackOverflow } from 'react-icons/fa'

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
                                <span className="text-3xl font-semibold text-neutral-50">Gabriel S. Cordeiro</span>
                                <span className="text-xl text-neutral-500">Senior front-end developer</span>
                            </div>
                        </div>

                        <div className="mt-5 flex items-center gap-6">
                            <Link href="https://www.linkedin.com/in/gabriel-schmidt-cordeiro-199262103/" rel="nofollow" target="_blank" className="transition-transform delay-75 duration-150 hover:translate-y-[-5px]">
                                <FaLinkedin size={26} className="text-white"/>
                            </Link>

                            <Link href="https://github.com/gabrielscordeiro" rel="nofollow" target="_blank" className="transition-transform delay-75 duration-150 hover:translate-y-[-5px]">
                                <FaGithub size={26}  className="text-white"/>
                            </Link>

                            <Link href="https://stackoverflow.com/users/4798156/gabriel-schmidt-cordeiro" rel="nofollow" target="_blank" className="transition-transform delay-75 duration-150 hover:translate-y-[-5px]">
                                <FaStackOverflow size={26}  className="text-white"/>
                            </Link>

                            <Link href="https://stackoverflow.com/users/4798156/gabriel-schmidt-cordeiro" rel="nofollow" target="_blank" className="transition-transform delay-75 duration-150 hover:translate-y-[-5px]">
                                <FaInstagram  size={26}  className="text-white"/>
                            </Link>

                            <Link href="mailto:gabrielcordeiro.dev@gmail.com" rel="nofollow" target="_blank" className="transition-transform delay-75 duration-150 hover:translate-y-[-5px]">
                                <BiLogoGmail size={26}  className="text-white"/>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="flex items-center gap-4 text-5xl font-semibold text-neutral-50">
                            Get in touch
                            <FaArrowRight className="text-blue-700"/>
                        </h4>

                        <div className="mt-5 flex flex-col">
                            <h5 className="font-semibold uppercase text-neutral-400">
                                Email me:
                            </h5>

                            <div>
                                <Link
                                    href="mailto:gabrielcordeiro.dev@gmail.com"
                                    target="_blank"
                                    className="mt-2 inline-flex items-center gap-2 border-b-2 border-neutral-500 text-xl font-semibold leading-5 transition-colors hover:border-neutral-300"
                                >
                                    gabrielcordeiro.dev@gmail.com <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 border-t border-t-neutral-500 py-8">
                    <ul className="group flex gap-8 text-xl font-semibold text-neutral-200">
                        {menu.map((item) => (
                            <li key={item.link}>
                                <Link href={item.link} className="text-md text-neutral-300 transition-colors hover:text-neutral-50">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <span className="text-right">
                        Copyright &copy; Made with ❤️ by me
                    </span>
                </div>
            </div>
        </footer>
    )
}