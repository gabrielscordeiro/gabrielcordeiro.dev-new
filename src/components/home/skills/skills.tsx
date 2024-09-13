import { SkillItem } from '@/components/home/skills/skill-item'
import { H2Title } from '@/components/texts/h2-title'
import { H3Title } from '@/components/texts/h3-title'

export function Skills() {
    return (
        <div className="my-skills container py-40">
            <H2Title>My Skills</H2Title>
            <H3Title>My extensive list of skills</H3Title>

            <div className="skills-items mt-12 grid grid-cols-2 gap-12">
                <div className="flex flex-col gap-4">
                    <SkillItem title="React" percent={100}  />
                    <SkillItem title="Typescript" percent={90}  />
                    <SkillItem title="Javascript" percent={100}  />
                    <SkillItem title="Next" percent={70}  />
                    <SkillItem title="Tailwind" percent={80}  />
                </div>

                <div className="flex flex-col gap-4">
                    <SkillItem title="PHP" percent={60}/>
                    <SkillItem title="NodeJS" percent={50}/>
                    <SkillItem title="Storybook" percent={90}/>
                    <SkillItem title="CI/CD" percent={30}/>
                    <SkillItem title="PostgresSQL" percent={60}/>
                </div>
            </div>
        </div>
    )
}