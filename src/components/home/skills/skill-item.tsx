'use client'

import { useEffect, useState } from 'react'

import useInView from '@/lib/useInView'

interface SkillItemProps {
    title: string;
    percent: number;
}

export function SkillItem({
    title,
    percent
}: SkillItemProps) {
    const [width, setWidth] = useState(0)

    const [ref, isIntersecting] = useInView({
        threshold: 0.3, // Executa a animação quando 30% da barra estiver visível
    })

    useEffect(() => {
        if (isIntersecting) {
            setTimeout(() => {
                setWidth(percent) // animação só acontece quando visível
            }, 500)
        }
    }, [isIntersecting, percent])

    return (
        <div ref={ref} className="flex flex-col">
            <span className="mb-1 text-xl font-semibold text-neutral-100">{title}</span>
            <div className="h-3 w-full bg-neutral-800">
                <div className={`h-full bg-blue-700 transition-all duration-1000 ease-in-out`} style={{ width: `${width}%`}}></div>
            </div>
        </div>
    )
}