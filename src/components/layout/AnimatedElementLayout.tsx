import { motion } from 'framer-motion'
import { duration } from 'moment'
import { useRouter } from 'next/router'
import { useState } from 'react'

const AnimatedElementLayout = ({ prevPath, nextPath, children }: { prevPath?:string, nextPath?:string, children: JSX.Element }) => {
    const router = useRouter()
    const [isHidden, setIsHidden] = useState<boolean>(false)

    const handleDrag = (offsetX: number) => {
        if (offsetX < -45 && nextPath) {
            setIsHidden(true)
            setTimeout(() => {
                router.push(`${nextPath}?from=left`)
            }, 500)
        } else if (offsetX > 45 && prevPath) {
            setIsHidden(true)
            setTimeout(() => {
                router.push(`${prevPath}?from=right`)
            }, 500)
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
        >
            <div data-ishidden={isHidden}>
                {children}
            </div>
        </motion.div>
    )
}

export default AnimatedElementLayout
