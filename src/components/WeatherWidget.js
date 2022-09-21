import {useEffect, useState} from "react";

import {Card, Row, Col, Input, Space, Radio} from 'antd'
import "antd/dist/antd.css";
import "./WeatherWidget.css"

import {getClosestLocation, get5daysData, getLiveData} from "../utils/request";
import {convertDate} from "../utils/dateConversion";


function WeatherWidget() {
    const [location, setLocation] = useState([{Key: 26216}])
    const [metricSelection, setMetricSelection] = useState(true)
    const [data, setData] = useState({})
    const [liveData, setLiveData] = useState({})
    const {Search} = Input;


    const fetch5DaysData = async () => {
        try {
            const res = await get5daysData(location[0].Key, metricSelection);
            setData(res.data)
        } catch (error) {
            console.log(error)
        }
    }


    const fetchLiveData = async () => {
        try {
            const res = await getLiveData(location[0].Key, metricSelection);
            setLiveData(res.data)
        } catch (error) {
            console.log(error)
        }
    }


    // Refresh the render where there is a change in input
    useEffect(() => {
        fetch5DaysData().catch(console.error)
        fetchLiveData().catch(console.error)
    }, [location, metricSelection])


    // Getting user input, return the most closely-matched version of city name
    const onSearch = (value) => {
        try {
            getClosestLocation(value).then((response) => {
                if (response.data  && response.data.length > 0)
                    setLocation(response.data)
            })
        } catch (error) {
            console.log(error)
        }
    }


    // Change Metric/ Imperial Unit Selection
    const onChangeRadio = (e) => {
        setMetricSelection(e.target.value);
    };


    // Help handling the first 2 days differently compared to other days
    const handleTitle = (index) => {
        if (index === 0)
            return 'Today'
        if (index ===1)
            return 'Tomorrow'
        return data.DailyForecasts[index].Date? convertDate(data.DailyForecasts[index].Date.substring(5, 10)) : "Date"
    }


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
                <Col span={10} align="start">
                    {liveData[0] ?
                        <div>
                        <p>{liveData[0].LocalObservationDateTime.substring(0, 5) + convertDate(liveData[0].LocalObservationDateTime.substring(5, 10))}</p>
                        <p>{liveData[0].LocalObservationDateTime.substring(11, 16)}</p>
                        <p>Humidity: {liveData[0].RelativeHumidity}</p>
                        <p>Wind Direction: {liveData[0].Wind.Direction.English}</p>
                        </div>
                        :<p></p>}

                </Col>
            </Row>


            <>
                <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                    {data.DailyForecasts ? data.DailyForecasts.map((item, i) => (
                        <Col key={i}>
                            <Card size="small" bordered={false}
                                  title={handleTitle(i)}
                                  style={{width: 150}}
                                  cover={<img src={`/icon/${item.Day.Icon}.svg`} alt="Weather that day"/>}>

                                <p>{item.Day.IconPhrase}</p>
                                <p>High {item.Temperature.Maximum.Value}°{metricSelection ? <>C</> : <>F</>}</p>
                                <p>Low {item.Temperature.Minimum.Value}°{metricSelection ? <>C</> : <>F</>}</p>
                            </Card>
                        </Col>
                    )) : <p></p>}
                </Row>
            </>
        </div>
    );
}

export default WeatherWidget;

