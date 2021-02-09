import classNames from 'classnames'

interface Props {
    img: JSX.Element,
    title: string,
    href: string,
    active?: boolean,
    onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void,
}

export default function CompactMenuLink({ img, title, href, active = false, onClick }: Props) {
    return (
        <a
            href={href}
            className={classNames("compact-menu__item", "compact-menu__link", { "compact-menu__link--active": active })}
            onClick={onClick}
        >
            <i className="compact-menu__img">{img}</i>
            <span className="compact-menu__text">{title}</span>
        </a>
    )
}
