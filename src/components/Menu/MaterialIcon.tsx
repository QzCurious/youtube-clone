import classNames from "classnames";

interface Props {
    iconName: string,
    active?: boolean
}

export default function MaterialIcon({ iconName, active = false }: Props) {
    return (
        <i className={classNames(
            "material-icons flex justify-center items-center",
            "text-2xl w-6 h-6",
            { "text-red-0": active },
            {"text-black text-opacity-60": !active}
        )}>
            {iconName}
        </i>
    )
}
