import { useEffect, useRef } from 'react'
import Search from '../Search/Search'
import CreateBtn from './CreateBtn'
import logo from "../../assets/images/logo.png"
import styles from './topbar.module.scss'
import cx from 'classnames'
import useBreakpoint from '../../layouts/MainLayout/breakpoints'
import { useClickAway, useToggle } from 'react-use'

interface Props {
    onMenuToggleClick: () => void
}

export default function Index({ onMenuToggleClick }: Props) {
    const MD = useBreakpoint('MD')
    const SM = useBreakpoint('SM')

    const [isMiniSearch, toggleIsMiniSearch] = useToggle(false)
    const ref = useRef<HTMLDivElement>(null)

    useClickAway(ref, () => toggleIsMiniSearch(false))

    useEffect(() => {
        toggleIsMiniSearch(false)
    }, [MD, toggleIsMiniSearch])

    if (isMiniSearch) {
        return (
            <div ref={ref} className="flex items-center h-14 px-4 space-x-4">
                <button className={cx("material-icons", styles.fontIcon)} onClick={toggleIsMiniSearch}>arrow_back</button>
                <Search focus />
                <button className={cx("material-icons", styles.fontIcon)} title="YouTube apps">mic</button>
            </div>
        )
    }

    return (
        <div className="flex items-center h-14">
            <div className="flex items-center flex-none">
                <button className={cx("material-icons", !SM ? "mx-4" : "mx-6", styles.fontIcon)} onClick={onMenuToggleClick}>menu</button>
                <a href="/"><img className="block max-h-5" src={logo} alt="logo" /></a>
            </div>

            <div className={cx(
                "ml-auto flex iterms-center",
                MD ? "flex-1 px-11 max-w-2xl mr-auto space-x-3" : "mr-3"
            )}>
                {MD && <Search />}
                {SM && <button className={cx("material-icons", styles.fontIcon)} title="YouTube apps">mic</button>}
            </div>

            <div className="flex items-center">
                <div className={cx("flex items-center", MD ? "space-x-6" : "space-x-4")}>
                    {
                        !MD && !isMiniSearch &&
                        <button
                            onClick={toggleIsMiniSearch}
                            className={cx("material-icons", styles.fontIcon)}
                            title="search"
                        >search</button>
                    }
                    <CreateBtn />
                    <button className={cx("material-icons", styles.fontIcon)} title="YouTube apps">apps</button>
                    {SM && <button className={cx("material-icons", styles.fontIcon)} title="notifications">notifications</button>}
                </div>
                <img className="w-8 h-8 rounded-full mx-7 cursor-pointer" src="https://picsum.photos/52" alt="avatar" />
            </div>
        </div >
    )
}
