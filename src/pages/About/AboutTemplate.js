import { useEffect, useRef, useState } from 'react'
import style from './About.module.scss'

export const ContentTemplate = ({children}) => {
    const contentRef = useRef(null)
    const [pageReady, setPageReady] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setPageReady(true)
        }, 1000);
    },[])


    useEffect(() => {
        if (!contentRef.current || !pageReady)
            return

        const contentSections = Array.from(contentRef.current.children)
        contentSections.forEach((section, i) => {
            setTimeout(() => {
                section.classList.add(style.content_section_show)
            }, 150*i)
        });

        return () => {
            contentSections.forEach(section => {
                section.classList.remove(style.content_section_show)
            });
        }
    },[pageReady])


    return (
        <div className={style.content} ref={contentRef}>
            {children}
        </div>
    )
}


export const SectionTemplate = ({children}) => {
    return (
        <section className={style.content_section}>
            {children}
        </section>
    )
}