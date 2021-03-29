import cx from 'classnames'
import Menu from './Menu'
import styles from './menu.module.scss'
import logo from "../../assets/images/logo.png"

interface Props {
    show: boolean,
    onMenuToggleClick: () => void
}

export default function FloatingMenu({ show, onMenuToggleClick }: Props) {
    return (
        <div className={cx("fixed inset-0 z-10 transition-visibility", { "invisible": !show })} >
            <Mask show={show} onClick={onMenuToggleClick} />
            <div className={cx(
                "absolute h-full flex flex-col bg-white transform transition-transform",
                { "-translate-x-full": !show }
            )}>
                <div className="flex items-center h-14 flex-none">
                    <button className="material-icons mx-6" onClick={onMenuToggleClick}>menu</button>
                    <a href="/"><img className="block max-h-5" src={logo} alt="logo" /></a>
                </div>
                <div className={styles.divider} />
                <div className="overflow-hidden hover:overflow-y-auto">
                    <Menu />
                </div>
            </div>
        </div>
    )
}

function Mask({ show, onClick }: { show: boolean, onClick: () => void }) {
    return (
        <div
            onClick={onClick}
            className={cx(
                "absolute inset-0 transition-colors",
                { "bg-black bg-opacity-50": show }
            )}
        />
    )
}