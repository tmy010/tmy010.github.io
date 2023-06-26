export const findDifferentInDay = (startMs: number, endMs: number): number => {
    var days = (startMs - endMs) / 1000 / 60 / 60 / 24
    if(days > 0)
        return Math.floor(days)
    else
        return Math.ceil(days)
}
