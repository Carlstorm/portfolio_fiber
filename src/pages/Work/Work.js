
import CrossSvg from '../../assets/svgs/CrossSvg'
import PortfolioSvg from '../../assets/svgs/PortfolioSvg'
import { MenuButton } from '../Main/Menu/MenuButton'
import style from './Work.module.scss'

import { useEffect, useRef, useState } from 'react'
import WorkList from './WorkList'
import List from './List.js/List'


export default function Work({back, page}) {
    const [LoadContent, setLoadContent] = useState(false)
    const [popUp, setPopUp] = useState(false)

    useEffect(() => {
        if (page === "work")
            setLoadContent(true)
        else
            setTimeout(() => {
                setLoadContent(false)
            }, 1000);
    },[page])

    return (
        <div className={style.component}>
            {!popUp ? null :
                <>
                    {popUp}
                </>
            }
            <PortfolioSvg className={style.svg} />
            <MenuButton 
                orintation="right" 
                icon={<CrossSvg />}
                onClick={() => back()}
                text="Go back"
                size={"22px"}
            />
            {!LoadContent ? null : <List setPopUp={setPopUp}/>}
        </div>
    )
}