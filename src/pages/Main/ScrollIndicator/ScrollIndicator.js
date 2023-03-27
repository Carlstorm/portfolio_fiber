import { useEffect, useRef } from 'react'
import style from './ScrollIndicator.module.scss'

export default function ScrollIndicator({animation}) {
    const ref = useRef(null)

    useEffect(() => {
        if (ref.current) setScrollIndicatorAnimation()
    },[ref])

    const opacityValue = 0.45
    const setScrollIndicatorAnimation = () => {
        const scrollIndicatorElm = ref.current
        scrollIndicatorElm.style.setProperty('--opacity', `${opacityValue}`)

        const frames = 20
        let f = frames, prevAnim = "in"

        animation.scrollIndicator_animation_function = () => {
            if (animation.progress < 0.2) {
                if (prevAnim != "in") {prevAnim = "in"; f = 0; return}
                if (f>frames) return
                f += 1
                let k = f/frames
                scrollIndicatorElm.style.setProperty('--opacity', `${opacityValue*k}`)
                scrollIndicatorElm.style.setProperty('--pointer-events', `initial`)
            } else {
                if (prevAnim != "out") {prevAnim = "out"; f = 0; return}
                if (f>frames) return
                f += 1
                let k = f/frames
                scrollIndicatorElm.style.setProperty('--opacity', `${opacityValue*(1-k)}`)
                scrollIndicatorElm.style.setProperty('--pointer-events', `none`)
            }
        }
    }

    const scrollToBottom = () => {
        animation.scrollValue = animation.scrollDistance
        animation.progressNeedsUpdate = true
    }

    return (
        <div className={style.component} onClick={() => scrollToBottom()} ref={ref} style={{"--opacity": `0`}}>
            <div className={style.mouse}></div>
            <p>Scroll</p>
        </div>
    )
}