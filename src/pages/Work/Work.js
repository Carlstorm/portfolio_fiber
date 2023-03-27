
import CrossSvg from '../../assets/svgs/CrossSvg'
import PortfolioSvg from '../../assets/svgs/PortfolioSvg'
import { MenuButton } from '../Main/Menu/MenuButton'
import style from './Work.module.scss'

export default function Work({back}) {

    return (
        <div className={style.component}>
            <PortfolioSvg className={style.svg} />
                <MenuButton 
                    orintation="right" 
                    icon={<CrossSvg />}
                    onClick={() => back()}
                    text="Go back"
                />
        </div>
    )
}