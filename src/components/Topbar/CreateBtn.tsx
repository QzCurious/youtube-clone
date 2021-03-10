import classNames from 'classnames'
import Dropdown from '../Dropdown/Dropdown';
import styles from '../Menu/menu.module.scss'

export default function CreateBtn() {
    return (
        <Dropdown
            className="topbar__btn"
            btn={<div className="material-icons" style={{ display: 'block' }}>video_call</div>}
        >
            <div className="w-48 bg-white border border-black border-opacity-10">
                <div className={styles.block}>
                    <a className={styles.item} href="/upload-video"><i className={classNames(styles.fontIcon, "material-icons")}>ondemand_video</i>Upload video</a>
                    <a className={styles.item} href="/go-live"><i className={classNames(styles.fontIcon, "material-icons")}>podcasts</i>Go live</a>
                </div>
            </div>
        </Dropdown>
    )
}
