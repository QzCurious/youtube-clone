import MenuBlock from './MenuBlock'
import MenuLink from './MenuLink'
import './menu.scss'
import ShowMoreBtn from './ShowMoreBtn'

export default function Menu() {
    return (
        <div className="menu">
            <MenuBlock>
                <MenuLink img={<i className="material-icons">home</i>} title={"Home"} href="/" active />
                <MenuLink img={<i className="material-icons">local_fire_department</i>} title={"Trending"} href="/trending" />
                <MenuLink img={<i className="material-icons">subscriptions</i>} title={"Subscriptions"} href="/subscriptions" />
            </MenuBlock>
            <hr className="menu__divider" />
            <MenuBlock>
                <MenuLink img={<i className="material-icons">video_library</i>} title={"Library"} href="/library" />
                <MenuLink img={<i className="material-icons">history</i>} title={"History"} href="/history" />
                <MenuLink img={<i className="material-icons">slideshow</i>} title={"Your videos"} href="/my-videos" />
                <MenuLink img={<i className="material-icons">watch_later</i>} title={"Watch later"} href="/watch-later" />
                <MenuLink img={<i className="material-icons">playlist_play</i>} title={"My Playlist"} href="/playlists/b812dc17-f800-469d-ba3c-a59baafe3241" />
                <ShowMoreBtn title="Show More" />
            </MenuBlock>
            <hr className="menu__divider" />
            <MenuBlock>
                <h3 className="menu__header">SUBSCRIPTIONS</h3>
                <MenuLink img={<img className="w100 circle" src="https://picsum.photos/51" alt="" />} title={"Laravel Business"} href="#" />
                <MenuLink img={<img className="w100 circle" src="https://picsum.photos/49" alt="" />} title={"Flux"} href="#" />
            </MenuBlock>
            <hr className="menu__divider" />
            <MenuBlock>
                <h3 className="menu__header">More From YouTube</h3>
                <MenuLink img={<i className="fab fa-youtube"></i>} title={"YouTube Premium"} href="#" />
                <MenuLink img={<i className="material-icons">gamepad</i>} title={"Gaming"} href="#" />
                <MenuLink img={<i className="material-icons">wifi_tethering</i>} title={"Live"} href="#" />
            </MenuBlock>
            <hr className="menu__divider" />
            <MenuBlock>
                <MenuLink img={<i className="material-icons">settings</i>} title={"Settings"} href="#" />
                <MenuLink img={<i className="material-icons">flag</i>} title={"Report history"} href="#" />
                <MenuLink img={<i className="material-icons">help</i>} title={"Help"} href="#" />
                <MenuLink img={<i className="material-icons">feedback</i>} title={"Send feedback"} href="#" />
            </MenuBlock>
        </div>
    )
}