import { useEffect, useRef, useState } from 'react'
import CrossSvg from '../../assets/svgs/CrossSvg'
import PortfolioSvg from '../../assets/svgs/PortfolioSvg'
import { MenuButton } from '../Main/Menu/MenuButton'
import style from './About.module.scss'
import { ContentTemplate, SectionTemplate } from './AboutTemplate'

import migimg from '../../img/mig.jpg'

export default function About({back, page}) {
    const [contentLoading, setContentLoading] = useState(false)
    const contentRef = useRef(null)

    useEffect(() => {
        if (page === "about")
            setContentLoading(true)
        else
            setTimeout(() => {
                setContentLoading(false)
            }, 1000)
        // if (!contentRef.current)
        //     return

        // const contentSections = Array.from(contentRef.current.children)
        // contentSections.forEach(section => {
        //     section.classList.add(style.content_section_show)
        // });

        // return () => {
        //     contentSections.forEach(section => {
        //         section.classList.remove(style.content_section_show)
        //     });
        // }
    },[page])


    return (
        <div className={style.component}>
            <PortfolioSvg className={style.svg} />
                <div className={style.menu}>
                    <MenuButton 
                        orintation="left" 
                        icon={<CrossSvg />}
                        onClick={() => back()}
                        text="Go back"
                        size={"22px"}
                    />
                </div>
                {!contentLoading ? null :
                    <div className={style.page}>
                        <ContentTemplate>
                            <SectionTemplate>
                                <div className={style.img} style={{backgroundImage: `url(${migimg})`}}></div>
                            </SectionTemplate>
                            <SectionTemplate>
                                <h2>About me</h2>
                                <p>
                                    Hey there! I'm Carl, and I'm passionate about creating amazing web experiences. With a background in web development, I've always believed that the internet is a canvas for endless possibilities. My journey in this field has been driven by a desire to craft exceptional digital solutions that are not only functional but also visually appealing.
                                </p>
                            </SectionTemplate>
                            <SectionTemplate>
                                <p>
                                    I take pride in my work, and I'm a firm believer in quality over quantity. Every line of code I write, every design element I refine, and every project I undertake is an opportunity to elevate the web to new heights. I'm a constant learner, always looking for the latest technologies and trends to keep my skills sharp.
                                </p>
                            </SectionTemplate>
                            <SectionTemplate>
                                <p>
                                    I love the collaborative nature of web development, whether I'm working with a team to bring a vision to life or helping clients translate their ideas into a digital reality. Effective communication is at the heart of my approach, ensuring that everyone involved is on the same page and satisfied with the end result.
                                </p>
                            </SectionTemplate>
                            <SectionTemplate>
                                <p>
                                    Let's connect and discuss how we can create something incredible together. Whether you have a project in mind or simply want to chat about the web, I'm just a message away.
                                </p>
                             </SectionTemplate>
                        </ContentTemplate>
                    </div>
                }
        </div>
    )
}