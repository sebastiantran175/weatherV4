import './App.css';
import {useEffect, useState} from "react";
import axios from 'axios';
import config from './config.json'
import {Card, Row, Col, Checkbox, Input, Space} from 'antd'
import "antd/dist/antd.css";


function App() {
    // const [searchInput, setSearchInput] = useState("");
    const [location, setLocation] = useState([{Key: 26216}])
    const [metricSelection, setMetricSelection] = useState(true)
    const [data, setData] = useState({})
    const [liveData, setLiveData] = useState({})
    const {Search} = Input;

    let locationURL = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${config.api_key}&q=Melbourne`

    useEffect(() => {
        let dataURL = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${location[0].Key}?details=false&apikey=${config.api_key}&metric=${metricSelection}`
        axios.get(dataURL).then((response) => {
            setData(response.data)
        })

        let liveURL = `http://dataservice.accuweather.com/currentconditions/v1/${location[0].Key}?details=false&apikey=${config.api_key}&metric=${metricSelection}`
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


            {/*<Space direction="vertical">*/}
            {/*    <Search*/}
            {/*        placeholder="input search text"*/}
            {/*        allowClear*/}
            {/*        enterButton="Search"*/}
            {/*        size="large"*/}
            {/*        onSearch={onSearch}*/}
            {/*    />*/}
            {/*</Space>*/}

            {/*<div>{location[0].LocalizedName ? <p>{location[0].LocalizedName}</p> : null} </div>*/}
            <div>Weather Application </div>
            <Space direction="vertical">
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                />
                <Checkbox onChange={onChange}>Use Imperial Units</Checkbox>
            </Space>
            <>
                <Row>
                    <Col>
                        {/*<div>{location[0].LocalizedName ? <p>{location[0].LocalizedName}</p> : null} </div>*/}
                        {/*<Card size="small" title=  {liveData[0].WeatherIcon ? location[0].LocalizedName : null}  bordered={false} style={{width: 300}}*/}
                        {/*      cover={liveData[0].WeatherIcon?*/}
                        {/*    <img src={`/icon/${liveData[0].WeatherIcon}.svg`}/>*/}
                        {/*</Card>*/}
                    </Col>
                    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                        {/*{liveData[0].WeatherIcon ? <p>{liveData[0].WeatherText}</p> : null}*/}
                        {/*{liveData[0].WeatherIcon ? <p>{liveData[0].LocalObservationDateTime}</p> : null}*/}
                    </Col>
                </Row>
            </>


            <>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={2} sm={4} md={6} lg={8} >
                        <Card size="small" bordered={false} title="Today" style={{width: 150}} cover={data.DailyForecasts ?
                            <img src={`/icon/${data.DailyForecasts[0].Day.Icon}.svg`}/> : null}>
                            {data.DailyForecasts ? <p>{data.DailyForecasts[0].Day.IconPhrase}</p> : null}
                            {data.DailyForecasts ? <p>High {data.DailyForecasts[0].Temperature.Maximum.Value}°{metricSelection? <>C</>:<>F</>}</p> : null}
                            {data.DailyForecasts ? <p>Low {data.DailyForecasts[0].Temperature.Minimum.Value}°{metricSelection? <>C</>:<>F</>}</p> : null}
                        </Card>
                    </Col>
                    <Col xs={2} sm={4} md={6} lg={8} >
                        <Card size="small" bordered={false} title="Tomorrow" style={{width: 150}} cover={data.DailyForecasts ?
                            <img src={`/icon/${data.DailyForecasts[1].Day.Icon}.svg`}/> : null}>
                            {data.DailyForecasts ? <p>{data.DailyForecasts[1].Day.IconPhrase}</p> : null}
                            {data.DailyForecasts ? <p>High {data.DailyForecasts[1].Temperature.Maximum.Value}°{metricSelection? <>C</>:<>F</>}</p> : null}
                            {data.DailyForecasts ? <p>Low {data.DailyForecasts[1].Temperature.Minimum.Value}°{metricSelection? <>C</>:<>F</>}</p> : null}
                        </Card>
                    </Col>
                </Row>
            </>
        </div>
    );
}

export default App;

