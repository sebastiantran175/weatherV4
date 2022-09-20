import {useEffect, useState} from "react";
import axios from 'axios';
import config from '../config.json'
import {Card, Row, Col, Checkbox, Input, Space,  Radio } from 'antd'
import "antd/dist/antd.css";
import "./WeatherWidget.css"

function WeatherWidget() {
    const [location, setLocation] = useState([{Key: 26216}])
    const [metricSelection, setMetricSelection] = useState(true)
    const [data, setData] = useState({})
    const [liveData, setLiveData] = useState({})
    const {Search} = Input;


    useEffect(() => {
        let dataURL = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${location[0].Key}?details=false&apikey=${config.api_key}&metric=${metricSelection}`
        axios.get(dataURL)
            .then((response) => {
                setData(response.data)
            }).catch((error) => {
            console.log(error.toJSON)
        })

        let liveURL = `http://dataservice.accuweather.com/currentconditions/v1/${location[0].Key}?details=true&apikey=${config.api_key}&metric=${metricSelection}`
        axios.get(liveURL).then((response) => {
            setLiveData(response.data)
        }).catch((error) => {
            console.log(error.toJSON)
        })
    }, [location, metricSelection])


    // const onChange = () => {
    //     setMetricSelection(!metricSelection)
    // };

    const onSearch = (value) => {
        let locationURL = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${config.api_key}&q=${value}`
        axios.get(locationURL)
            .then((response) => {
                setLocation(response.data)
            }).catch((error) => {
            console.log(error.toJSON)
        })
    }

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
                {/*<Checkbox onChange={onChange}>Use Imperial Units</Checkbox>*/}

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
                    <p>{liveData[0] ? <p>{liveData[0].LocalObservationDateTime.substring(0, 10)}</p> :
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
                        <Card size="small" bordered={false} title="Today" style={{width: 150}}
                              cover={data.DailyForecasts ?
                                  <img src={`/icon/${data.DailyForecasts[0].Day.Icon}.svg`}  alt="Weather that day"/> : null}>
                            {data.DailyForecasts ? <p>{data.DailyForecasts[0].Day.IconPhrase}</p> : null}
                            {data.DailyForecasts ?
                                <p>High {data.DailyForecasts[0].Temperature.Maximum.Value}°{metricSelection ? <>C</> : <>F</>}</p> : null}
                            {data.DailyForecasts ?
                                <p>Low {data.DailyForecasts[0].Temperature.Minimum.Value}°{metricSelection ? <>C</> : <>F</>}</p> : null}
                        </Card>
                    </Col>

                    <Col>
                        <Card size="small" bordered={false} title="Tomorrow" style={{width: 150}}
                              cover={data.DailyForecasts ?
                                  <img src={`/icon/${data.DailyForecasts[1].Day.Icon}.svg`}  alt="Weather that day"/> : null}>
                            {data.DailyForecasts ? <p>{data.DailyForecasts[1].Day.IconPhrase}</p> : null}
                            {data.DailyForecasts ?
                                <p>High {data.DailyForecasts[1].Temperature.Maximum.Value}°{metricSelection ? <>C</> : <>F</>}</p> : null}
                            {data.DailyForecasts ?
                                <p>Low {data.DailyForecasts[1].Temperature.Minimum.Value}°{metricSelection ? <>C</> : <>F</>}</p> : null}
                        </Card>
                    </Col>

                    <Col>
                        <Card size="small" bordered={false}
                              title={data.DailyForecasts ? data.DailyForecasts[2].Date.substring(5, 10) : ""}
                              style={{width: 150}}
                              cover={data.DailyForecasts ?
                                  <img src={`/icon/${data.DailyForecasts[2].Day.Icon}.svg`} alt="Weather that day"/> : null}>
                            {data.DailyForecasts ? <p>{data.DailyForecasts[2].Day.IconPhrase}</p> : null}
                            {data.DailyForecasts ?
                                <p>High {data.DailyForecasts[2].Temperature.Maximum.Value}°{metricSelection ? <>C</> : <>F</>}</p> : null}
                            {data.DailyForecasts ?
                                <p>Low {data.DailyForecasts[2].Temperature.Minimum.Value}°{metricSelection ? <>C</> : <>F</>}</p> : null}
                        </Card>
                    </Col>

                    <Col>
                        <Card size="small" bordered={false}
                              title={data.DailyForecasts ? data.DailyForecasts[3].Date.substring(5, 10) : ""}
                              style={{width: 150}}
                              cover={data.DailyForecasts ?
                                  <img src={`/icon/${data.DailyForecasts[3].Day.Icon}.svg`} alt="Weather that day"/> : null}>
                            {data.DailyForecasts ? <p>{data.DailyForecasts[3].Day.IconPhrase}</p> : null}
                            {data.DailyForecasts ?
                                <p>High {data.DailyForecasts[3].Temperature.Maximum.Value}°{metricSelection ? <>C</> : <>F</>}</p> : null}
                            {data.DailyForecasts ?
                                <p>Low {data.DailyForecasts[3].Temperature.Minimum.Value}°{metricSelection ? <>C</> : <>F</>}</p> : null}
                        </Card>
                    </Col>

                    <Col>
                        <Card size="small" bordered={false}
                              title={data.DailyForecasts ? data.DailyForecasts[4].Date.substring(5, 10) : ""}
                              style={{width: 150}}
                              cover={data.DailyForecasts ?
                                  <img src={`/icon/${data.DailyForecasts[4].Day.Icon}.svg`} alt="Weather that day"/> : null}>
                            {data.DailyForecasts ? <p>{data.DailyForecasts[4].Day.IconPhrase}</p> : null}
                            {data.DailyForecasts ?
                                <p>High {data.DailyForecasts[4].Temperature.Maximum.Value}°{metricSelection ? <>C</> : <>F</>}</p> : null}
                            {data.DailyForecasts ?
                                <p>Low {data.DailyForecasts[4].Temperature.Minimum.Value}°{metricSelection ? <>C</> : <>F</>}</p> : null}
                        </Card>
                    </Col>
                </Row>
            </>
        </div>
    );
}

export default WeatherWidget;

