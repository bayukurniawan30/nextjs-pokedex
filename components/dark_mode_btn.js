import {useTheme} from 'next-themes'

export default function DarkModeBtn() {
    const {theme, setTheme} = useTheme()

    return (
        <div className="fixed z-20 bottom-2 right-2 cursor-pointer">
            <a onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                <div className="flex items-center justify-center h-12 w-12 transition duration-500 ease-in-out rounded-md group-hover:bg-white group-hover:text-indigo-500 bg-indigo-500 text-white border border-transparent group-hover:border-indigo-500">
                    {theme === 'dark' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    )}
                </div>
            </a>
        </div>
    )
}