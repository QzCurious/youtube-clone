import classNames from 'classnames'

interface Props {
    text: string,
    active?: boolean,
    onClick: (text: string) => void
}

export default function Filter(props: Props) {
    const { active = false, text, onClick } = props
    return (
        <button
            className={classNames(
                "text-sm whitespace-nowrap h-8 px-3 mr-2",
                "rounded-3xl border border-solid border-black",
                "transition-colors duration-100",
                { "bg-black bg-opacity-5 hover:bg-opacity-10 border-opacity-10": !active },
                { "bg-black bg-opacity-60 hover:bg-opacity-50 border-opacity-5 text-white ": active },
            )}
            onClick={() => onClick(text)}
        >{text}</button>
    )
}
