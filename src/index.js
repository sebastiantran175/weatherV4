import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WeatherWidget from "./components/WeatherWidget";
import WeatherWidgetDemoPage from "./WeatherWidgetDemoPage";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WeatherWidgetDemoPage />
  </React.StrictMode>
);

