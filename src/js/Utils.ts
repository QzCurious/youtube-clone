export function clamp(min: number, num: number, max: number): number {
    return min > num ? min : num > max ? max : num
}