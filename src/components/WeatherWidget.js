import {useEffect, useState} from "react";
import axios from 'axios';

import {Card, Row, Col, Input, Space, Radio} from 'antd'
import "antd/dist/antd.css";
import "./WeatherWidget.css"

// Each keys in this configuration file is good for 50 calls/ day due to the app being built with free AccuWeather API free tier.
// Please change the API key to other keys if the page is not refreshing
import config from '../config.json'


function WeatherWidget() {
    const [location, setLocation] = useState([{Key: 26216}])
    const [metricSelection, setMetricSelection] = useState(true)
    const [data, setData] = useState({})
    const [liveData, setLiveData] = useState({})
    const {Search} = Input;


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
    const convertDate = ((monthDate) => {
        return convertDict[monthDate.substring(0, 2)] + monthDate.substring(2, 5)
    })


    // Refresh the render where there is a change in input
    useEffect(() => {

        // Getting 5 days forecasted data
        let dataURL = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${location[0].Key}?details=false&apikey=${config.api_key}&metric=${metricSelection}`
        axios.get(dataURL)
            .then((response) => {
                setData(response.data)
            }).catch((error) => {
            console.log(error.toJSON)
        })

        // Getting live data
        let liveURL = `http://dataservice.accuweather.com/currentconditions/v1/${location[0].Key}?details=true&apikey=${config.api_key}&metric=${metricSelection}`
        axios.get(liveURL).then((response) => {
            setLiveData(response.data)
        }).catch((error) => {
            console.log(error.toJSON)
        })
    }, [location, metricSelection])


    // Getting user input, return the most closely-matched version of city name
    const onSearch = (value) => {
        let locationURL = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${config.api_key}&q=${value}`
        axios.get(locationURL)
            .then((response) => {
                setLocation(response.data)
            }).catch((error) => {
            console.log(error.toJSON)
        })
    }

    // Change Metric/ Imperial Unit Selection
    const onChangeRadio = (e) => {
        setMetricSelection(e.target.value);
    };


    return (
        <div className="WeatherWidget">
            <Space direction="vertical" align="start">
                <Search
                    placeholder="Location"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                />

                <Radio.Group onChange={onChangeRadio} value={metricSelection}>
                    <Radio value={true}><p className="Selection">°C</p></Radio>
                    <Radio value={false}><p className="Selection">°F</p></Radio>
                </Radio.Group>

            </Space>


            <Row gutter={{xs: 16, sm: 32, md: 48, lg: 64}} align="start">
                <Col align="start">
                    <p
                        className="City">{location[0].LocalizedName ? <>{location[0].LocalizedName}</> : <>Melbourne</>} </p>
                </Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={10} align="start">
                    <p>{liveData[0] ?
                        <p>{liveData[0].LocalObservationDateTime.substring(0, 5) + convertDate(liveData[0].LocalObservationDateTime.substring(5, 10))}</p> :
                        <p></p>}</p>
                    <p>{liveData[0] ? <p>{liveData[0].LocalObservationDateTime.substring(11, 16)}</p> :
                        <p></p>}</p>
                    <p>{liveData[0] ? <p>Humidity: {liveData[0].RelativeHumidity}</p> : null}</p>
                    <p>{liveData[0] ? <p>Wind Direction: {liveData[0].Wind.Direction.English}</p> :
                        <p></p>}</p>
                </Col>
            </Row>


            <>
                <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                    <Col>
                        <Card size="small" bordered={false} title={data.DailyForecasts ? "Today" : ""}
                              style={{width: 150}}
                              cover={data.DailyForecasts ?
                                  <img src={`/icon/${data.DailyForecasts[0].Day.Icon}.svg`}
                                       alt="Weather that day"/> : null}>

                            {data.DailyForecasts ? <p>{data.DailyForecasts[0].Day.IconPhrase}</p> : null}
                            {data.DailyForecasts ? <p>High {data.DailyForecasts[0].Temperature.Maximum.Value}°{metricSelection ? <>C</> : <>F</>}</p> : null}
                            {data.DailyForecasts ? <p>Low {data.DailyForecasts[0].Temperature.Minimum.Value}°{metricSelection ? <>C</> : <>F</>}</p> : null}
                        </Card>
                    </Col>

                    <Col>
                        <Card size="small" bordered={false} title={data.DailyForecasts ? "Tomorrow" : ""}
                              style={{width: 150}}
                              cover={data.DailyForecasts ?
                                  <img src={`/icon/${data.DailyForecasts[1].Day.Icon}.svg`}
                                       alt="Weather that day"/> : null}>

                            {data.DailyForecasts ? <p>{data.DailyForecasts[1].Day.IconPhrase}</p> : null}
                            {data.DailyForecasts ? <p>High {data.DailyForecasts[1].Temperature.Maximum.Value}°{metricSelection ? <>C</> : <>F</>}</p> : null}
                            {data.DailyForecasts ? <p>Low {data.DailyForecasts[1].Temperature.Minimum.Value}°{metricSelection ? <>C</> : <>F</>}</p> : null}
                        </Card>
                    </Col>

                    <Col>
                        <Card size="small" bordered={false}
                              title={data.DailyForecasts ? convertDate(data.DailyForecasts[2].Date.substring(5, 10)) : ""}
                              style={{width: 150}}
                              cover={data.DailyForecasts ?
                                  <img src={`/icon/${data.DailyForecasts[2].Day.Icon}.svg`}
                                       alt="Weather that day"/> : null}>

                            {data.DailyForecasts ? <p>{data.DailyForecasts[2].Day.IconPhrase}</p> : null}
                            {data.DailyForecasts ? <p>High {data.DailyForecasts[2].Temperature.Maximum.Value}°{metricSelection ? <>C</> : <>F</>}</p> : null}
                            {data.DailyForecasts ? <p>Low {data.DailyForecasts[2].Temperature.Minimum.Value}°{metricSelection ? <>C</> : <>F</>}</p> : null}
                        </Card>
                    </Col>

                    <Col>
                        <Card size="small" bordered={false}
                              title={data.DailyForecasts ? convertDate(data.DailyForecasts[3].Date.substring(5, 10)) : ""}
                              style={{width: 150}}
                              cover={data.DailyForecasts ?
                                  <img src={`/icon/${data.DailyForecasts[3].Day.Icon}.svg`}
                                       alt="Weather that day"/> : null}>

                            {data.DailyForecasts ? <p>{data.DailyForecasts[3].Day.IconPhrase}</p> : null}
                            {data.DailyForecasts ? <p>High {data.DailyForecasts[3].Temperature.Maximum.Value}°{metricSelection ? <>C</> : <>F</>}</p> : null}
                            {data.DailyForecasts ? <p>Low {data.DailyForecasts[3].Temperature.Minimum.Value}°{metricSelection ? <>C</> : <>F</>}</p> : null}
                        </Card>
                    </Col>

                    <Col>
                        <Card size="small" bordered={false}
                              title={data.DailyForecasts ? convertDate(data.DailyForecasts[4].Date.substring(5, 10)) : ""}
                              style={{width: 150}}
                              cover={data.DailyForecasts ?
                                  <img src={`/icon/${data.DailyForecasts[4].Day.Icon}.svg`}
                                       alt="Weather that day"/> : null}>

                            {data.DailyForecasts ? <p>{data.DailyForecasts[4].Day.IconPhrase}</p> : null}
                            {data.DailyForecasts ? <p>High {data.DailyForecasts[4].Temperature.Maximum.Value}°{metricSelection ? <>C</> : <>F</>}</p> : null}
                            {data.DailyForecasts ? <p>Low {data.DailyForecasts[4].Temperature.Minimum.Value}°{metricSelection ? <>C</> : <>F</>}</p> : null}
                        </Card>
                    </Col>
                </Row>
            </>
        </div>
    );
}

export default WeatherWidget;

