import Image from 'next/image'

export default function Home() {
    return (
        <div className="container">
            <div className="resume flex items-center justify-between py-32">
                <div className="about-me max-w-screen-md">
                    <div className="heading-top-line mb-12 h-2 max-w-36 bg-neutral-200"></div>
                    <h2 className="mb-4 text-6xl font-bold">
                        Nice to meet you,<br /> I’m Gabriel
                    </h2>
                    <p className="leading-6 text-neutral-400">
                        I’m a software developer with over 10 years of experience, specializing in creating elegant and functional interfaces using the JavaScript ecosystem, including React, NextJS, and Tailwind.
                    </p>

                    <div className="divider mb-5 mt-12 h-[1px] bg-neutral-700"></div>

                    <div className="flex gap-8">
                        <div className="flex max-w-56 items-center font-bold">
                            <div className="mr-4 flex items-center text-7xl">
                                10<span className="pl-1 text-5xl text-blue-700">+</span>
                            </div>
                            <div className="text-lg text-neutral-100">Years of experience</div>
                        </div>
                        <div className="flex max-w-56 items-center font-bold">
                            <div className="mr-4 flex items-center text-7xl">
                                40<span className="pl-1 text-5xl text-blue-700">+</span>
                            </div>
                            <div className="text-lg text-neutral-100">Successful projects</div>
                        </div>
                    </div>
                </div>
                <div className="avatar overflow-hidden rounded-full">
                    <Image
                        src="/assets/avatar-sem-logo.png"
                        alt="Gabriel Schmidt Cordeiro"
                        width={450}
                        height={450}
                    />
                </div>
            </div>
        </div>
    )
}
 