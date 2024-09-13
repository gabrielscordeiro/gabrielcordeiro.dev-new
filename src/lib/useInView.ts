import { useEffect, useRef,useState } from 'react'

interface IntersectionOptions extends IntersectionObserverInit {}

const useInView = (options?: IntersectionOptions): [React.RefObject<HTMLDivElement>, boolean] => {
    const [isIntersecting, setIsIntersecting] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting)
        }, options)

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [options])

    return [ref, isIntersecting]
}

export default useInView