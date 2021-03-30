import { useEffect } from 'react'
import { useToggle } from 'react-use'
import Filters from '../../components/Filter/Filters'
import Menu from '../../components/Menu/Menu'
import FloatingMenu from '../../components/Menu/FloatingMenu'
import CompactMenu from '../../components/CompactMenu/CompactMenu'
import Topbar from '../../components/Topbar/Topbar'
import VideoCardGrid from '../../components/VideoCard/VideoCardGrid'
import useBreakpoint from './breakpoints'
import './main-layout.scss'

export default function MainLayout() {
    const XL = useBreakpoint('XL')
    const LG = useBreakpoint('LG')

    const [isCompactMenu, toggleIsCompactMenu] = useToggle(false)
    const [isFloatingMenu, toggleIsFloatingMenu] = useToggle(false)

    useEffect(() => {
        toggleIsCompactMenu(!XL)
        toggleIsFloatingMenu(false)
    }, [XL, toggleIsCompactMenu, toggleIsFloatingMenu])

    return (
        <div className="main-layout">
            <section className="main-layout__topbar">
                <Topbar onMenuToggleClick={XL ? toggleIsCompactMenu : toggleIsFloatingMenu} />
            </section>
            <nav className="main-layout__menu">
                <div className="h-full overflow-hidden hover:overflow-y-auto">
                    {XL && (isCompactMenu ? <CompactMenu /> : <Menu />)}
                    {LG && !XL && <CompactMenu />}
                </div>
            </nav>
            <section className="main-layout__filters">
                <Filters></Filters>
            </section>
            <main className="main-layout__main">
                <VideoCardGrid></VideoCardGrid>
            </main>
            {!XL && <FloatingMenu show={isFloatingMenu} onMenuToggleClick={toggleIsFloatingMenu} />}
        </div>
    )
}
