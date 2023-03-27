
import { useEffect, useRef, useState } from 'react';

// HANDLER
import AnimationHandler from './AnimationHandler';

// PAGES
import Main from './pages/Main/Main';
import Work from './pages/Work/Work';
import About from './pages/About/About';

// STYLE
import style from './App.module.scss'
import { invalidate } from '@react-three/fiber';

const animation = new AnimationHandler()

function App() {
  const ref = useRef(null)
  const [page, setPage] = useState(null)

  useEffect(() => {
    if (page !== null) {
      if (page !== "main")
        animation.pageTransition = true
      else
        setTimeout(() => {
          invalidate()
          animation.pageTransition = false
        }, 1000);
    }
  },[page])

  const classList = [
    style.component,
    page ? style[`component_${page}`] : "",
  ]


  // const setPageTransitionAnimation = () => {
  //   const pagesElm = ref.current
  //   pagesElm.style.setProperty('--translateX', `0%`)
  //   const frames = 30
  //   let f = 0

  //   animation.pageTransition_animation_function = () => {
  //     if (f >= frames) {
  //       animation.pageCurrentPosition = animation.pageTransition === "work" ? -100 : animation.pageTransition === "about" ? 100 : 0
  //       animation.pageTransition = null
  //       f = 0
  //       return
  //     }

  //     f += 1
  //     let k = f/frames

  //     if (animation.pageTransition === "work")
  //       pagesElm.style.setProperty('--translateX', `${-100*k}%`)
  //     else if (animation.pageTransition === "about")
  //       pagesElm.style.setProperty('--translateX', `${100*k}%`)
  //     else if (animation.pageTransition === "main")
  //       pagesElm.style.setProperty('--translateX', `${animation.pageCurrentPosition*(1-k)}%`)
      
  //   }
  // }
  
  return (
    <div className={classList.join(" ")} ref={ref}>
      <Main setPage={setPage} animation={animation}/>
      <Work back={() => setPage("main")}/>
      <About back={() => setPage("main")}/>
    </div>
  );
}
export default App;
