'use client'
import Image from 'next/image'
import CountUp from 'react-countup'

import { Paragraph } from '@/components/texts/paragraph'

export function Resume() {
    return (
        <div className="container">
            <div className="resume flex flex-col-reverse items-center justify-between p-10 py-20 lg:flex-row lg:gap-10 lg:py-32">
                <div className="about-me max-w-screen-md">
                    <div className="heading-top-line mb-12 hidden h-2 max-w-36 bg-neutral-200 lg:flex"></div>
                    <h2 className="mb-4 mt-10 text-center text-4xl font-bold lg:mt-0 lg:max-w-[470px] lg:text-left lg:text-6xl">
                        Nice to meet you, I’m Gabriel
                    </h2>
                    <Paragraph>
                        I’m a software developer with over 10 years of experience, specializing in creating elegant and
                        functional interfaces using the JavaScript ecosystem, including React, NextJS, and Tailwind.
                    </Paragraph>

                    <div className="divider mb-5 mt-12 h-[1px] bg-neutral-700"></div>

                    <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-around lg:justify-normal">
                        <div className="flex max-w-56 items-center font-bold">
                            <div className="mr-4 flex items-center text-7xl">
                                <CountUp end={10} duration={3} /><span className="pl-1 text-5xl text-blue-700">+</span>
                            </div>
                            <div className="text-lg leading-none text-neutral-100">Years of experience</div>
                        </div>
                        <div className="flex max-w-56 items-center font-bold">
                            <div className="mr-4 flex items-center text-7xl">
                                <CountUp end={40} duration={8} /><span className="pl-1 text-5xl text-blue-700">+</span>
                            </div>
                            <div className="text-lg leading-none text-neutral-100">Successful projects</div>
                        </div>
                    </div>
                </div>

                <div className="avatar flex items-center justify-center overflow-hidden rounded-full">
                    <Image
                        src="/assets/avatar-sem-logo.png"
                        alt="Gabriel Schmidt Cordeiro"
                        width={450}
                        height={450}
                        className="w-3/5 rounded-full brightness-125 lg:w-auto lg:rounded-none"
                    />
                </div>
            </div>

        </div>
    )
}