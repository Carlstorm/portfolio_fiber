import { invalidate, useFrame } from '@react-three/fiber'
import { useEffect } from 'react'

// gets run once in canvas to utilize the useFrame hook
export function InitAnimation({animation}) {
  const event = {
    wheel: (e) => {
      let newScrollValue = animation.scrollValue+e.deltaY
      if (newScrollValue > animation.scrollDistance)
        newScrollValue = animation.scrollDistance
      else if (newScrollValue < 0)
        newScrollValue = 0

      if (animation.scrollValue != newScrollValue) {
        animation.progressNeedsUpdate = true
        animation.scrollValue = newScrollValue
      }
    },
    mousemove: (e) => {
      const x = e.clientX/window.innerWidth
      const y = e.clientY/window.innerHeight
      if (animation.mousePos.x != x || animation.mousePos.y != y) {
        animation.cameraNeedsUpdate = true
        animation.mousePos = {x:x-0.5, y:y-0.5}
      }
    }
  }
  
  useEffect(() => {
    window.addEventListener("wheel", event.wheel)
    window.addEventListener("mousemove", event.mousemove)
  
    return () => {
      window.removeEventListener("wheel", event.wheel)
      window.removeEventListener("mousemove", event.mousemove)
    }
  },[])

  const ScrollAnimations = () => {
    const progress = animation.scrollValue/animation.scrollDistance
    const smoothtoLiveDiff = progress-animation.progress

    if (Math.abs(smoothtoLiveDiff) < 0.0005)
      animation.progressNeedsUpdate = false
    
    animation.progress += animation.smoothing*smoothtoLiveDiff

    animation.menu_animation()

    animation.scrollIndicator_animation()

    animation.grenade_animation()

    animation.overlay_animation()

    animation.text_animation()
  }

  const mouseAnimations = (camera) => {
    const smoothToLiveDiffMouse = {
      x: (animation.mousePos.x-animation.cameraPos.x),
      y: (animation.mousePos.y-animation.cameraPos.y)
    }

    if (Math.abs(smoothToLiveDiffMouse.x)+Math.abs(smoothToLiveDiffMouse.y) < 0.001)
      animation.cameraNeedsUpdate = false

    animation.cameraPos.x+=animation.smoothingMouse*smoothToLiveDiffMouse.x
    animation.cameraPos.y+=animation.smoothingMouse*smoothToLiveDiffMouse.y

    animation.rotate_camera(camera)
  }

  useFrame(state => {
    if (!animation.pageTransition) {
      invalidate()
    }

    if (animation.progressNeedsUpdate) {
      ScrollAnimations()
    }

    if (animation.cameraNeedsUpdate)
      mouseAnimations(state.camera)
  })
}



