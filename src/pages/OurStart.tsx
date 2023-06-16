import AnimatedElementLayout from '@/components/layout/AnimatedElementLayout'
import { EventDates } from '@/const/event'
import { findDifferentInDay } from '@/utils/findDifferenceInDay'
import { getMiddleString, getTopString } from '@/utils/getDayString'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import InstagramScreenshot from '../../public/images/InstagramScreenshot.png'

// #65503E
// #EFEAE6

const OurStart = () => {
    const router = useRouter()

    const [topString, setTopString] = useState<string>('')
    const [middleString, setMiddleString] = useState<string>('')
    const bottomString = useRef<string>('Our Start').current

    const init = useCallback(() => {
        let diffInDay = findDifferentInDay(EventDates.Today, EventDates.Now)
        setTopString(getTopString(diffInDay))
        setMiddleString(getMiddleString(diffInDay))
    }, [])

    useEffect(() => {
        init()
    }, [init])

    const renderDayString = useMemo(() => {
        return (
            <>
                <div
                    className="flex h-full w-full items-center justify-center text-[#65503e]"
                    style={{ color: '' }}
                >
                    <AnimatedElementLayout>
                        <div className="relative">
                            <div className="text-center text-5xl font-bold leading-normal">
                                {topString}
                            </div>
                            <div className="text-center leading-snug">
                                {middleString}
                            </div>
                            <div className="text-center text-2xl font-bold leading-snug ">
                                {bottomString}
                            </div>
                            {/* <div className="absolute translate-x-1/2 bottom-full right-1/2 w-52">
                                <Image
                                    src={InstagramScreenshot}
                                    alt="InstagramScreenshot"
                                    className="object-contain select-none"
                                    draggable={false}
                                />
                            </div> */}
                        </div>
                    </AnimatedElementLayout>
                </div>
            </>
        )
    }, [bottomString, middleString, topString])

    return <>{renderDayString}</>
}

export default OurStart
