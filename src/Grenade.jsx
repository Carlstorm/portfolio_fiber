import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three';
import { Vector3 } from 'three';
import { useEffect } from 'react';

const scrollDistance = 1000;

let scrollValue = 0;
let mousePos = {x: 0, y: 0}
export default function Grenade({svgTextRef}) {
  let mixer
  const gltf = useLoader(GLTFLoader, '/assets')
  mixer = new THREE.AnimationMixer( gltf.scene );
  mixer.timeScale = 0.4
  gltf.animations.forEach( ( clip ) => {
    
    mixer.clipAction( clip ).play();
  
} );

const event = {
  wheel: (e) => {
    let newScrollValue = scrollValue+e.deltaY
    if (newScrollValue > scrollDistance)
      newScrollValue = scrollDistance
    else if (newScrollValue < 0)
      newScrollValue = 0
    scrollValue = newScrollValue
  },
  mousemove: (e) => {
    const x = e.clientX/window.innerWidth
    const y = e.clientY/window.innerHeight
    mousePos.x = x-0.5
    mousePos.y = y-0.5
  }
}

useEffect(() => {
  window.addEventListener("wheel", event.wheel)
  window.addEventListener("mousemove", event.mousemove)

  return () => {
    window.removeEventListener("wheel", event.wheel)
    window.removeEventListener("mousemove", event.mousemove)
  }
})

const rotationAxis = new THREE.Vector3(0, 1, 0);
let vector = new Vector3(0, 0, 0)

const offset = new THREE.Vector3();

const maxTime = 3.55

const ChangeInsideMaterial = (material) => {
  Object.keys(gltf.nodes).forEach((key) => {
    if (key.includes("Inside")) {
      gltf.nodes[key].material = gltf.materials[material]
      gltf.nodes[key].material.needsUpdate = true;
    }
  })
}

let svgDrawPercentages = []
useEffect(() => {
  if (!svgTextRef.current)
    return
  let arr = Array.from(svgTextRef.current.children[2].children);
  svgDrawPercentages = arr.map((elm,i) => (1/arr.length)*(i+1))
},[svgTextRef.current])


const drawPath = (from, to, percent) => {
  const svgElm = svgTextRef.current.children[2]

  if (percent < from) {
    svgDrawPercentages.forEach((child,i) => {svgElm.children[i].style.strokeDashoffset = svgElm.children[i].getTotalLength()})
    return
  }
  if (percent > to) {
    svgDrawPercentages.forEach((child,i) => {svgElm.children[i].style.strokeDashoffset = 0})
    return
  }

  const sectionPercent = (percent-from)/(to-from)
  const index = svgDrawPercentages.findIndex(val => val > sectionPercent && Math.abs(sectionPercent-val) <= svgDrawPercentages[0])
  const modifier = index > 0 ? svgDrawPercentages[index-1] : 0
  const pathDrawPercent = (sectionPercent-modifier)/(svgDrawPercentages[index]-modifier)
  const pathLength = svgElm.children[index].getTotalLength()

  svgDrawPercentages.forEach((child,i) => {
    if (i > index)
      svgElm.children[i].style.strokeDashoffset = svgElm.children[i].getTotalLength()
    else if (i != index)
      svgElm.children[i].style.strokeDashoffset = 0
  })

  svgElm.children[index].style.strokeDasharray = pathLength
  svgElm.children[index].style.strokeDashoffset = pathLength-(pathLength*pathDrawPercent)

}

const fillPath = (from, to, percent) => {
  const elmWidth = svgTextRef.current.viewBox.baseVal.width

  const clipElm = svgTextRef.current.children[0].children[0].children[0]

  if (percent < from) { 
    clipElm.style.width = 0
    return
  }
  if (percent > to) {
    clipElm.style.width = 0
    clipElm.style.width = elmWidth
    return
  }
  const sectionPercent = (percent-from)/(to-from)
  clipElm.style.width = elmWidth*sectionPercent
  
}

const rotateSvg = (value) => {
  const elm = svgTextRef.current
  elm.style.transform = `translate(-50%, -50%) rotateY(${17*(value*1)}deg)`
}

let smoothPercent = 0;
useFrame(state => {
  const scrollPercent = (scrollValue/scrollDistance)

  const smoothtoLiveDiff = Math.abs(scrollPercent-smoothPercent)
  const speed = 0.1

  if (smoothPercent < scrollPercent)
    smoothPercent+=speed*smoothtoLiveDiff

  if (smoothPercent > scrollPercent)
    smoothPercent-=speed*smoothtoLiveDiff

  const currentTime = maxTime*smoothPercent

  mixer.setTime(currentTime)

  const sections = {
    a: {start: 0, end: 0.066, rotation: 0, distance: 0},
    b: {start: 0.05, end: 0.27, rotation: 0.5, distance: 0},
    c: {start: 0.27, end: 0.52, rotation: 2, distance: 2},
    d: {start: 0.728, end: 1, rotation: 2, distance: 4},
  }
  drawPath(0.50, 0.85, smoothPercent)
  fillPath(0.85, 1, smoothPercent)

  ChangeInsideMaterial("Outside material")

  if (smoothPercent > sections.d.start && smoothPercent <= sections.d.end) {
    const sectionPercent = (smoothPercent-sections.d.start)/(sections.d.end-sections.d.start)

    ChangeInsideMaterial("Inside material")
  
    let overlayColor = document.querySelector(".overlayColor")
    let overlay = document.querySelector(".overlay")
    overlay.style.opacity = 0.5+(0.5*sectionPercent)
    overlayColor.style.opacity = 0.1+(0.16*sectionPercent)
  }
  
  rotateSvg(mousePos.x*smoothPercent)

  offset.x = (20) * Math.sin( (mousePos.x * 0.2)*smoothPercent );
  offset.z = (20) * Math.cos( (mousePos.x * 0.2)*smoothPercent );
  offset.y = (mousePos.y*2)*smoothPercent

  state.camera.position.copy( vector ).add( offset )
  state.camera.lookAt( vector );
})
  return <primitive object={gltf.scene} position={[0, -0.8, 0]} />
}