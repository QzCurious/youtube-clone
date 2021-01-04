import React from 'react'
import "./search.scss"

export default function index() {
    return (
        <form className="search">
            <input className="search__input" type="text" name="search" placeholder="Search" />
            <button className="search__btn material-icons" type="submit">search<span className="sr-only">Search it</span></button>
        </form>

    )
}
