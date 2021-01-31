import classNames from 'classnames'

export default function MenuLink(props) {
    return (
        <a
            href={props.href}
            className={classNames("menu__item", "menu__link", { "menu__link--active": props.active })}
            onClick={props.onClick}
        >
            <i className="menu__img">{props.img}</i>
            <span className="menu__text">{props.title}</span>
        </a>
    )
}
