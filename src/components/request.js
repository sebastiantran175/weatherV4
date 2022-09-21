import config from '../config.json'
import axios from "axios";

const getClosestLocation = async (value) => {
    let res = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${config.api_key}&q=${value}`, {
        method: 'GET',
    })
    return res.json()
}

const get5daysData = (loccationID, metricSelection) =>
    axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${loccationID}?details=false&apikey=${config.api_key}&metric=${metricSelection}`)

const getLiveData = (loccationID, metricSelection) =>
    axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${loccationID}?details=true&apikey=${config.api_key}&metric=${metricSelection}`)



export {
    getClosestLocation,
    get5daysData,
    getLiveData
}