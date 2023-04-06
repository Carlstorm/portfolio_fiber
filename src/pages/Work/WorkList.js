import { useEffect, useRef, useState } from 'react'
import style from './Work.module.scss'

import CheckmarkSvg from '../../assets/svgs/Checkmark'
import JsSvg from '../../assets/svgs/tech/JsSvg'
import TsSvg from '../../assets/svgs/tech/TsSvg'
import ReactSvg from '../../assets/svgs/tech/ReactSvg'
import SassSvg from '../../assets/svgs/tech/SassSvg'
import ThreeSvg from '../../assets/svgs/tech/ThreeSvg'
import CrossSvg from '../../assets/svgs/CrossSvg'

const SounDisTest = ({item, setPopUp}) => {
    const ref = useRef(null)

    useEffect(() => {
        if (!ref.current)
            return
        
        setTimeout(() => {
            if (ref.current)
                ref.current.classList.add(style.popup_show)
                if (ref.current.children[0])
                    ref.current.children[0].children[1].classList.add(style.popup_bg_size)
                // ref.current.classList.add(style.popup_bg_size)
        },10)
    },[ref])

    const scroll = (e) => {
        let val = ref.current.children[0].scrollTop/1.66
        ref.current.children[0].children[1].style.transform = `translateY(-${val}px)`
    }

    const getIcon = (title) => {
        switch(title) {
            case "JavaScript": return <JsSvg />;
            case "TypeScript": return <TsSvg />;
            case "React.js": return <ReactSvg />;
            case "Sass": return <SassSvg />;
            case "Three.js": return <ThreeSvg />;
        }
    }

    return (
        <div className={style.popup} onClick={() => setPopUp(false)} ref={ref}>
            <div className={style.popup_content} onScroll={(e) => scroll(e)}>
                <div className={style.jaja} >
                    <div>
                        {item.tech.map(icon => (
                            <div title={icon}>
                                {getIcon(icon)}
                            </div>
                        ))}
                    </div>
                    <CrossSvg className={style.close}/>
                </div>
                <div className={style.popup_bg} style={{backgroundImage: `url(${require('../../img/'+item.img)})`}}>
                    <div className={style.popup_bg_yes}></div>
                </div>
                <div className={style.popup_olay}>
                    <span className={style.popup_title}>{item.title}</span>
                    <section className={style.popup_cc}>
                        <div>
                            <div>
                                <p>{item.type}</p>
                                <p>{item.date}</p>
                            </div>
                            <div>
                                <p>Demo: here</p>
                                <p>Github: here</p>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        </div>
    )
}


export default function WorkList({setPopUp}) {
    const [pageReady, setPageReady] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            setPageReady(true)
        }, 1000);
        return () => {
            setPopUp(false)
        }
    },[])


    useEffect(() => {
        if (!pageReady || !ref.current)
            return
        
        const items = Array.from(ref.current.children)
        
        items.forEach((element, i) => {
            setTimeout(() => {
                element.classList.add(style.list_item_show)
            }, 150*i);
        });
    },[pageReady])


    const items = [
        {
            title: "Portolio",
            content: (item) => <SounDisTest item={item} setPopUp={setPopUp}/>,
            date: "29/03/2023",
            demo: true,
            github: true,
            type: "PERSONAL PROJECT",
            img: 'port.png',
            tech: ["JavaScript", "React.js", "Sass", "Three.js"]
        },
        {
            title: "Lab solver",
            content: (item) => <SounDisTest item={item} setPopUp={setPopUp}/>,
            date: "29/03/2023",
            demo: true,
            github: true,
            type: "PERSONAL PROJECT",
            img: 'lab.png',
            tech: ["TypeScript", "React.js", "Sass"]
        },
        {
            title: "Sound displacement",
            content: (item) => <SounDisTest item={item} setPopUp={setPopUp}/>,
            date: "29/03/2023",
            demo: true,
            github: true,
            type: "PERSONAL PROJECT",
            img: 'displace.png',
            tech: ["JavaScript", "React.js", "Sass", "Three.js"]
        }
    ]

    const getIcon = (title) => {
        switch(title) {
            case "JavaScript": return <JsSvg />;
            case "TypeScript": return <TsSvg />;
            case "React.js": return <ReactSvg />;
            case "Sass": return <SassSvg />;
            case "Three.js": return <ThreeSvg />;
        }
    }
    return (
        <div className={style.container}>
            <div className={style.list} ref={ref}>
                {items.map(item => (
                    <div className={style.list_item} onClick={() => setPopUp(item.content(item))}>
                        <div className={style.list_item_img} style={{backgroundImage: `url(${require('../../img/'+item.img)})`}}></div>
                        <div className={style.list_item_content}>
                            <div className={style.list_item_main}>
                                <p>{item.title}</p>
                                
                            </div>
                            <div className={style.list_item_details}>
                                <div>
                                    <p className={style.list_item_details_personal}>{item.type}</p>
                                    <p>{item.date}</p>
                                </div>
                                <div>
                                    <p className={style.testk}>
                                        <CheckmarkSvg />
                                        <span>DEMO</span>
                                    </p>
                                    <p className={style.testk}>
                                        <CheckmarkSvg />
                                        <span>GITHUB</span>
                                    </p>
                                </div>
                            </div>
                            <div className={style.list_item_split}></div>
                            <div className={style.list_item_tech}>
                                {item.tech.map(icon => (
                                    <div title={icon}>
                                        {getIcon(icon)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                ))}
            </div>
    </div>
    )
}