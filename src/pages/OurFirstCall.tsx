import AnimatedElementLayout from '@/components/layout/AnimatedElementLayout'
import { EventDates, EventName } from '@/const/event'
import { findDifferentInDay } from '@/utils/FindDifferenceInDay'
import { getMiddleString, getTopString } from '@/utils/GetDayString'
import Image from 'next/image'
import { useCallback, useEffect, useMemo, useState } from 'react'
import Call from '../../public/images/Call.png'


const OurFirstCall = () => {
    const [topString, setTopString] = useState<string>('')
    const [middleString, setMiddleString] = useState<string>('')
    const bottomString = EventName.OurFirstCall

    const init = useCallback(() => {
        const diffInDay = findDifferentInDay(EventDates.OurFirstCall, EventDates.Now)
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
                    className="flex h-full w-full items-center justify-center"
                >
                    <AnimatedElementLayout nextPath='OurPenangTrip' prevPath='OurFirstMet'>
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
                            <div className="absolute translate-x-1/2 bottom-full right-1/2 w-52">
                                <Image
                                    priority={true}
                                    src={Call}
                                    alt="Call"
                                    className="object-contain select-none"
                                    draggable={false}
                                />
                            </div>
                        </div>
                    </AnimatedElementLayout>
                </div>
            </>
        )
    }, [bottomString, middleString, topString])

    return <>{renderDayString}</>
}

export default OurFirstCall