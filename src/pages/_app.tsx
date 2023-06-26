import { AppProps } from 'next/app'
import { Alegreya } from 'next/font/google'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'

const alegreya = Alegreya({ subsets: ['latin'] })
const MyApp = ({ Component, pageProps }: AppProps) => {
    const router = useRouter()

    return (
        <>
            <AnimatePresence mode="wait" initial={false}>
                <div className={alegreya.className}>
                    <div
                        data-currentroute={router.asPath}
                        className="h-screen w-screen background-container"
                    >
                        <Component {...pageProps} />
                    </div>
                </div>
            </AnimatePresence>
        </>
    )
}

export default MyApp
