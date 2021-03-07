import VideoCard from './VideoCard'
import './video-card-grid.scss'
import { useRef, useEffect, useState } from 'react'

export default function VideoCardGrid() {
    const grid = useRef<HTMLElement>(null!)
    const [col, setCol] = useState(4)

    function updateColCount() {
        const maxWidth = parseInt(getComputedStyle(grid.current).right)
        const minWidth = parseInt(getComputedStyle(grid.current).left)
        const shouldColInc = grid.current.clientWidth >= maxWidth
        const shouldColDec = grid.current.clientWidth < minWidth

        shouldColInc && setCol(prevCol => prevCol + 1)
        shouldColDec && setCol(prevCol => prevCol - 1)
    }

    useEffect(() => {
        const resizeObserver = new ResizeObserver(updateColCount)
        resizeObserver.observe(grid.current)

        return () => resizeObserver.disconnect()
    }, [])

    useEffect(() => {
        grid.current.style.setProperty('--col', String(col))
        updateColCount()
    }, [col])


    return (
        <section ref={grid} className="video-card-grid">
            <VideoCard></VideoCard>
            <VideoCard></VideoCard>
            <VideoCard></VideoCard>
            <VideoCard></VideoCard>
            <VideoCard></VideoCard>
            <VideoCard></VideoCard>
            <VideoCard></VideoCard>
            <VideoCard></VideoCard>
            <VideoCard></VideoCard>
        </section>
    )
}
