// Each keys in this configuration file is good for 50 calls/ day due to the app being built with free AccuWeather API free tier.
// Please change the API key to other keys if the page is not refreshing

import config from '../config.json'
import axios from "axios";

const getClosestLocation = (value) =>
    axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${config.api_key}&q=${value}`)

const get5daysData = (locationID) =>
    axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationID}?details=false&apikey=${config.api_key}&metric=true`)

const getLiveData = (locationID) =>
    axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationID}?details=true&apikey=${config.api_key}&metric=true$`)



export {
    getClosestLocation,
    get5daysData,
    getLiveData
}