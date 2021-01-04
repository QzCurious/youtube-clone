import React from 'react'
import Keywords from '../../components/Keywords/Keywords'
import Menu from '../../components/Menu/Menu'
import Topbar from '../../components/Topbar/Topbar'
import VideoCardGrid from '../../components/VideoCard/VideoCardGrid'
import './main-layout.scss'


export default function MainLayout() {
    return (
        <div className="main-layout">
            <section className="main-layout__topbar">
                <Topbar></Topbar>
            </section>
            <nav className="main-layout__menu">
                <Menu></Menu>
            </nav>
            <section className="main-layout__keywords">
                <Keywords></Keywords>
            </section>
            <main className="main-layout__main">
                <VideoCardGrid></VideoCardGrid>
            </main>
        </div>
    )
}
