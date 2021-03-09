import classNames from "classnames";

interface Props {
    children: string
}

export default function Header({ children }: Props) {
    return (<h3
        className="pl-6 font-normal text-sm uppercase leading-8"
    >{children}</h3>)
}
