import MenuBlock from './MenuBlock'
import MenuLink from './MenuLink'
import ShowMoreBtn from './ShowMoreBtn'
import MaterialIcon from './MaterialIcon'
import Divider from './Divider'
import Header from './Header'

export default function Menu() {
    return (
        <div className="w-60">
            <MenuBlock>
                <MenuLink img={<MaterialIcon iconName="home" active />} title="Home" href="/" active />
                <MenuLink img={<MaterialIcon iconName="local_fire_department" />} title="Trending" href="/trending" />
                <MenuLink img={<MaterialIcon iconName="subscriptions" />} title="Subscriptions" href="/subscriptions" />
            </MenuBlock>
            <Divider />
            <MenuBlock>
                <MenuLink img={<MaterialIcon iconName="video_library" />} title="Library" href="/library" />
                <MenuLink img={<MaterialIcon iconName="history" />} title="History" href="/history" />
                <MenuLink img={<MaterialIcon iconName="slideshow" />} title="Your videos" href="/my-videos" />
                <MenuLink img={<MaterialIcon iconName="watch_later" />} title="Watch later" href="/watch-later" />
                <MenuLink img={<MaterialIcon iconName="playlist_play" />} title="My Playlist" href="/playlists/b812dc17-f800-469d-ba3c-a59baafe3241" />
                <ShowMoreBtn text="Show More" />
            </MenuBlock>
            <Divider />
            <MenuBlock>
                <Header>SUBSCRIPTIONS</Header>
                <MenuLink img={<img className="w100 circle" src="https://picsum.photos/51" alt="" />} title="Laravel Business" href="#" />
                <MenuLink img={<img className="w100 circle" src="https://picsum.photos/49" alt="" />} title="Flux" href="#" />
            </MenuBlock>
            <Divider />
            <MenuBlock>
                <Header>More From YouTube</Header>
                <MenuLink img={<i className="fab fa-youtube"></i>} title="YouTube Premium" href="#" />
                <MenuLink img={<MaterialIcon iconName="gamepad" />} title="Gaming" href="#" />
                <MenuLink img={<MaterialIcon iconName="wifi_tethering" />} title="Live" href="#" />
            </MenuBlock>
            <Divider />
            <MenuBlock>
                <MenuLink img={<MaterialIcon iconName="settings" />} title="Settings" href="#" />
                <MenuLink img={<MaterialIcon iconName="flag" />} title="Report history" href="#" />
                <MenuLink img={<MaterialIcon iconName="help" />} title="Help" href="#" />
                <MenuLink img={<MaterialIcon iconName="feedback" />} title="Send feedback" href="#" />
            </MenuBlock>
        </div>
    )
}
