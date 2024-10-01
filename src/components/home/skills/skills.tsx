import { DiPostgresql  } from 'react-icons/di'
import { FaJenkins, FaNodeJs, FaPhp, FaReact } from 'react-icons/fa'
import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { SiCypress } from 'react-icons/si'
import { TbBrandStorybook,TbBrandTypescript } from 'react-icons/tb'

import { SkillItem } from '@/components/home/skills/skill-item'
import { H2Title } from '@/components/texts/h2-title'
import { H3Title } from '@/components/texts/h3-title'

export function Skills() {
    return (
        <div className="my-skills container p-10 lg:px-0 lg:py-40">
            <H2Title>My Skills</H2Title>
            <H3Title>List of my best skills</H3Title>

            <div className="skills-items mt-12 grid grid-rows-2 gap-5 md:grid-cols-2 md:gap-12">
                <div className="flex flex-col gap-6">
                    <SkillItem Icon={FaReact} title="React" subTitle="Advanced knowledge" color="#00d8ff" />
                    <SkillItem Icon={RiNextjsLine} title="NextJS" subTitle="Intermediate knowledge" color="#313131" />
                    <SkillItem Icon={FaPhp} title="PHP" subTitle="Intermediate knowledge" color="#4f5b93" />
                    <SkillItem Icon={RiTailwindCssFill} title="Tailwind CSS" subTitle="Advanced knowledge" color="#38bdf8" />
                    <SkillItem Icon={TbBrandTypescript} title="Typescript" subTitle="Advanced knowledge" color="#007acc" />
                </div>

                <div className="flex flex-col gap-6">
                    <SkillItem Icon={FaNodeJs} title="NodeJS" subTitle="Intermediate knowledge" color="#539e43" />
                    <SkillItem Icon={TbBrandStorybook} title="Storybook" subTitle="Advanced knowledge" color="#ff4586" />
                    <SkillItem Icon={FaJenkins} title="Jenkins" subTitle="Basic knowledge" color="#d33833" />
                    <SkillItem Icon={DiPostgresql} title="PostgreSQL" subTitle="Intermediate knowledge" color="#336791" />
                    <SkillItem Icon={SiCypress} title="Cypress" subTitle="Intermediate knowledge" color="#007780" />
                </div>
            </div>
        </div>
    )
}