import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const AnimatedElementLayout = ({ children }: { children: JSX.Element }) => {
    const router = useRouter()

    const handleDrag = (offsetX: number) => {
        if (offsetX < -45) {
            setTimeout(() => {
                router.replace('/OurFirstMet')
            }, 500)
        } else if (offsetX > 45) {
            console.log('prev page')
        }
    }

    return (
        <motion.div
            key={router.route}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
                initial: { x: '50vw' },
                animate: {
                    x: 0,
                    transition: {
                        duration: 0.5,
                        type: 'spring',
                        damping: 8,
                        stiffness: 100,
                    },
                },
                exit: { opacity: 0 },
            }}
            drag="x"
            dragSnapToOrigin
            onDragEnd={(_, i) => {
                handleDrag(i.offset.x)
            }}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedElementLayout
