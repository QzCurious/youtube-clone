import cx from "classnames"
import { useEffect, useRef } from "react"

interface Props {
    focus?: boolean,
    width?: string
}

export default function Search({ focus = false, width = "w-full" }: Props) {
    const ref = useRef<HTMLInputElement>(null!)

    useEffect(() => {
        focus && ref.current.select()
    }, [focus])

    return (
        <form className={cx("flex", width)}>
            <input
                ref={ref}
                className={cx(
                    "h-8 px-3 w-20 flex-auto",
                    "border border-black border-opacity-20 border-r-0 rounded-l-sm"
                )}
                type="text"
                name="search"
                placeholder="Search"
            />
            <button
                className={cx(
                    "material-icons",
                    "flex-none w-16 text-black text-opacity-40 text-lg",
                    "bg-black bg-opacity-5 hover:bg-opacity-10 hover:text-black",
                    "border border-black border-opacity-20 rounded-r-sm"
                )}
                type="submit"
            >search</button>
        </form>

    )
}
