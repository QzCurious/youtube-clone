import React from 'react'
import Search from '../Search/Search'
import CreateBtn from './CreateBtn'
import logo from "../../assets/images/logo.png"
import styles from './topbar.module.scss'
import classNames from 'classnames'

interface Props {
    onMenuToggleClick: () => void
}

export default function index({ onMenuToggleClick }: Props) {
    return (
        <div className="flex items-center h-14">
            <button className={classNames("material-icons mx-6", styles.fontIcon)} onClick={onMenuToggleClick}>menu</button>
            <a href="/"><img className="block max-h-5" src={logo} alt="logo" /></a>
            <div className="flex-auto max-w-2xl px-11 mx-auto">
                <Search></Search>
            </div>
            <div className="flex items-center">
                <CreateBtn />
                <button className={classNames("material-icons", styles.fontIcon)} title="YouTube apps">apps</button>
                <button className={classNames("material-icons", styles.fontIcon)} title="notifications">notifications</button>
                <img className="w-8 h-8 rounded-full ml-4 mr-7 cursor-pointer" src="https://picsum.photos/52" alt="avatar" />
            </div>
        </div>
    )
}
