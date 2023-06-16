import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const OurFirstMet = () => {
    const router = useRouter()

    return (
        <div
            className="flex h-full w-full items-center justify-center"
            onClick={() => router.push('/')}
        >
            <motion.div
                key={router.route}
                initial="initialState"
                animate="animateState"
                exit="exitState"
                transition={{
                    duration: 1,
                }}
                variants={{
                    initialState: {
                        opacity: 0,
                    },
                    animateState: {
                        opacity: 1,
                    },
                }}
                whileTap={{ scale: 0.7 }}
                className="w-full text-center"
            >
                1000000000000000
            </motion.div>
        </div>
    )
}

export default OurFirstMet
