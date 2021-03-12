import ShowMoreBtn from './ShowMoreBtn'
import styles from './menu.module.scss'
import classNames from 'classnames'

export default function Menu() {
    return (
        <div className="w-60">
            <div className={styles.block}>
                <a href="/" className={classNames(styles.item, styles.active)}><i className={classNames(styles.fontIcon, "material-icons")}>home</i>Home</a>
                <a href="/trending" className={styles.item}><i className={classNames(styles.fontIcon, "material-icons")}>local_fire_department</i>Trending</a>
                <a href="/subscriptions" className={styles.item}><i className={classNames(styles.fontIcon, "material-icons")}>subscriptions</i>Subscriptions</a>
            </div>
            <div className={styles.divider} />
            <div className={styles.block}>
                <a href="/library" className={styles.item}><i className={classNames(styles.fontIcon, "material-icons")}>video_library</i>Library</a>
                <a href="/history" className={styles.item}><i className={classNames(styles.fontIcon, "material-icons")}>history</i>History</a>
                <a href="/my-videos" className={styles.item}><i className={classNames(styles.fontIcon, "material-icons")}>slideshow</i>Your videos</a>
                <a href="/watch-later" className={styles.item}><i className={classNames(styles.fontIcon, "material-icons")}>watch_later</i>Watch later</a>
                <a href="/playlists/b812dc17-f800-469d-ba3c-a59baafe3241" className={styles.item}><i className={classNames(styles.fontIcon, "material-icons")}>playlist_play</i>My Playlist</a>
                <ShowMoreBtn text="Show More" />
            </div>
            <div className={styles.divider} />
            <div className={styles.block}>
                <div className={styles.header}>SUBSCRIPTIONS</div>
                <a href="#" className={styles.item}><img className={classNames(styles.icon, "rounded-full")} src="https://picsum.photos/51" alt="" /><span className="truncate">Laravel Business</span></a>
                <a href="#" className={styles.item}><img className={classNames(styles.icon, "rounded-full")} src="https://picsum.photos/49" alt="" /><span className="truncate">Flux</span></a>
                <a href="#" className={styles.item}><img className={classNames(styles.icon, "rounded-full")} src="https://picsum.photos/50" alt="" /><span className="truncate">Lorem ipsum dolor sit amet.</span></a>
            </div>
            <div className={styles.divider} />
            <div className={styles.block}>
                <div className={styles.header}>More From YouTube</div>
                <a href="#" className={styles.item}><i className={classNames(styles.fontIcon, "fab fa-youtube")}></i>YouTube Premium</a>
                <a href="#" className={styles.item}><i className={classNames(styles.fontIcon, "material-icons")}>gamepad</i>Gaming</a>
                <a href="#" className={styles.item}><i className={classNames(styles.fontIcon, "material-icons")}>wifi_tethering</i>Live</a>
            </div>
            <div className={styles.divider} />
            <div className={styles.block}>
                <a href="#" className={styles.item}><i className={classNames(styles.fontIcon, "material-icons")}>settings</i>Settings</a>
                <a href="#" className={styles.item}><i className={classNames(styles.fontIcon, "material-icons")}>flag</i>Report history</a>
                <a href="#" className={styles.item}><i className={classNames(styles.fontIcon, "material-icons")}>help</i>Help</a>
                <a href="#" className={styles.item}><i className={classNames(styles.fontIcon, "material-icons")}>feedback</i>Send feedback</a>
            </div>
        </div>
    )
}
