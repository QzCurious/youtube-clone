import React from 'react'
import './menu.scss'

export default function Menu() {
    return (
        <div className="menu">
            <section className="menu__block">
                <a href="#" className="menu__item menu__link menu__link--active"><i className="menu__img material-icons">home</i><span className="menu__text">Home</span></a>
                <a href="#" className="menu__item menu__link"><i className="menu__img material-icons">local_fire_department</i><span className="menu__text">Trending</span></a>
                <a href="#" className="menu__item menu__link"><i className="menu__img material-icons">subscriptions</i><span className="menu__text">Subscription</span></a>
            </section>
            <section className="menu__block">
                <a href="#" className="menu__item menu__link"><i className="menu__img material-icons">video_library</i><span className="menu__text">Library</span></a>
                <a href="#" className="menu__item menu__link"><i className="menu__img material-icons">history</i><span className="menu__text">History</span></a>
                <a href="#" className="menu__item menu__link"><i className="menu__img material-icons">slideshow</i><span className="menu__text">Your videos</span></a>
                <a href="#" className="menu__item menu__link"><i className="menu__img material-icons">watch_later</i><span className="menu__text">Watch later</span></a>
                <a href="#" className="menu__item menu__link"><i className="menu__img material-icons">playlist_play</i><span className="menu__text">My List</span></a>
                <button type="button" className="menu__item"><i className="menu__img material-icons">expand_more</i><span className="menu__text">Show more</span></button>
            </section>
            <section className="menu__block">
                <h3 className="menu__header">SUBSCRIPTIONS</h3>
                <a href="#" className="menu__item menu__link"><img className="menu__img avatar avatar--rounded avatar--sm" src="https://picsum.photos/51" alt="" /><span className="menu__text">Laravel Business</span></a>
                <a href="#" className="menu__item menu__link"><img className="menu__img avatar avatar--rounded avatar--sm" src="https://picsum.photos/49" alt="" /><span className="menu__text">Flux</span></a>
            </section>
            <section className="menu__block">
                <h3 className="menu__header">More From YouTube</h3>
                <a href="#" className="menu__item menu__link"><i className="menu__img fab fa-youtube"></i><span className="menu__text">YouTube Premium</span></a>
                <a href="#" className="menu__item menu__link"><i className="menu__img material-icons">gamepad</i><span className="menu__text">Gaming</span></a>
                <a href="#" className="menu__item menu__link"><i className="menu__img material-icons">wifi_tethering</i><span className="menu__text">Live</span></a>
            </section>
            <section className="menu__block">
                <a href="#" className="menu__item menu__link"><i className="menu__img material-icons">settings</i><span className="menu__text">Settings</span></a>
                <a href="#" className="menu__item menu__link"><i className="menu__img material-icons">flag</i><span className="menu__text">Report history</span></a>
                <a href="#" className="menu__item menu__link"><i className="menu__img material-icons">help</i><span className="menu__text">Help</span></a>
                <a href="#" className="menu__item menu__link"><i className="menu__img material-icons">feedback</i><span className="menu__text">Send feedback</span></a>
            </section>
        </div>
    )
}
