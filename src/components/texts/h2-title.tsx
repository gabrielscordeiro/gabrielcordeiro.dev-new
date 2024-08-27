import { cn } from '@/lib/utils'

export function H2Title({ children, className }: {
    className?: string,
    children: React.ReactNode
}) {
    return (
        <h2 className={cn(
            'mb-6 text-base font-semibold uppercase tracking-wider text-neutral-200',
            className
        )}>
            <span className="pr-1 text-blue-700">/</span>
            {children}
        </h2>
    )
}