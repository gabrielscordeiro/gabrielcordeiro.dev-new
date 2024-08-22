
import Image from 'next/image'

export function Header() {
    return (
        <header>
            <div className="container mx-auto py-9">
                <h1>
                    <Image
                        src="assets/logo.svg"
                        alt="Gabriel Cordeiro Dev Logo"
                        width={200}
                        height={25}
                    />
                </h1>
            </div>
        </header>
    )
}