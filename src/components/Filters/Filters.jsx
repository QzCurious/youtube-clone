import './filters.scss'
import { useRef, useState, useEffect } from "react";
import { clamp } from '../../js/Utils'

export default function Filters() {
    const [scrollLeft, setScrollLeft] = useState(0)
    // maxOffset should be updated when the size of filters changes
    const [maxOffset, setMaxOffset] = useState(0)
    const $content = useRef(null)

    const updateMaxOffset = () => {
        setMaxOffset($content.current.scrollWidth - $content.current.clientWidth)
    }

    const scroll = (step) => {
        const offset = step * $content.current.clientWidth / 2
        setScrollLeft(prevScrollLeft => clamp(0, prevScrollLeft + offset, maxOffset))
    }

    useEffect(() => {
        updateMaxOffset()
        window.addEventListener('resize', updateMaxOffset)
        return () => window.removeEventListener('resize', updateMaxOffset)
    }, [])


    useEffect(() => {
        $content.current.scrollLeft = scrollLeft
    }, [scrollLeft])

    return (
        <section className="filters">
            { scrollLeft !== 0 ? <Prev onClick={() => scroll(-1)} /> : null}
            <div ref={$content} className="filters__content">
                <button className="filters__text filters__text--active">All</button>
                <button className="filters__text">Git</button>
                <button className="filters__text">Gitflow</button>
                <button className="filters__text">React</button>
                <button className="filters__text">Svelte</button>
                <button className="filters__text">Vue</button>
                <button className="filters__text">Sass/SCSS</button>
                <button className="filters__text">Regex</button>
                <button className="filters__text">Webpack</button>
                <button className="filters__text">RESTful</button>
                <button className="filters__text">OAuth</button>
                <button className="filters__text">Vim</button>
                <button className="filters__text">Tmux</button>
                <button className="filters__text">Markdown</button>
                <button className="filters__text">Postman</button>
                <button className="filters__text">Linux</button>
                <button className="filters__text">Design Pattern</button>
                <button className="filters__text">Docker</button>
                <button className="filters__text">Flask</button>
                <button className="filters__text">Laravel</button>
                <button className="filters__text">Node.js</button>
                <button className="filters__text">JavaScript</button>
                <button className="filters__text">PHP</button>
                <button className="filters__text">Python</button>
                <button className="filters__text">MySQL</button>
                <button className="filters__text">MongoDB</button>
                <button className="filters__text">Redis</button>
            </div>
            { scrollLeft !== maxOffset ? <Next onClick={() => scroll(1)} /> : null}
        </section>
    )
}

function Prev({ onClick }) {
    return (
        <div className="filters__prev-wrapper">
            <button
                className="filters__prev material-icons"
                onClick={onClick}
            >navigate_before</button>
        </div>
    )
}

function Next({ onClick }) {
    return (
        <div className="filters__next-wrapper">
            <button
                className="filters__next material-icons"
                onClick={onClick}
            >navigate_next</button>
        </div>
    )
}