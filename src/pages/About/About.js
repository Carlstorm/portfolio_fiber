import CrossSvg from '../../assets/svgs/CrossSvg'
import PortfolioSvg from '../../assets/svgs/PortfolioSvg'
import { MenuButton } from '../Main/Menu/MenuButton'
import style from './About.module.scss'

export default function About({back}) {


    return (
        <div className={style.component}>
            <PortfolioSvg className={style.svg} />
                <MenuButton 
                    orintation="left" 
                    icon={<CrossSvg />}
                    onClick={() => back()}
                    text="Go back"
                />
        </div>
    )
}