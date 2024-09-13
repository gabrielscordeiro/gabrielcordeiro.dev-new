
import { AboutMe } from '@/components/home/about-me'
import { Portfolio } from '@/components/home/portfolio'
import { Resume } from '@/components/home/resume'
import { Skills } from '@/components/home/skills'

export default function Home() {
    return (
        <>
            <Resume />
            <AboutMe />
            <Skills />
            <Portfolio />
        </>
    )
}
 