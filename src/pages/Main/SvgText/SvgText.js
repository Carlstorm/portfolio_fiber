import { useEffect, useRef } from 'react'
import PortfolioSvg from '../../../assets/svgs/PortfolioSvg'
import style from './SvgText.module.scss'

let StrokeNeedsReset = false;
let FillNeedsReset = false;

export default function SvgText({animation}) {
    const ref = useRef(null)

    useEffect(() => {
        if (ref.current) setTextAnimation()
    },[ref])

    const setTextAnimation = () => {
        const svgElm = ref.current
        const strokePart = svgElm.querySelector('[part="outlined"]');
        const maskPart = svgElm.querySelector('[part="mask"]');
        const maskElm = maskPart.children[0]
        maskElm.style.willChange = "width"
        maskElm.style.width = 0

        const strokePathArray = Array.from(strokePart.children)
        const individualStrokeValues = strokePathArray.map((elm,i) => (1/strokePathArray.length)*(i+1))

        const strokeAnimationSection = {start: 0.50, end: 0.85}
        const fillAnimationSection = {start: 0.85, end: 1}
        
        // init strokes
        strokePathArray.forEach(path => {
            let pathLength = path.getTotalLength()
            path.style.willChange = "stroke-dasharray"
            path.style.strokeDasharray = pathLength
            path.style.strokeDashoffset = pathLength
        })

        animation.text_animation_function = () => {
            svgElm.style.display = "initial"
            strokeAnimation()
            fillAnimation()
        }

        const strokeAnimation = () => {
            if (animation.progress < strokeAnimationSection.start) {
                if (!StrokeNeedsReset)
                    return

                strokePathArray.forEach((path) => {
                    path.style.strokeDashoffset = path.getTotalLength()
                })
                StrokeNeedsReset = false
                return
            }

            if (animation.progress > strokeAnimationSection.end) {
                if (!StrokeNeedsReset)
                    return

                strokePathArray.forEach((path) => {
                    path.style.strokeDashoffset = 0
                })
                StrokeNeedsReset = false
                return
            }

            StrokeNeedsReset = true

            const progress = animation.getLocalAnimationProgress(strokeAnimationSection.start, strokeAnimationSection.end)
            const index = individualStrokeValues.findIndex(val => val > progress && Math.abs(progress-val) <= individualStrokeValues[0])
            if (index === -1) 
                return
                
            const currentPath = strokePathArray[index]
            const currentPathLength = currentPath.getTotalLength()
            const preStrokeVal = index != 0 ? individualStrokeValues[index-1] : 0
            const currentStrokeVal = individualStrokeValues[index]
            const currentPathProgress = (progress-preStrokeVal)/(currentStrokeVal-preStrokeVal)

            // animate current path
            currentPath.style.strokeDashoffset = currentPathLength-(currentPathLength*currentPathProgress)

            // clean other paths
            strokePathArray.forEach((path,i) => {
                let pathLength = path.getTotalLength()
                if (i > index)
                    path.style.strokeDashoffset = pathLength
                if (i < index)
                    path.style.strokeDashoffset = 0
            })
        }

        const fillAnimation = () => {
            const maxWidth = svgElm.viewBox.baseVal.width
            if (animation.progress < fillAnimationSection.start) {
                if (!FillNeedsReset)
                    return
                maskElm.style.width = 0
                FillNeedsReset = false
                return
            }

            if (animation.progress > fillAnimationSection.end) {
                if (!FillNeedsReset)
                    return
                maskElm.style.width = maxWidth
                FillNeedsReset = false
                return
            }

            FillNeedsReset = true
            const progress = animation.getLocalAnimationProgress(fillAnimationSection.start, fillAnimationSection.end)

            // fill
            maskElm.style.width = maxWidth*progress
        }
    }

    return <PortfolioSvg className={style.svg} ref={ref}/>
}