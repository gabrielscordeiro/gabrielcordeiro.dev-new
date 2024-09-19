import { IconType } from 'react-icons'

interface SkillItemProps {
    Icon: IconType,
    color: string,
    title: string;
    subTitle: string;
}

export function SkillItem({
    Icon,
    color,
    title,
    subTitle,
}: SkillItemProps) {

    return (
        <div className="flex items-center gap-4">
            <div className="flex size-16 items-center justify-center rounded-2xl" style={{ backgroundColor: color }}>
                <Icon className="text-neutral-100" size={40} />
            </div>

            <div className="flex flex-col">
                <span className="text-xl text-neutral-100">{title}</span>
                <span className="text-neutral-400">{subTitle}</span>
            </div>
        </div>
    )
}