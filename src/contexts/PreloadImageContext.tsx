import { StaticImageData } from 'next/image'
import { FC, ReactNode, createContext, useContext } from 'react'
import Bangkok from '../../public/images/Bangkok.png'
import Bunting from '../../public/images/Bunting.png'
import Call from '../../public/images/Call.png'
import Cameron from '../../public/images/Cameron.png'
import Confess from '../../public/images/Confess.png'
import Connors from '../../public/images/Connors.png'
import FirstDate from '../../public/images/FirstDate.png'
import InstagramScreenshot from '../../public/images/InstagramScreenshot.png'
import Island from '../../public/images/Island.png'
import Japan from '../../public/images/Japan.png'
import Sakura from '../../public/images/Sakura.png'
import RPS from '../../public/images/RPS.png'

const PreloadImageContext = createContext(
    {} as {
        Bangkok: StaticImageData
        Bunting: StaticImageData
        Call: StaticImageData
        Cameron: StaticImageData
        Confess: StaticImageData
        Connors: StaticImageData
        FirstDate: StaticImageData
        InstagramScreenshot: StaticImageData
        Island: StaticImageData
        Japan: StaticImageData
        Sakura: StaticImageData
        RPS: StaticImageData
    }
)

export const PreloadImageProvider: FC<{ children: ReactNode }> = ({
    children,
}) => {
    return (
        <PreloadImageContext.Provider
            value={{
                Bangkok,
                Bunting,
                Call,
                Cameron,
                Confess,
                Connors,
                FirstDate,
                InstagramScreenshot,
                Island,
                Japan,
                Sakura,
                RPS,
            }}
        >
            {children}
        </PreloadImageContext.Provider>
    )
}

export const useImageContext = () => {
    const img = useContext(PreloadImageContext)
    return img
}
