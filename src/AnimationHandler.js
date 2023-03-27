import { useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'

export default class AnimationHandler {
    constructor() {
        this.timeScale = 0.4 // timeScale -dont edit-
        this.animationLength = 3.55 // animation max length
        this.scrollDistance = 2000 // animation scroll length
        this.scrollValue = 0
        this.smoothing = 0.1 // smooth event inputs
        this.smoothingMouse = 0.25
        this.mousePos = {x:0, y:0}
        this.cameraPos = {x:0, y:0}
        this.progress = 0
        this.progressNeedsUpdate = false
        this.cameraNeedsUpdate = false
        this.grenade_animation_function = () => null
        this.overlay_animation_function = () => null
        this.text_animation_function = () => null
        this.menu_animation_function = () => null
        this.scrollIndicator_animation_function = () => null
        this.pageTransition_animation_function = () => null
        this.camera_look_vector = new Vector3(0, 0, 0)
        this.camera_look_offset = new Vector3()
        this.cameraDistance = 20
        this.pageTransition = null
        this.pageCurrentPosition = 0
        this.pageTransitionFrame = 0
    }

    scrollIndicator_animation() {
        this.scrollIndicator_animation_function()
    }

    menu_animation() {
        this.menu_animation_function()
    }

    grenade_animation() {
        this.grenade_animation_function()
    }

    overlay_animation() {
        this.overlay_animation_function()
    }

    text_animation() {
        this.text_animation_function()
    }

    pageTransition_animation() {
        this.pageTransition_animation_function()
    }

    rotate_camera(camera) {
        this.camera_look_offset.x = (this.cameraDistance) * Math.sin( (this.cameraPos.x * 0.2)*this.progress );
        this.camera_look_offset.z = (this.cameraDistance) * Math.cos( (this.cameraPos.x * 0.2)*this.progress );

        this.camera_look_offset.y = (this.cameraPos.y*2)*this.progress

        camera.position.copy( this.camera_look_vector ).add( this.camera_look_offset )
        camera.lookAt( this.camera_look_vector );      
    }

    ease(value) {
        return .5*(Math.sin((value - .5)*Math.PI) + 1);
    }

    getLocalAnimationProgress(from, to) {
        const progress = ((this.progress-from)/(to-from))
        if (progress < 0)
            return null
        if (progress > 1)
            return "done"
        return progress
    }
}