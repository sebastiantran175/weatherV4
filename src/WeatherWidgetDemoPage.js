import WeatherWidget from "./components/WeatherWidget";

function WeatherWidgetDemoPage() {
return (
    // WeatherWidget(26216,"Melbourne",true)

    <WeatherWidget
        initialLocationKey={26216}
        initialLocationName={"Melbourne"}
        initialMetricSelection={true}
    />
)
}

export default WeatherWidgetDemoPage;