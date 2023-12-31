import AnimatedElementLayout from '@/components/layout/AnimatedElementLayout'
import { EventDates, EventName } from '@/const/event'
import { useImageContext } from '@/contexts/PreloadImageContext'
import { findDifferentInDay } from '@/utils/FindDifferenceInDay'
import { getMiddleString, getTopString } from '@/utils/GetDayString'
import Image from 'next/image'
import { useCallback, useEffect, useMemo, useState } from 'react'

const OurJapanTrip = () => {
    const preloadedImage = useImageContext()

    const [topString, setTopString] = useState<string>('Unknown')
    const [middleString, setMiddleString] = useState<string>('')
    const bottomString = EventName.OurJapanTrip

    const init = useCallback(() => {
        const diffInDay = findDifferentInDay(
            EventDates.OurJapanTrip,
            EventDates.Now
        )
        // setTopString(getTopString(diffInDay))
        setMiddleString(getMiddleString(diffInDay))
    }, [])

    useEffect(() => {
        init()
    }, [init])

    const renderDayString = useMemo(() => {
        return (
            <>
                <div className="absolute right-0" data-ishidden="false">
                    <Image
                        priority={true}
                        src={preloadedImage.Sakura}
                        alt="Sakura"
                        className="select-none object-contain"
                        draggable={false}
                    />
                </div>
                <div className="flex h-full w-full items-center justify-center pt-24">
                    <AnimatedElementLayout prevPath="OurFirstCoding">
                        <>
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
                                <div className="absolute bottom-full right-1/2 w-52 translate-x-1/2">
                                    <Image
                                        priority={true}
                                        src={preloadedImage.Japan}
                                        alt="Japan"
                                        className="select-none object-contain"
                                        draggable={false}
                                    />
                                </div>
                            </div>
                        </>
                    </AnimatedElementLayout>
                </div>
            </>
        )
    }, [
        bottomString,
        middleString,
        preloadedImage.Japan,
        preloadedImage.Sakura,
        topString,
    ])

    return <>{renderDayString}</>
}

export default OurJapanTrip
