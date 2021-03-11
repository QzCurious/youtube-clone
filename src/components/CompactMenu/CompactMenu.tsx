import classNames from 'classnames'
import styles from './compact-menu.module.scss'

export default function CompactMenu() {
    return (
        <div className="w-18">
            <a href="/" className={classNames(styles.item, styles.active)}><i className={classNames(styles.fontIcon, "material-icons")}>home</i>Home</a>
            <a href="/trending" className={styles.item}><i className={classNames(styles.fontIcon, "material-icons")}>local_fire_department</i>Trending</a>
            <a href="/subscriptions" className={styles.item}><i className={classNames(styles.fontIcon, "material-icons")}>subscriptions</i>Subscriptions</a>
            <a href="/library" className={styles.item}><i className={classNames(styles.fontIcon, "material-icons")}>video_library</i>Library</a>
        </div>
    )
}
