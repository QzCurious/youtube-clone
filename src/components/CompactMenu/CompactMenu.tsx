import React from 'react'
import CompactMenuLink from '../CompactMenu/CompactMenuLink'
import './compact-menu.scss'

export default function CompactMenu() {
    return (
        <div className="compact-menu">
            <CompactMenuLink img={<i className="material-icons">home</i>} title="Home" href="/" active />
            <CompactMenuLink img={<i className="material-icons">local_fire_department</i>} title="Trending" href="/trending" />
            <CompactMenuLink img={<i className="material-icons">subscriptions</i>} title="Subscriptions" href="/subscriptions" />
            <CompactMenuLink img={<i className="material-icons">video_library</i>} title="Library" href="/library" />
        </div>
    )
}
