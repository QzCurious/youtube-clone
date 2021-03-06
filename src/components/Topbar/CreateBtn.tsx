import Dropdown from '../Dropdown/Dropdown';
import MenuBlock from '../Menu/MenuBlock';
import MenuLink from '../Menu/MenuLink';
import '../Menu/menu.scss'

export default function CreateBtn() {
    return (
        <Dropdown
            className="topbar__btn"
            btn={<div className="material-icons" style={{ display: 'block' }}>video_call</div>}
        >
            <div className="menu menu--with-border menu--sm">
                <MenuBlock>
                    <MenuLink img={<i className="material-icons">ondemand_video</i>} title="Upload video" href="/upload-video" />
                    <MenuLink img={<i className="material-icons">podcasts</i>} title="Go live" href="/go-live" />
                </MenuBlock>
            </div>
        </Dropdown>
    )
}
