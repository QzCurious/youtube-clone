export function clamp(min, num, max) {
    return min > num ? min : num > max ? max : num
}