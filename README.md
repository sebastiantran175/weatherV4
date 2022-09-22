## Product Demo

![Alt Text](public/ChooseLocation.gif)

## Important config.json details
There are 5 keys inside the config.json file, as each key is good for 50 calls/ day
if the page is not refreshing, please change the api_key value to other keys

Also, due to a recent change in the weather APIs (especially OpenWeather APi), the industry standard for free tier is no longer 7 days.
The widget show the forecasts for 5 days instead.

Going to 7 days involving paying for a higher tier subscription.

## Available Scripts

In the project directory, you can run:
### `npm install`
Install the dependencies

### `npm start`
To start the app 

### `npm test`
To run the test suit

## API documentations 
Refer to /src/docs files.


## Components
WeatherWidgetDemoPage.js: Simulate a bigger website that take in WeatherWidget as a widget

WeatherWidget.js & WeatherWidget.css: The Widget itself

/docs: documentation for the weather API used

/utils: utilities for unit conversions and API call for better readability

/public/icon: icon pack for forecasts displays


## Accessibility Features
<ul>
<li>Typos are ranked based on closeness to actual cities name thanks to AccuWeather API, so Adelaid will return Adelaide, for example.
<li>The whole widget can be navigated with tab (and arrow key for unit selection)
<li>Each icon is given and alt value of relevant weather condition </ul>