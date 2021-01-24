import './keywords.scss'
import { useRef, useState, useEffect } from "react";
import { clamp } from '../../js/Utils'

export default function Keywords() {
    const [scrollLeft, setScrollLeft] = useState(0)
    const $content = useRef(null)

    const scroll = (step) => {
        const offset = step * $content.current.clientWidth / 2
        const maxOffset = $content.current.scrollWidth - $content.current.clientWidth
        setScrollLeft(prevScrollLeft => clamp(0, prevScrollLeft + offset, maxOffset))
    }

    useEffect(() => {
        $content.current.scrollLeft = scrollLeft
    }, [scrollLeft])

    return (
        <section className="keywords">
            <Prev onClick={() => scroll(-1)} />
            <div ref={$content} className="keywords__content">
                <a href="#" className="keywords__text keywords__text--active">All</a>
                <a href="#" className="keywords__text">Git</a>
                <a href="#" className="keywords__text">Gitflow</a>
                <a href="#" className="keywords__text">React</a>
                <a href="#" className="keywords__text">Svelte</a>
                <a href="#" className="keywords__text">Vue</a>
                <a href="#" className="keywords__text">Sass/SCSS</a>
                <a href="#" className="keywords__text">Regex</a>
                <a href="#" className="keywords__text">Webpack</a>
                <a href="#" className="keywords__text">RESTful</a>
                <a href="#" className="keywords__text">OAuth</a>
                <a href="#" className="keywords__text">Vim</a>
                <a href="#" className="keywords__text">Tmux</a>
                <a href="#" className="keywords__text">Markdown</a>
                <a href="#" className="keywords__text">Postman</a>
                <a href="#" className="keywords__text">Linux</a>
                <a href="#" className="keywords__text">Design Pattern</a>
                <a href="#" className="keywords__text">Docker</a>
                <a href="#" className="keywords__text">Flask</a>
                <a href="#" className="keywords__text">Laravel</a>
                <a href="#" className="keywords__text">Node.js</a>
                <a href="#" className="keywords__text">JavaScript</a>
                <a href="#" className="keywords__text">PHP</a>
                <a href="#" className="keywords__text">Python</a>
                <a href="#" className="keywords__text">MySQL</a>
                <a href="#" className="keywords__text">MongoDB</a>
                <a href="#" className="keywords__text">Redis</a>
            </div>
            <Next onClick={() => scroll(1)} />
        </section>
    )
}

function Prev({ onClick }) {
    return (
        <div className="keywords__prev-wrapper">
            <button
                className="keywords__prev material-icons"
                onClick={onClick}
            >navigate_before</button>
        </div>
    )
}

function Next({ onClick }) {
    return (
        <div className="keywords__next-wrapper">
            <button
                className="keywords__next material-icons"
                onClick={onClick}
            >navigate_next</button>
        </div>
    )
}