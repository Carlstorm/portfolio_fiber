import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Canvas } from '@react-three/fiber'
import { Environment, Html, useProgress } from '@react-three/drei'
import Grenade from './Grenade/Grenade';
import { Suspense, useEffect, useRef, useState } from 'react';
import hdr from '../../assets/hdr/sunset_jhbcentral_4k.hdr'

import style from './Home.module.scss'
import Overlay from './Overlay/Overlay';
import SvgText from './SvgText/SvgText';
import {InitAnimation} from './InitAnimation';

import Menu from './Menu/Menu';
import ScrollIndicator from './ScrollIndicator/ScrollIndicator';


const Loader = ({val}) => {
    return (
        <div>
            <div className={style.loading}>
                <div className={style.loading_bar}>
                    <div className={style.loading_bar_fill} style={{width: `${val}%`}}></div>
                </div>
                <span>loading...</span>
            </div>
        </div>
    )
}

function Main({setPage, page, animation, disableMenu}) {
    const loading = useProgress()
    const [isLoading, setIsLoading] = useState(true)

    if (loading.progress >= 100)
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);

    return (
        <div className={style.component}>
            <Overlay animation={animation}/>
            {isLoading ? <Loader val={loading.progress} /> : null}
            <div className={isLoading ? style.fadeInit : [style.fadeInit, style.fadeInit_show].join(" ")}>
                <Menu setPage={setPage} animation={animation} disableMenu={disableMenu}/>
                <ScrollIndicator animation={animation}/>
                <SvgText animation={animation}/>
                <Canvas frameloop="demand" className={style.canvas} camera={{ position: [0, 0, animation.cameraDistance] }}>
                    <Suspense>
                        <Environment files={hdr} />

                        <EffectComposer>
                            <Bloom 
                                intensity={0.2}
                                luminanceSmoothing={0.4}
                                luminanceThreshold={0.3}
                            />
                        </EffectComposer>
                        <Grenade 
                            animation={animation}
                        />
                        {page === "main" ? <InitAnimation animation={animation} /> : null}
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
}
export default Main;
