// Convert between month-date in API format to user-friendly version
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
const convertDate = (monthDate) => convertDict[monthDate.substring(0, 2)] + monthDate.substring(2, 5)

// const handleTitle = (index) => {
//     if (index === 0)
//         return 'Today'
//
//     if (index ===1)
//         return 'Tomorrow'
//
//     return data.DailyForecasts? data.convertDate(item.Date.substring(5, 10)) : ""
//
// }

export {
    convertDate
}