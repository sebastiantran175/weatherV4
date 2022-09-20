import './App.css';
import {useEffect, useState} from "react";
import axios from 'axios';
import config from './config.json'
import {
  Card,
  Table,
  Pagination,
  Row,
  Col,
  Divider,
  Checkbox,
    Input, Space
} from 'antd'
import "antd/dist/antd.css";



function App() {
  const [searchInput, setSearchInput] = useState("");
  const [location, setLocation] = useState([{Key:353412}])
  const [metricSelection, setMetricSelection] = useState(true)
  const [data, setData] = useState({})
  const { Search } = Input;


  // let locationURL = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${config.api_key}&q=${searchInput}`
  let locationURL = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${config.api_key}&q=Sydney`

  useEffect(() => {
    console.log(data)
    let dataURL = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${location[0].Key}?details=false&apikey=${config.api_key}&metric=${metricSelection}`
    axios.get(dataURL).then((response) => {
      setData(response.data)
    })
  }
  ,[location]
  )

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(location)
  //   console.log(data)
  //   axios.get(locationURL)
  //       .then((response) => {
  //     setLocation(response.data)})
  // console.log(location)
  // }

  // const printStatus = () => {
  //   console.log(location)
  //   let dataURL = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${location[0].Key}?details=false&apikey=${config.api_key}&metric=${metricSelection}`
  //   axios.get(dataURL).then((response) => {
  //     setData(response.data)
  //   })
  // }

  const onChange = (e) => {
    setMetricSelection(!metricSelection)
  };

  const onSearch = (value) => {
    let locationURL = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${config.api_key}&q=${value}`
    console.log(value)
    axios.get(locationURL)
        .then((response) => {
          setLocation(response.data)})
    console.log(location)
  }

  return (
      <div className="App">


        {/*<form onSubmit={handleSubmit}>*/}
        {/*  <label>Location Search:*/}
        {/*    <input*/}
        {/*        type="text"*/}
        {/*        value={searchInput}*/}
        {/*        onChange={(e) => setSearchInput(e.target.value)}*/}
        {/*    />*/}
        {/*  </label>*/}
        {/*  <input/>*/}
        {/*</form>*/}

        <Space direction="vertical">
        <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
        />
        </Space>

        <div>{location[0].LocalizedName? <p>{location[0].LocalizedName}</p> :null} </div>

        <h4>Weather Forecast</h4>
        <Checkbox onChange={onChange}>Use Imperial Units</Checkbox>
        <>
          <Row>
            <Col span={3}>
              <Card hoverable title="Today" style={{ width: 240 }} cover={data.DailyForecasts? <img src={`/icon/${data.DailyForecasts[0].Day.Icon}.svg`}/> :null }>
                {data.DailyForecasts? <p>{data.DailyForecasts[0].Day.IconPhrase}</p> :null}
                {data.DailyForecasts? <p>High {data.DailyForecasts[0].Temperature.Maximum.Value} C</p> :null}
                {data.DailyForecasts? <p>Low {data.DailyForecasts[0].Temperature.Minimum.Value} C</p> :null}
              </Card>
            </Col>
            <Col span={3}>
              <Card hoverable title="Tomorrow" style={{ width: 240 }} cover={data.DailyForecasts? <img src={`/icon/${data.DailyForecasts[1].Day.Icon}.svg`}/> :null } >
                {/*<Card hoverable title="Tomorrow" style={{ width: 240 }} cover={<img src='/icon/6.svg' />}>*/}
                {data.DailyForecasts? <p>{data.DailyForecasts[1].Day.IconPhrase}</p> :null}
                {data.DailyForecasts? <p>High {data.DailyForecasts[1].Temperature.Maximum.Value} C</p> :null}
                {data.DailyForecasts? <p>Low {data.DailyForecasts[1].Temperature.Minimum.Value} C</p> :null}
              </Card>
            </Col>
          </Row>
        </>
      </div>
  );
}

export default App;

