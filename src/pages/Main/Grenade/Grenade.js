import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three';

import { Suspense, useEffect, useMemo, useState } from 'react';
import { Html, useProgress } from '@react-three/drei';
import { Color, MeshStandardMaterial } from 'three';


export default function Grenade({animation}) {
  const [insideMaterialState, setInsideMaterialState] = useState("Outside material")

  const link = 'https://raw.githubusercontent.com/Carlstorm/portfolio_fiber/gh-pages/grenade.gltf'

  const gltf = useLoader(GLTFLoader, link)

  let mixer
  const grenade = useMemo(() => {
    mixer = new THREE.AnimationMixer( gltf.scene );
    mixer.timeScale = animation.timeScale
    gltf.animations.forEach( ( clip ) => {
      mixer.clipAction( clip ).play()
    })
    return gltf.scene
  }, []);

  const ChangeInsideMaterial = (material) => {
    Object.keys(gltf.nodes).forEach((key) => {
      if (key.includes("Inside")) {
        gltf.nodes[key].material = gltf.materials[material]
        gltf.nodes[key].material.needsUpdate = true;
      }
    })
  }

  useEffect(() => {
    ChangeInsideMaterial(insideMaterialState)
  },[insideMaterialState])

  if (mixer)
    animation.grenade_animation_function = () => {
      if (animation.progress > 0.728)
        setInsideMaterialState("Inside material")
      else 
        setInsideMaterialState("Outside material")
      mixer.setTime(animation.animationLength*animation.progress)
    }

  return (
    <primitive object={grenade} position={[0, -0.8, 0]} />
  )
}