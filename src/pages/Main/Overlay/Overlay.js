
import { useEffect, useRef } from 'react'
import style from './Overlay.module.scss'

export default function Overlay({animation}) {
    const ref = useRef(null)

    useEffect(() => {
        if (ref.current) setOverlayAnimation()
    },[ref])

    const colorOverlayOpacity = {
        start: 0,
        end: 0.45
    }
    const radialOverlayOpacity = {
        start: 0.33,
        end: 0.9
    }

    const setOverlayAnimation = () => {
        const overlayElm = ref.current
        const colorOverlay = overlayElm.children[0]
        const radialOverlay = overlayElm.children[1]

        colorOverlay.style.setProperty("--opacity", colorOverlayOpacity.start)
        radialOverlay.style.setProperty("--opacity", radialOverlayOpacity.start)
        overlayElm.style.display = "inherit"
        const animationSpan = {
            start: 0.728,
            end: 1
        }

        animation.overlay_animation_function = () => {
            if (animation.progress < animationSpan.start || animation.progress >= animation.end)
                return

            const progress = animation.getLocalAnimationProgress(animationSpan.start, animationSpan.end)

            const colorValue = colorOverlayOpacity.start+((colorOverlayOpacity.end-colorOverlayOpacity.start)*progress)
            const radialValue =  radialOverlayOpacity.start+((radialOverlayOpacity.end-radialOverlayOpacity.start)*progress)
            
            colorOverlay.style.setProperty("--opacity", colorValue)
            radialOverlay.style.setProperty("--opacity", radialValue)
        }
    }

    return (
        <div className={style.overlay} ref={ref}>
            <div className={style.overlay_color} style={{"--opacity": colorOverlayOpacity.start}}></div>
            <div className={style.overlay_radial} style={{"--opacity": radialOverlayOpacity.start}}></div>
        </div>
    )
}