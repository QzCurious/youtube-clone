import './filters.scss'
import { useRef, useState, useEffect } from "react";
import { clamp } from '../../js/Utils'
import classNames from 'classnames'

const api_data = [
    { text: "All", active: true },
    { text: "Git", active: false },
    { text: "Gitflow", active: false },
    { text: "React", active: false },
    { text: "Svelte", active: false },
    { text: "Vue", active: false },
    { text: "Sass/SCSS", active: false },
    { text: "Regex", active: false },
    { text: "Webpack", active: false },
    { text: "RESTful", active: false },
    { text: "OAuth", active: false },
    { text: "Vim", active: false },
    { text: "Tmux", active: false },
    { text: "Markdown", active: false },
    { text: "Postman", active: false },
    { text: "Linux", active: false },
    { text: "Design Pattern", active: false },
    { text: "Docker", active: false },
    { text: "Flask", active: false },
    { text: "Laravel", active: false },
    { text: "Node.js", active: false },
    { text: "JavaScript", active: false },
    { text: "PHP", active: false },
    { text: "Python", active: false },
    { text: "MySQL", active: false },
    { text: "MongoDB", active: false },
    { text: "Redis", active: false },
]

export default function Filters() {
    const [data, setData] = useState([])
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

    const avtivateFilter = (text) => {
        setData(data.map(data => ({
            ...data,
            active: data.text === text
        })))
    }

    useEffect(() => {
        setData(api_data)
        window.addEventListener('resize', updateMaxOffset)
        return () => window.removeEventListener('resize', updateMaxOffset)
    }, [])


    useEffect(() => {
        $content.current.scrollLeft = scrollLeft
    }, [scrollLeft])

    useEffect(() => {
        // Filters is once empty as it mounted.
        // Each filter is then filled in after `data` updated.
        updateMaxOffset()
    }, [data])

    return (
        <section className="filters">
            { scrollLeft !== 0 ? <Prev onClick={() => scroll(-1)} /> : null}
            <div ref={$content} className="filters__content">
                {data.map(({ active, text }) => {
                    return <Filter {...{ key: text, active, text }} onClick={avtivateFilter} />
                })}
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

function Filter(props) {
    const { active, text, onClick } = props
    return (
        <button
            className={classNames('filters__text', { 'filters__text--active': active })}
            onClick={() => onClick(text)}
        >{text}</button>
    )
}
