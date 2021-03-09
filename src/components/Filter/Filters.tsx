import { useRef, useState, useEffect } from "react";
import Filter from './Filter'
import { clamp } from '../../js/Utils'
import classNames from "classnames";

interface T_Filter {
    text: string,
    active?: boolean,
}

const api_data: T_Filter[] = [
    { text: "Git" },
    { text: "Gitflow" },
    { text: "React" },
    { text: "Svelte" },
    { text: "Vue" },
    { text: "Sass/SCSS" },
    { text: "Regex" },
    { text: "Webpack" },
    { text: "RESTful" },
    { text: "OAuth" },
    { text: "Vim" },
    { text: "Tmux" },
    { text: "Markdown" },
    { text: "Postman" },
    { text: "Linux" },
    { text: "Design Pattern" },
    { text: "Docker" },
    { text: "Flask" },
    { text: "Laravel" },
    { text: "Node.js" },
    { text: "JavaScript" },
    { text: "PHP" },
    { text: "Python" },
    { text: "MySQL" },
    { text: "MongoDB" },
    { text: "Redis" },
]

export default function Filters() {
    const [data, setData] = useState<T_Filter[]>([{ text: "All", active: true }])
    const [scrollLeft, setScrollLeft] = useState(0)
    // maxOffset should be updated when the size of filters changes
    const [maxOffset, setMaxOffset] = useState(0)
    const content = useRef<HTMLDivElement>(null!)

    const updateMaxOffset = () => {
        setMaxOffset(content.current.scrollWidth - content.current.clientWidth)
    }

    const scroll = (step: number) => {
        const offset = step * content.current.clientWidth / 2
        setScrollLeft(prevScrollLeft => clamp(0, prevScrollLeft + offset, maxOffset))
    }

    const avtivateFilter = (text: string) => {
        setData(data.map(data => ({
            ...data,
            active: data.text === text
        })))
    }

    useEffect(() => {
        setData(prevData => ([...prevData, ...api_data]))
        window.addEventListener('resize', updateMaxOffset)
        return () => window.removeEventListener('resize', updateMaxOffset)
    }, [])


    useEffect(() => {
        content.current.scrollLeft = scrollLeft
    }, [scrollLeft])

    useEffect(() => {
        // Filters is once empty as it mounted.
        // Each filter is then filled in after `data` updated.
        updateMaxOffset()
    }, [data])

    return (
        <section className="relative bg-white flex items-center h-14 px-4 border-t border-b border-solid">
            { scrollLeft !== 0 ? <Prev onClick={() => scroll(-1)} /> : null}
            <div ref={content} className="flex flex-nowrap overflow-x-hidden" style={{ scrollBehavior: 'smooth' }}>
                {data.map(({ text, active }) => {
                    return <Filter key={text} text={text} onClick={avtivateFilter} active={active} />
                })}
            </div>
            { scrollLeft !== maxOffset ? <Next onClick={() => scroll(1)} /> : null}
        </section>
    )
}

function Prev({ onClick }: { onClick: () => void }) {
    return (
        <div className="h-full absolute left-0 flex items-center">
            <div className="h-full w-14 bg-white flex items-center justify-center">
                <button
                    className={classNames(
                        "material-icons",
                        "rounded-full text-base w-8 h-8",
                        "active:bg-gray-300 transition-colors"
                    )}
                    onClick={onClick}
                >navigate_before</button>
            </div>
            <div className="w-12 h-full bg-gradient-to-l from-transparent to-white"></div>
        </div>
    )
}

function Next({ onClick }: { onClick: () => void }) {
    return (
        <div className="h-full absolute right-0 flex items-center">
            <div className="w-12 h-full bg-gradient-to-r from-transparent to-white"></div>
            <div className="h-full w-14 bg-white flex items-center justify-center">
                <button
                    className={classNames(
                        "material-icons",
                        "rounded-full text-base w-8 h-8",
                        "active:bg-gray-300 transition-colors"
                    )}
                    onClick={onClick}
                >navigate_next</button>
            </div>
        </div>
    )
}
