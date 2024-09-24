import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

import { PortfolioItem } from '@/components/home/portifolio/portfolio-item'
import { H2Title } from '@/components/texts/h2-title'
import { H3Title } from '@/components/texts/h3-title'

export function Portfolio() {
    return (
        <div className="my-portfolio bg-zinc-900 py-40">
            <div className="container">
                <div className="grid grid-cols-2 gap-12">
                    <div>
                        <H2Title>My portfolio</H2Title>
                        <H3Title>Take a look at the latest projects I’ve done</H3Title>

                        <Link
                            href="/portfolio"
                            target="_blank"
                            className="mt-4 inline-flex items-center gap-2 border-b-2 border-neutral-500 text-xl font-semibold leading-10 transition-colors hover:border-neutral-300"
                        >
                            Browse all projects <FaArrowRight />
                        </Link>

                        <div className="mt-24">
                            <PortfolioItem title="Full Stack Airbnb Clone" image="" logo="" tags={['React', 'MongoDB', 'Prisma', 'NextJS', 'Next Auth']} />
                        </div>
                    </div>

                    <div>
                        <PortfolioItem title="Pizza Shop Delivery Dashboard" image="" logo="" tags={['React', 'NextJS', 'Next Auth', 'Tailwind CSS']} />
                        <PortfolioItem title="Dev Store e-commerce website" image="" logo="" tags={['Prisma', 'NextJS', 'Next Auth']} />
                    </div>
                </div>
            </div>
        </div>
    )
}