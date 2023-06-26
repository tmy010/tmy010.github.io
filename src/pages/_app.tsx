import { PreloadImageProvider } from '@/contexts/PreloadImageContext'
import { AnimatePresence } from 'framer-motion'
import { AppProps } from 'next/app'
import { Alegreya } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'
import '../styles/globals.css'

const alegreya = Alegreya({ subsets: ['latin'] })
const MyApp = ({ Component, pageProps }: AppProps) => {
    const router = useRouter()

    return (
        <>
            <Head>
                <title>Yap & Eling</title>
            </Head>
            <PreloadImageProvider>
                <AnimatePresence mode="wait" initial={false}>
                    <div className={alegreya.className}>
                        <div
                            data-currentroute={router.asPath}
                            className="background-container h-screen w-screen"
                        >
                            <Component {...pageProps} />
                        </div>
                    </div>
                </AnimatePresence>
            </PreloadImageProvider>
        </>
    )
}

export default MyApp
