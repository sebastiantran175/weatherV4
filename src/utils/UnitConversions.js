
const convertDict = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec"
}

// Convert between month-date in API format to user-friendly version
const convertDate = (monthDate) => convertDict[monthDate.substring(0, 2)] + monthDate.substring(2, 5)


// Return temperature formatted, convert °C to °F if needed
const displayTemp = (degC, metricSelection) => {
    if (metricSelection)
        return `${degC.toFixed(0)}°C`
    else
        return `${(degC*9/5 +32).toFixed(0)}°F`
}

export {
    convertDate, displayTemp
}