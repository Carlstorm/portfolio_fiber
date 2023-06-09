import style from './Menu.module.scss'

export function MenuButton({orintation, icon, onClick, text, onMouseLeave, size}) {

    // const classNames = [
    //     orintation === "right" ? style.MenuButton_right : style.MenuButton_left
    // ]

    return (
        <div className={orintation === "right" ? style.MenuButton_right : style.MenuButton_left}>
            <div onClick={() => onClick()} onMouseLeave={() => onMouseLeave ? onMouseLeave() : null} style={size ? {height: size} : {}}>
                {icon}
            </div>
            <div>
                <span>{text}</span>
            </div>
        </div>
    )
}