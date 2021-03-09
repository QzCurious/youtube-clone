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
            className={classNames(
                "text-black text-opacity-95 text-sm w-full h-10 px-6 border-none",
                "flex items-center cursor-pointer",
                "hover:bg-black hover:bg-opacity-5",
                { "bg-white": !active },
                { "font-medium bg-black bg-opacity-10 hover:bg-opacity-20": active }
            )}
            onClick={onClick}
        >
            <span className={classNames(
                "flex justify-center items-center",
                "w-6 h-6 mr-6",
            )}>{img}</span>
            <span
                className="overflow-hidden overflow-ellipsis whitespace-nowrap"
            >{title}</span>
        </a>
    )
}
