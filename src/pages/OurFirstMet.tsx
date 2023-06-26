import AnimatedElementLayout from '@/components/layout/AnimatedElementLayout'
import { EventDates, EventName } from '@/const/event'
import { findDifferentInDay } from '@/utils/FindDifferenceInDay'
import { getMiddleString, getTopString } from '@/utils/GetDayString'
import Image from 'next/image'
import { useCallback, useEffect, useMemo, useState } from 'react'
import Connors from '../../public/images/Connors.png'
import Bunting from '../../public/images/Bunting.png'

const OurFirstMet = () => {
    const [topString, setTopString] = useState<string>('')
    const [middleString, setMiddleString] = useState<string>('')
    const bottomString = EventName.OurFirstMet

    const init = useCallback(() => {
        const diffInDay = findDifferentInDay(EventDates.OurFirstMet, EventDates.Now)
        setTopString(getTopString(diffInDay))
        setMiddleString(getMiddleString(diffInDay))
    }, [])

    useEffect(() => {
        init()
    }, [init])

    const renderDayString = useMemo(() => {
        return (
            <>
                <div className='absolute' data-ishidden="false">
                    <Image
                        priority={true}
                        src={Bunting}
                        alt="Bunting"
                        className="object-contain select-none"
                        draggable={false}
                    />
                </div>
                <div
                    className="flex h-full w-full items-center justify-center"
                >
                    <AnimatedElementLayout nextPath='OurFirstCall' prevPath='OurStart'>
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
                                <div className="absolute translate-x-1/2 bottom-full right-1/2 w-52">
                                    <Image
                                        priority={true}
                                        src={Connors}
                                        alt="Connors"
                                        className="object-contain select-none"
                                        draggable={false}
                                    />
                                </div>
                            </div>
                        </>
                    </AnimatedElementLayout>
                </div>
            </>
        )
    }, [bottomString, middleString, topString])

    return <>{renderDayString}</>
}

export default OurFirstMet
