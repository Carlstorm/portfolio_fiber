
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
  const [page, setPage] = useState("main")
  const [disableMenu, setDisableMenu] = useState(false)

  useEffect(() => {
    if (page !== null) {
      setDisableMenu(true)
      animation.pageTransition = true
      setTimeout(() => {
        if (page === "main") {
          invalidate()
          animation.pageTransition = false
        }
        setDisableMenu(false)
      }, 1000);
    }
  },[page])

  const classList = [
    style.component,
    page ? style[`component_${page}`] : "",
  ]
  
  return (
    <div className={classList.join(" ")} ref={ref}>
      <Main setPage={setPage} page={page} animation={animation} disableMenu={disableMenu}/>
      <Work back={() => setPage("main")} page={page} />
      <About back={() => setPage("main")} page={page} />
    </div>
  );
}
export default App;
