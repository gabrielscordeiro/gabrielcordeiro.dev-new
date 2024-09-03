import { IconType } from 'react-icons'

interface SkillItemProps {
    Icon: IconType
    title: string
    description: string
}

export function SkillItem({
    Icon,
    title,
    description
}: SkillItemProps) {
    return (
        <div className="rounded-3xl bg-zinc-800 px-14 pb-24 pt-32">
            <div className="mb-5 flex size-20 items-center justify-center rounded-full bg-blue-700">
                <Icon className="text-neutral-100" size={50}/>
            </div>

            <h4 className="mb-3 text-4xl font-bold">{title}</h4>
            <p className="mb-10 min-h-24 text-2xl leading-8 text-neutral-400">{description}</p>

            <div className="paragraph-underline h-[6px] w-14 bg-neutral-100 "></div>
        </div>
    )
}