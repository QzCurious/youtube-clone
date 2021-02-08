import classNames from 'classnames'

interface Props {
    img: JSX.Element,
    title: string,
    href: string,
    active?: boolean,
    onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void,
}

export default function MenuLink({ img, title, href, active = false, onClick }: Props) {
    return (
        <a
            href={href}
            className={classNames("menu__item", "menu__link", { "menu__link--active": active })}
            onClick={onClick}
        >
            <i className="menu__img">{img}</i>
            <span className="menu__text">{title}</span>
        </a>
    )
}
