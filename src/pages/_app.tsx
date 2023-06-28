import { PreloadImageProvider } from '@/contexts/PreloadImageContext'
import { AnimatePresence } from 'framer-motion'
import { AppProps } from 'next/app'
import { Alegreya } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import { useEffect } from 'react'

const alegreya = Alegreya({ subsets: ['latin'] })
const MyApp = ({ Component, pageProps }: AppProps) => {
    const router = useRouter()

    useEffect(() => {
        const vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`)
        screen.orientation.lock("portrait").catch(x=> console.log(x))
    }, [])

    return (
        <>
            <Head>
                <title>Yap & Eling</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <PreloadImageProvider>
                <AnimatePresence mode="wait" initial={false}>
                    <div className={alegreya.className}>
                        <div className="h-mobile-screen w-screen">
                            <div
                                data-currentroute={router.asPath}
                                className="background-container h-full w-full"
                            >
                                <Component {...pageProps} />
                            </div>
                        </div>
                    </div>
                </AnimatePresence>
            </PreloadImageProvider>
        </>
    )
}

export default MyApp
