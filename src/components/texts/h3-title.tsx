import { cn } from '@/lib/utils'

export function H3Title({ className, children }: {
    className?: string
    children: React.ReactNode
}) {
    return (
        <h3 className={cn(
            'mb-4 text-4xl font-semibold leading-10 text-neutral-200',
            className
        )}>
            {children}
        </h3>
    )
}