export const findDifferentInDay = (startMs: number, endMs: number): number => {
    var days = (startMs - endMs) / 1000 / 60 / 60 / 24
    return Math.floor(days)
}
