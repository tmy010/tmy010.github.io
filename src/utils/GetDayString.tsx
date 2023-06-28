export const getTopString = (diffInDay: number): string => {
    if (diffInDay == 0) return 'Today'
    else if (diffInDay == 1) return 'Tomorrow'
    else if (diffInDay == -1) return 'Yesterday'
    else return Math.abs(diffInDay).toString()
}

export const getMiddleString = (days: number): string => {
    if (days == 0) return 'is'
    else if (days == -1) return 'is'
    else if (days == 1) return 'is'
    else if (days > 0) return 'days until'
    else if (days < 0) return 'days since'
    else return 'days'
}
