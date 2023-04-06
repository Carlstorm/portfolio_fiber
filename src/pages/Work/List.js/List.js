import { useEffect, useRef, useState } from 'react'
import style from './List.module.scss'
import { worksList } from '../Works/Works'
import Listitem from './ListItem.js/ListItem'

export default function List({setPopUp}) {
    const [pageReady, setPageReady] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            setPageReady(true)
        }, 1000);
        return () => setPopUp(false)
    },[])


    useEffect(() => {
        if (!pageReady || !ref.current)
            return
        
        const thumbs = Array.from(ref.current.children)
        
        thumbs.forEach((element, i) => {
            setTimeout(() => {
                element.classList.add(style.thumb_show)
            }, 150*i);
        });
    },[pageReady])


    return (
        <div className={style.component}>
            <div className={style.list} ref={ref}>
                {worksList.map((item, i) => (
                    <Listitem key={item.title+i} item={item} setPopUp={setPopUp} />
                ))}
            </div>
        </div>
    )
}