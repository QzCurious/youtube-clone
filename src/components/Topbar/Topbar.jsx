import React from 'react'
import logo from "../../assets/images/logo.png"
import Search from '../Search/Search'
import './topbar.scss'

export default function index() {
    return (
        <div className="topbar">
            <i className="topbar__menu_toggle material-icons">menu</i>
            <img className="topbar__logo logo" src={logo} alt="logo" />
            <div className="topbar__search">
                <Search></Search>
            </div>
            <div className="topbar__tooltray">
                <a className="topbar__icon material-icons" title="create">video_call</a>
                <a className="topbar__icon material-icons" title="YouTube apps">apps</a>
                <a className="topbar__icon material-icons" title="notifications">notifications</a>
                <a title="user profile"><img className="topbar__user" src="https://picsum.photos/52" /></a>
            </div>
        </div>
    )
}
