import React from 'react'
import './video-card.scss'

export default function index() {
    return (
        <article className="video-card">
            <a href="#">
                <img className="video-card__thumbnail" src="https://picsum.photos/360/200" />
            </a>
            <div className="video-card__info">
                <a href="#" className="video-card__avatar">
                    <img className="avatar avatar--rounded" src="https://picsum.photos/50" alt="Channel Name" />
                </a>
                <div>
                    <h3 className="video-card__title">Lorem ipsum dolor sit Lorem ipsum dolor sit amet,</h3>
                    <a href="#" className="video-card__channel">Channel Name</a>
                    <div>
                        <span className="video-card__views">14K views</span>
                        <span className="video-card__publish-time">2 months ago</span>
                    </div>
                </div>
            </div>
        </article>
    )
}
