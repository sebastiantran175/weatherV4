import './App.css';
import {useState} from "react";
import axios from 'axios';
import config from './config.json'
import {
  Card,
  Table,
  Pagination,
  Row,
  Col,
  Divider,
} from 'antd'
import "antd/dist/antd.css";


function App() {
  const [searchInput, setSearchInput] = useState("");
  const [location, setLocation] = useState({})
  const [metricSelection, setMetricSelection] = useState(true)
  const [data, setData] = useState({})



  let locationURL = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${config.api_key}&q=${searchInput}`
  // let dataURL = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${location[0].key}?details=false&apikey=${config.api_key}&metric=${metricSelection}`


  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get(locationURL).then((response) => {
      setLocation(response.data)
    })
    // printStatus()
  }

  const printStatus = () => {

    console.log(location)
    // console.log(location[0].Key)
    let dataURL = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${location[0].Key}?details=false&apikey=${config.api_key}&metric=${metricSelection}`
    axios.get(dataURL).then((response) => {
      setData(response.data)
      console.log(response.data)
      console.log(response.data.DailyForecasts)
      console.log(response.data.DailyForecasts[0].Date)
      console.log(response.data.DailyForecasts[1].Date)
      console.log(response.data.DailyForecasts[2].Date)
      console.log(response.data.DailyForecasts[3].Date)
      console.log(response.data.DailyForecasts[4].Date)
    })
  }


  return (
      <div className="App">

        <form onSubmit={handleSubmit}>
          <label>Location Search:
            <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
          </label>
          <input type="submit"/>
        </form>


        <div className="button" onClick={printStatus}> click me</div>
        <h4>Weather Forecast</h4>

        <>
          <Row>
            <Col span={3}>
              <Card size="small" title="Today"  style={{width: 200}}>
                {data.DailyForecasts? <p>{data.DailyForecasts[0].Day.IconPhrase}</p> :null}
                {data.DailyForecasts? <p>{data.DailyForecasts[0].Temperature.Maximum.Value}</p> :null}
                {data.DailyForecasts? <p>{data.DailyForecasts[0].Temperature.Minimum.Value}</p> :null}
            </Card>
            </Col>
          </Row>
        </>

      </div>
  );
}

export default App;

