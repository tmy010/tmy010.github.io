import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useState } from 'react'

const AnimatedElementLayout = ({ prevPath, nextPath, children }: { prevPath?:string, nextPath?:string, children: JSX.Element }) => {
    const router = useRouter()
    const [isHidden, setIsHidden] = useState<boolean>(false)

    const handleDrag = (offsetX: number) => {
        if (offsetX < -45 && nextPath) {
            setTimeout(() => {
                setIsHidden(true)
            }, 500)
            setTimeout(() => {
                router.replace(`${nextPath}?from=left`)
            }, 1000)
        } else if (offsetX > 45 && prevPath) {
            setTimeout(() => {
                setIsHidden(true)
            }, 500)
            setTimeout(() => {
                router.replace(`${prevPath}?from=right`)
            }, 1000)
        }
    }

    return (
        <motion.div
            key={router.route}
            drag="x"
            dragSnapToOrigin
            onDragEnd={(_, i) => {
                handleDrag(i.offset.x)
            }}
            dragConstraints={{left: 50, right: 50}}
        >
            <div data-ishidden={isHidden}>
                {children}
            </div>
        </motion.div>
    )
}

export default AnimatedElementLayout
