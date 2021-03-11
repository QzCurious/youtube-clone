import classNames from 'classnames'
import Dropdown from '../Dropdown/Dropdown';
import menu from '../Menu/menu.module.scss'
import topbar from '../Topbar/topbar.module.scss'

export default function CreateBtn() {
    return (
        <Dropdown btn={<button className={classNames("material-icons", topbar.fontIcon)}>video_call</button>}>
            <div className="w-44 bg-white border border-black border-opacity-10">
                <div className={menu.block}>
                    <a className={classNames(menu.item, "px-4")} href="/upload-video"><i className={classNames(menu.fontIcon, "material-icons mr-4")}>ondemand_video</i>Upload video</a>
                    <a className={classNames(menu.item, "px-4")} href="/go-live"><i className={classNames(menu.fontIcon, "material-icons mr-4")}>podcasts</i>Go live</a>
                </div>
            </div>
        </Dropdown>
    )
}
