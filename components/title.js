import Link from 'next/link'

export default function Title() {
    return (
        <Link href="/">
            <a>
                <p class="text-center text-3xl font-bold text-gray-800 dark:text-white mb-10">
                    Pokédex
                </p>
            </a>
        </Link>
    )
}