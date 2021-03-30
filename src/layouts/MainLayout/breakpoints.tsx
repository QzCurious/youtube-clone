import { useMedia } from "react-use"

const breakpoints = {
    XL: 1312,
    LG: 792,
    MD: 656,
    SM: 428
}

type Breakpoints = 'XL' | 'LG' | 'MD' | 'SM'

export default function useBreakpoint(breakpoint: Breakpoints) {
    return useMedia(`(min-width: ${breakpoints[breakpoint]}px)`)
}