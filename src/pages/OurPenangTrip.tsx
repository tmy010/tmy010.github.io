import AnimatedElementLayout from '@/components/layout/AnimatedElementLayout'
import { EventDates, EventName } from '@/const/event'
import { useImageContext } from '@/contexts/PreloadImageContext'
import { findDifferentInDay } from '@/utils/FindDifferenceInDay'
import { getMiddleString, getTopString } from '@/utils/GetDayString'
import Image from 'next/image'
import { useCallback, useEffect, useMemo, useState } from 'react'

const OurPenangTrip = () => {
    const preloadedImage = useImageContext()

    const [topString, setTopString] = useState<string>('')
    const [middleString, setMiddleString] = useState<string>('')
    const bottomString = EventName.OurPenangTrip

    const init = useCallback(() => {
        const diffInDay = findDifferentInDay(
            EventDates.OurPenangTrip,
            EventDates.Now
        )
        setTopString(getTopString(diffInDay))
        setMiddleString(getMiddleString(diffInDay))
    }, [])

    useEffect(() => {
        init()
    }, [init])

    const renderDayString = useMemo(() => {
        return (
            <>
                <div className="flex h-full w-full items-center justify-center pt-24">
                    <AnimatedElementLayout
                        nextPath="OurFirstDate"
                        prevPath="OurFirstCall"
                    >
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
                                <div className="absolute bottom-full right-[40%] w-52 translate-x-1/2">
                                    <Image
                                        priority={true}
                                        src={preloadedImage.Island}
                                        alt="Island"
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
    }, [bottomString, middleString, preloadedImage.Island, topString])

    return <>{renderDayString}</>
}

export default OurPenangTrip
