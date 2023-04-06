import { forwardRef, useEffect, useRef, useState } from 'react'
import AboutMeSvg from '../../../assets/svgs/AboutMeSvg'
import BurgerSvg from '../../../assets/svgs/BurgerSvg'
import LinkedInSvg from '../../../assets/svgs/LinkedInSvg'
import MailSvg from '../../../assets/svgs/MailSvg'
import style from './Menu.module.scss'
import { MenuButton } from './MenuButton'

const Menu = ({setPage, animation, disableMenu}) => {
    const ref = useRef(null)
    const [mailText, setMailText] = useState("Copy Mail")

    useEffect(() => {
        if (ref.current) setMenuAnimation()
    },[ref])

    const setMenuAnimation = () => {
        const menuElm = ref.current
        menuElm.style.setProperty('--opacity', `0`)
        menuElm.style.setProperty('--pointer-event', `none`)
        
        const frames = 20
        let f = frames, prevAnim = "out"

        animation.menu_animation_function = () => {
            if (animation.progress > 0.98) {
                if (prevAnim != "in") {prevAnim = "in"; f = 0; return}
                if (f>frames) return
                f += 1
                let k = f/frames
                menuElm.style.setProperty('--opacity', `${k}`)
                menuElm.style.setProperty('--pointer-events', `initial`)
              } else {
                if (prevAnim != "out") {prevAnim = "out"; f = 0; return}
                if (f>frames) return
                f += 1
                let k = f/frames
                menuElm.style.setProperty('--opacity', `${1-k}`)
                menuElm.style.setProperty('--pointer-events', `none`)
              }
        }
    }

    const event = {
        copy_mail: () => {
            var input = document.createElement('textarea');
            input.innerHTML = "carl-strom@hotmail.com"
            document.body.appendChild(input);
            input.select();
            var result = document.execCommand('copy');
            document.body.removeChild(input);
            setMailText("Mail copied!")
        },
        mail_text_reset: () => {
            setMailText("Copy mail")
        },
        changePage: (page) => {
            setPage(page)
        },
        place: () => {
            return
        }
    }

    const classList = [
        style.component,
        disableMenu ? style.component_disable : ""
    ]


    return (
        <div className={classList.join(" ")} ref={ref}>
            <div>
                <MenuButton 
                    orintation="left" 
                    icon={<AboutMeSvg />}
                    onClick={() => event.changePage("about")}
                    text="About me"
                />
                <MenuButton 
                    orintation="right" 
                    icon={<BurgerSvg />}
                    onClick={() => event.changePage("work")}
                    text="My work"
                />
            </div>
            <div>
                <MenuButton 
                    orintation="left" 
                    icon={<LinkedInSvg />}
                    onClick={event.place}
                />
                <MenuButton 
                    orintation="right" 
                    icon={<MailSvg />}
                    onClick={event.copy_mail}
                    onMouseLeave={event.mail_text_reset}
                    text={mailText}
                />
            </div>
            <span>Carl E. Storm</span>
        </div>
    )
}

export default Menu