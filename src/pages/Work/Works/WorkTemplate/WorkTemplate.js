import { useEffect, useRef, useState } from "react"
import { getTechIcon } from "../Works"

import style from './WorkTemplate.module.scss'
import CrossSvg from "../../../../assets/svgs/CrossSvg"

export default function WorkTemplate({content, item, setPopUp}) {
    const [assetDisplay, setAssetDisplay] = useState(null)
    const contentRef = useRef(null)
    const heroRef = useRef(null)

    useEffect(() => {
        if (!contentRef.current || ! heroRef.current)
            return
        
        setTimeout(() => {
            if (contentRef.current && contentRef.current)
                contentRef.current.parentElement.parentElement.classList.add(style.component_show)
                heroRef.current.classList.add(style.container_hero_open)
                contentRef.current.classList.add(style.container_content_open)
        },10)

        window.addEventListener("keydown", event.close)
        window.addEventListener("mousedown", event.close)
        return () => {
            window.removeEventListener("keydown", event.close)
            window.removeEventListener("mousedown", event.close)
        }
    },[contentRef, heroRef])

    const scroll = (e) => {
        let val = heroRef.current.parentElement.scrollTop/3
        heroRef.current.classList.remove(style.container_hero_open)
        heroRef.current.style.transform = `translateY(${val}px)`
    }

    const event = {
        close: (e) => {
            if (e.code === "Escape" || e.button === 3)
                setPopUp(false)
        }
    }

    const Content = () => (content((content) => setAssetDisplay(content)))

    return (
        <div className={style.component}>
            <div className={style.container} onScroll={(e) => scroll(e)}>
                {assetDisplay ? assetDisplay : null}
                <div className={style.container_header} >
                    <div>
                        {item.tech.map((icon, i) => (
                            <div title={icon} key={icon+i}>
                                {getTechIcon(icon)}
                            </div>
                        ))}
                    </div>
                    <div>
                        <div title={"close"} onClick={() => setPopUp(false)} className={style.container_header_close}>
                            <CrossSvg/>
                        </div>
                    </div>
                </div>
                <div className={style.container_hero} style={{backgroundImage: `url(${item.img})`}} ref={heroRef}></div>
                <div className={style.container_content} ref={contentRef}>
                    <span className={style.container_content_title}>{item.title}</span>
                    <div className={style.container_content_wrap}>
                        <section className={style.container_content_main}>
                            <div>
                                <p className={item.type.includes("PERSONAL") ? style.type_personal : style.type_proffesional}>{item.type}</p>
                                <p>{item.date}</p>
                            </div>
                            <div className={style.container_content_main_links}>
                                <p>Demo: {!item.demo ? <span>No</span> : <a target="_blank" href={item.demo}>Yes</a>}</p>
                                <p>Github: {!item.github ? <span>Private</span> : <a target="_blank" href={item.github}>Puplic</a>}</p>
                            </div>
                        </section>
                        <div className={style.content}>
                            <Content />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const WorkSection = ({children, title}) => {
    
    return (
        <div className={style.WorkSection}>
            {!title ? null : <h2>{title}</h2>}
            {children}
        </div>
    )

}

export const CodeBox = ({code}) => {
    const codeBoxSize = 400;
    const [boxState, setBoxState] = useState(null)
    const codeBoxRef = useRef(null)
    useEffect(() => {
        if (!codeBoxRef.current)
            return

        const boxHeight = codeBoxRef.current.getBoundingClientRect().height
        if (boxHeight > codeBoxSize) {
            codeBoxRef.current.classList.remove(style.codeBox_open)
            codeBoxRef.current.classList.add(style.codeBox_closed)
            setBoxState("closed")
        }

    },[codeBoxRef])

    const event = {
        open: () => {
            codeBoxRef.current.classList.remove(style.codeBox_closed)
            codeBoxRef.current.classList.add(style.codeBox_open)
            setBoxState("open")
        },
        close: () => {
            codeBoxRef.current.classList.remove(style.codeBox_open)
            codeBoxRef.current.classList.add(style.codeBox_closed)
            setBoxState("closed")
        }
    }


    return (
        <div className={style.codeBox} ref={codeBoxRef}>
            <p>{code}</p>
            {boxState === "closed" ? 
                <p className={style.codeBox_expand} onClick={() => event.open()}>Show more</p>
            : boxState === "open" ?
                <p className={style.codeBox_expand} onClick={() => event.close()}>Show less</p>
            : null}
        </div>
    )
}

export const AssetPopup = ({contentType, content, setPopUp, title}) => {

    const overlayRef = useRef(null)

    useEffect(() => {
        setTimeout(() => {
        if (overlayRef.current)
            overlayRef.current.classList.add(style.AssetPopup_show)
        },10)
    },[overlayRef])

    const close = (e, check) => {
        if (check) {
            if (overlayRef.current === e.target)
                setPopUp(false)
            return
        }
        setPopUp(false)
    }
    return (
        <div className={style.AssetPopup} onClick={(e) => close(e, "check")} ref={overlayRef}>
            <div className={style.AssetPopup_container}>
                <div className={style.AssetPopup_container_menu}>
                    <span>{title}</span>
                    <div title={"close"} onClick={() => close()} className={style.AssetPopup_container_close}>
                        <CrossSvg/>
                    </div>
                </div>
                <div className={style.AssetPopup_container_content}>
                    {contentType === "img" ?
                        <img src={content}></img>
                    :
                        <p>{content}</p>
                    }
                </div>
            </div>
        </div>
    )
}

export const AssetContainer = ({children}) => {
    return (
        <div className={style.AssetContainer}>
            {children}
        </div>
    )
}

export const AssetBox = ({setPopUp, contentType, content, title}) => {
    return (
        <div className={style.AssetBox} onClick={() => setPopUp(<AssetPopup setPopUp={setPopUp} contentType={contentType} content={content} title={title}/>)}>
            <span className={style.AssetBox_title}>{title}</span>
            <div className={style.AssetBox_overlay}></div>
            {contentType === "img" ?
                <div className={style.AssetBox_img} style={{backgroundImage: `url("${content}")`}} ></div>
            :
                <div className={style.AssetBox_text}><span>{content}</span></div>
            }
        </div>
    )
}

