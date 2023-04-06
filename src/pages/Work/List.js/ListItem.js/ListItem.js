import CheckmarkSvg from "../../../../assets/svgs/Checkmark";
import WorkTemplate from "../../Works/WorkTemplate/WorkTemplate";
import { getTechIcon } from "../../Works/Works";

import style from './ListItem.module.scss'

export default function Listitem({item, setPopUp}) {

    const event = {
        click: () => {
            setPopUp(
                <WorkTemplate item={item} setPopUp={setPopUp} content={item.content} />
            )
        }
    }

    return (
        <div className={style.component} onClick={() => event.click()}>
            <div className={style.img} style={{backgroundImage: `url(${item.img})`}}></div>
            <div className={style.content}>
                <p className={style.title}>{item.title}</p>
                <div className={style.details}>
                    <div>
                        <p className={style.type_personal}>{item.type}</p>
                        <p>{item.date}</p>
                    </div>
                    <div>
                        {!item.demo ? null : 
                            <p className={style.checkText}>
                                <CheckmarkSvg /><span>DEMO</span>
                            </p>
                        }
                        {!item.github ? null : 
                            <p className={style.checkText}>
                                <CheckmarkSvg /><span>GITHUB</span>
                            </p>
                        }
                    </div>
                </div>
                <div className={style.split}></div>
                <div className={style.tech}>
                    {item.tech.map((icon, i) => (
                        <div title={icon} key={icon+i}>
                            {getTechIcon(icon)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}