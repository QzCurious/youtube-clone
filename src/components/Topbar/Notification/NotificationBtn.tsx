import cx from 'classnames'
import Dropdown from '../../Dropdown/Dropdown'
import menu from '../../Menu/menu.module.scss'
import topbar from '../topbar.module.scss'

export default function NotificationBtn() {
    return (
        <Dropdown
            btn={({ onClick }) =>
                <button
                    onClick={onClick}
                    className={cx("material-icons", topbar.fontIcon)}
                    title="notifications"
                >notifications</button>
            }
            align="right"
            position="bottom"
        >
            <div className="w-120 border border-t-0 border-black border-opacity-10">
                <div className={cx("bg-white flex items-center justify-between py-3 pl-4 pr-3.5")}>
                    <h2 className={cx("text-black text-opacity-90")}>Notifications</h2>
                    <button className={cx("material-icons text-opacity-40", topbar.fontIcon)} title="Settings">settings</button>
                </div>
                <div className={cx(menu.divider, "bg-white")}></div>
                {defaultContent}
            </div>
        </Dropdown>
    )
}

const defaultContent = (
    <div className="h-144 relative bg-white bg-opacity-98">
        <div className="absolute inset-0 mb-9 flex flex-col justify-center items-center">
            <div className="material-icons text-9xl text-black text-opacity-20 select-none">notifications</div>
            <div className="text-center w-72 mt-5">
                <h3 className="mb-2 font-medium text-black text-opacity-70">Your notifications live here</h3>
                <p className="text-sm text-black text-opacity-60">Subscribe to your favorite channels to get notified about their latest videos.</p>
            </div>
        </div>
    </div>
)
