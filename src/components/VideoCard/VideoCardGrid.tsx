import VideoCard from './VideoCard'
import './video-card-grid.scss'
import { useRef, useEffect } from 'react'

export default function VideoCardGrid() {
    const grid = useRef<HTMLElement>(null!)

    function updateColCount() {
        const col = Number(getComputedStyle(grid.current).getPropertyValue('--col'))
        const maxWidth = parseInt(getComputedStyle(grid.current).right)
        const minWidth = parseInt(getComputedStyle(grid.current).left)
        const shouldColInc = grid.current.clientWidth >= maxWidth
        const shouldColDec = grid.current.clientWidth < minWidth

        if (shouldColInc) {
            grid.current.style.setProperty('--col', String(col + 1))
        }

        if (shouldColDec) {
            grid.current.style.setProperty('--col', String(col - 1))
        }
    }

    useEffect(() => {
        updateColCount()
        const resizeObserver = new ResizeObserver(updateColCount)
        resizeObserver.observe(grid.current)

        return () => resizeObserver.disconnect()
    }, [])


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
