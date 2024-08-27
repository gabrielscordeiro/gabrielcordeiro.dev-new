import { cn } from '@/lib/utils'

export function Paragraph({
    className,
    children
}: {
    className?: string
    children: React.ReactNode
}) {
    return (
        <p className={cn(
            'leading-6 text-neutral-400',
            className
        )}>
            {children}
        </p>
    )
}