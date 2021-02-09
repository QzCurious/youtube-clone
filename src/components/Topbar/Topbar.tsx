import React from 'react'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import './topbar.scss'

interface Props {
    onMenuToggleClick: () => void
}

export default function index({ onMenuToggleClick }: Props) {
    return (
        <div className="topbar">
            <button className="topbar__menu_toggle material-icons" onClick={onMenuToggleClick}>menu</button>
            <div className="topbar__logo"><Logo /></div>
            <div className="topbar__search">
                <Search></Search>
            </div>
            <div className="topbar__tooltray">
                <button className="topbar__btn material-icons" title="create">video_call</button>
                <button className="topbar__btn material-icons" title="YouTube apps">apps</button>
                <button className="topbar__btn material-icons" title="notifications">notifications</button>
                <button className="topbar__user" title="user profile">
                    <img className="topbar__avatar" src="https://picsum.photos/52" />
                </button>
            </div>
        </div>
    )
}
