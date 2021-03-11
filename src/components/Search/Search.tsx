import classNames from "classnames"

export default function index() {
    return (
        <form className="flex">
            <input
                className={classNames("h-8 px-3 flex-auto",
                    "border border-black border-opacity-20 border-r-0 rounded-l-sm")}
                type="text"
                name="search"
                placeholder="Search"
            />
            <button
                className={classNames(
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
