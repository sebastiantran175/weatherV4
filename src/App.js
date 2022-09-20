import './App.css';
import {useEffect, useState} from "react";
import axios from 'axios';
import config from './config.json'
import {Card, Row, Col, Checkbox, Input, Space} from 'antd'
import "antd/dist/antd.css";


function App() {
    const [location, setLocation] = useState([{Key: 26216}])
    const [metricSelection, setMetricSelection] = useState(true)
    const [data, setData] = useState({})
    const [liveData, setLiveData] = useState({})
    const {Search} = Input;



    useEffect(() => {
        let dataURL = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${location[0].Key}?details=false&apikey=${config.api_key}&metric=${metricSelection}`
        axios.get(dataURL).then((response) => {
            setData(response.data)
        })

        let liveURL = `http://dataservice.accuweather.com/currentconditions/v1/${location[0].Key}?details=true&apikey=${config.api_key}&metric=${metricSelection}`
        axios.get(liveURL).then((response) => {
            setLiveData(response.data)
        })
    }, [location, metricSelection])


    const onChange = () => {
        setMetricSelection(!metricSelection)
    };

    const onSearch = (value) => {
        let locationURL = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${config.api_key}&q=${value}`
        console.log(value)
        axios.get(locationURL)
            .then((response) => {
                setLocation(response.data)
            })
        console.log(location)


    }

    return (
        <div className="App">
            <div>Weather Application</div>

            <Space direction="vertical" align="start">
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                />
                <Checkbox onChange={onChange}>Use Imperial Units</Checkbox>
            </Space>


            <Row gutter={{xs: 16, sm: 32, md: 48, lg: 64}} align="start">
                <Col align="start">
                    <div
                        className="City">{location[0].LocalizedName ? <>{location[0].LocalizedName}</> : <></>} </div>
                </Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={10} align="start">
                    <div>{liveData[0] ? <div>{liveData[0].LocalObservationDateTime.substring(0, 10)}</div> : <div></div>}</div>
                    <div>{liveData[0] ? <div>{liveData[0].LocalObservationDateTime.substring(11, 16)}</div> : <div></div>}</div>
                    <div>{liveData[0] ? <div>Humidity: {liveData[0].RelativeHumidity}</div> : null}</div>
                    <div>{liveData[0] ? <div>Wind Direction: {liveData[0].Wind.Direction.English}</div> : <div></div>}</div>
                </Col>
            </Row>


            <>
                <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                    <Col >
                        <Card size="small" bordered={false} title="Today" style={{width: 150}}
                              cover={data.DailyForecasts ?
                                  <img src={`/icon/${data.DailyForecasts[0].Day.Icon}.svg`}/> : null}>
                            {data.DailyForecasts ? <div>{data.DailyForecasts[0].Day.IconPhrase}</div> : null}
                            {data.DailyForecasts ?
                                <div>High {data.DailyForecasts[0].Temperature.Maximum.Value}°{metricSelection ? <>C</> : <>F</>}</div> : null}
                            {data.DailyForecasts ?
                                <div>Low {data.DailyForecasts[0].Temperature.Minimum.Value}°{metricSelection ? <>C</> : <>F</>}</div> : null}
                        </Card>
                    </Col>

                    <Col >
                        <Card size="small" bordered={false} title="Tomorrow" style={{width: 150}}
                              cover={data.DailyForecasts ?
                                  <img src={`/icon/${data.DailyForecasts[1].Day.Icon}.svg`}/> : null}>
                            {data.DailyForecasts ? <div>{data.DailyForecasts[1].Day.IconPhrase}</div> : null}
                            {data.DailyForecasts ?
                                <div>High {data.DailyForecasts[1].Temperature.Maximum.Value}°{metricSelection ? <>C</> : <>F</>}</div> : null}
                            {data.DailyForecasts ?
                                <div>Low {data.DailyForecasts[1].Temperature.Minimum.Value}°{metricSelection ? <>C</> : <>F</>}</div> : null}
                        </Card>
                    </Col>

                    <Col>
                        <Card size="small" bordered={false} title={data.DailyForecasts? data.DailyForecasts[2].Date.substring(5,10): ""} style={{width: 150}}
                              cover={data.DailyForecasts ?
                                  <img src={`/icon/${data.DailyForecasts[2].Day.Icon}.svg`}/> : null}>
                            {data.DailyForecasts ? <div>{data.DailyForecasts[2].Day.IconPhrase}</div> : null}
                            {data.DailyForecasts ?
                                <div>High {data.DailyForecasts[2].Temperature.Maximum.Value}°{metricSelection ? <>C</> : <>F</>}</div> : null}
                            {data.DailyForecasts ?
                                <div>Low {data.DailyForecasts[2].Temperature.Minimum.Value}°{metricSelection ? <>C</> : <>F</>}</div> : null}
                        </Card>
                    </Col>

                    <Col>
                        <Card size="small" bordered={false} title={data.DailyForecasts? data.DailyForecasts[3].Date.substring(5,10): ""} style={{width: 150}}
                              cover={data.DailyForecasts ?
                                  <img src={`/icon/${data.DailyForecasts[3].Day.Icon}.svg`}/> : null}>
                            {data.DailyForecasts ? <div>{data.DailyForecasts[3].Day.IconPhrase}</div> : null}
                            {data.DailyForecasts ?
                                <div>High {data.DailyForecasts[3].Temperature.Maximum.Value}°{metricSelection ? <>C</> : <>F</>}</div> : null}
                            {data.DailyForecasts ?
                                <div>Low {data.DailyForecasts[3].Temperature.Minimum.Value}°{metricSelection ? <>C</> : <>F</>}</div> : null}
                        </Card>
                    </Col>

                    <Col >
                        <Card size="small" bordered={false} title={data.DailyForecasts? data.DailyForecasts[4].Date.substring(5,10): ""} style={{width: 150}}
                              cover={data.DailyForecasts ?
                                  <img src={`/icon/${data.DailyForecasts[4].Day.Icon}.svg`}/> : null}>
                            {data.DailyForecasts ? <div>{data.DailyForecasts[4].Day.IconPhrase}</div> : null}
                            {data.DailyForecasts ?
                                <div>High {data.DailyForecasts[4].Temperature.Maximum.Value}°{metricSelection ? <>C</> : <>F</>}</div> : null}
                            {data.DailyForecasts ?
                                <div>Low {data.DailyForecasts[4].Temperature.Minimum.Value}°{metricSelection ? <>C</> : <>F</>}</div> : null}
                        </Card>
                    </Col>
                </Row>
            </>
        </div>
    );
}

export default App;

