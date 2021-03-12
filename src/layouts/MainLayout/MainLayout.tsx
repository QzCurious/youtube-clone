import { useState } from 'react'
import Filters from '../../components/Filter/Filters'
import Menu from '../../components/Menu/Menu'
import CompactMenu from '../../components/CompactMenu/CompactMenu'
import Topbar from '../../components/Topbar/Topbar'
import VideoCardGrid from '../../components/VideoCard/VideoCardGrid'
import './main-layout.scss'


export default function MainLayout() {
    const [isCompactMenu, setIsCompactMenu] = useState(false)

    return (
        <div className="main-layout">
            <section className="main-layout__topbar">
                <Topbar onMenuToggleClick={() => setIsCompactMenu(!isCompactMenu)}></Topbar>
            </section>
            <nav className="main-layout__menu">
                {isCompactMenu ? <CompactMenu></CompactMenu> : <Menu></Menu>}
            </nav>
            <section className="main-layout__filters">
                <Filters></Filters>
            </section>
            <main className="main-layout__main">
                <VideoCardGrid></VideoCardGrid>
            </main>
        </div>
    )
}
