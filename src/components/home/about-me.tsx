'use client'

import Link from 'next/link'
import CountUp from 'react-countup'
import { FaArrowRight } from 'react-icons/fa'

import { H2Title } from '@/components/texts/h2-title'
import { H3Title } from '@/components/texts/h3-title'
import { Paragraph } from '@/components/texts/paragraph'

export function AboutMe() {
    return (
        <div className="bg-zinc-900 py-40">
            <div className="about-me container grid grid-cols-2 gap-32">
                <div>

                    <H2Title>About Me</H2Title>
                    <H3Title>I’ve been developing websites since 2012</H3Title>

                    <Paragraph>
                        With over 10 years of experience leading teams, developing people and I am focused on maintaining the highest performance in systems and SEO.
                    </Paragraph>

                    <Link href="/about" className="group mt-12 inline-block text-lg font-semibold leading-6 text-neutral-200 transition-all duration-200">
                        <span className="flex items-center justify-center gap-1">
                            More about me
                            <FaArrowRight className="text-neutral-200"/>
                        </span>

                        <div className="mt-1 min-h-[3px] w-full bg-neutral-600 transition-all duration-200 group-hover:bg-neutral-300"></div>
                    </Link>
                </div>

                <div className="flex items-center">
                    <div>
                        <div className="mb-4 flex gap-8">
                            <div className="flex max-w-52 items-center font-bold">
                                <div className="mr-4 flex items-center text-7xl tracking-[-0.15em]">
                                    <CountUp end={10} duration={3} />
                                </div>
                                <div className="text-base font-normal leading-none text-neutral-100">Years of experience</div>
                            </div>
                            <div className="flex max-w-56 items-center font-bold">
                                <div className="mr-4 flex items-center text-7xl">
                                    <CountUp end={40} duration={8} />
                                </div>
                                <div className="text-base font-normal leading-none text-neutral-100">Successful projects</div>
                            </div>
                        </div>

                        <Paragraph>
                            I have worked on various types of projects, from admin panels, dashboards, landing pages, e-commerce website, design systems and management tools.
                        </Paragraph>
                    </div>
                </div>
            </div>
        </div>
    )
}