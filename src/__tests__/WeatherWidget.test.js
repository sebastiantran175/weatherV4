import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import WeatherWidget from "../components/WeatherWidget";

const mockData = {
    "location": [
        {
            "Key": 26216,
            "LocalizedName": "Melbourne"
        }
    ],
    "data": {
        "Headline": {
            "EffectiveDate": "2022-09-27T01:00:00+10:00",
            "EffectiveEpochDate": 1664204400,
            "Severity": 2,
            "Text": "Expect rainy weather late Monday night through Wednesday morning",
            "Category": "rain",
            "EndDate": "2022-09-28T13:00:00+10:00",
            "EndEpochDate": 1664334000,
            "MobileLink": "http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?unit=c&lang=en-us"
        },
        "DailyForecasts": [
            {
                "Date": "2022-09-22T07:00:00+10:00",
                "EpochDate": 1663794000,
                "Temperature": {
                    "Minimum": {
                        "Value": 12.4,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 20.9,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 2,
                    "IconPhrase": "Mostly sunny",
                    "HasPrecipitation": false
                },
                "Night": {
                    "Icon": 12,
                    "IconPhrase": "Showers",
                    "HasPrecipitation": true,
                    "PrecipitationType": "Rain",
                    "PrecipitationIntensity": "Light"
                },
                "Sources": [
                    "AccuWeather"
                ],
                "MobileLink": "http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=1&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=1&unit=c&lang=en-us"
            },
            {
                "Date": "2022-09-23T07:00:00+10:00",
                "EpochDate": 1663880400,
                "Temperature": {
                    "Minimum": {
                        "Value": 8.6,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 16.4,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 12,
                    "IconPhrase": "Showers",
                    "HasPrecipitation": true,
                    "PrecipitationType": "Rain",
                    "PrecipitationIntensity": "Light"
                },
                "Night": {
                    "Icon": 39,
                    "IconPhrase": "Partly cloudy w/ showers",
                    "HasPrecipitation": true,
                    "PrecipitationType": "Rain",
                    "PrecipitationIntensity": "Light"
                },
                "Sources": [
                    "AccuWeather"
                ],
                "MobileLink": "http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=2&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=2&unit=c&lang=en-us"
            },
            {
                "Date": "2022-09-24T07:00:00+10:00",
                "EpochDate": 1663966800,
                "Temperature": {
                    "Minimum": {
                        "Value": 8.4,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 14.7,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 14,
                    "IconPhrase": "Partly sunny w/ showers",
                    "HasPrecipitation": true,
                    "PrecipitationType": "Rain",
                    "PrecipitationIntensity": "Light"
                },
                "Night": {
                    "Icon": 34,
                    "IconPhrase": "Mostly clear",
                    "HasPrecipitation": false
                },
                "Sources": [
                    "AccuWeather"
                ],
                "MobileLink": "http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=3&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=3&unit=c&lang=en-us"
            },
            {
                "Date": "2022-09-25T07:00:00+10:00",
                "EpochDate": 1664053200,
                "Temperature": {
                    "Minimum": {
                        "Value": 13.5,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 19.8,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 6,
                    "IconPhrase": "Mostly cloudy",
                    "HasPrecipitation": false
                },
                "Night": {
                    "Icon": 7,
                    "IconPhrase": "Cloudy",
                    "HasPrecipitation": true,
                    "PrecipitationType": "Rain",
                    "PrecipitationIntensity": "Heavy"
                },
                "Sources": [
                    "AccuWeather"
                ],
                "MobileLink": "http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=4&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=4&unit=c&lang=en-us"
            },
            {
                "Date": "2022-09-26T07:00:00+10:00",
                "EpochDate": 1664139600,
                "Temperature": {
                    "Minimum": {
                        "Value": 10.8,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 17.8,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 6,
                    "IconPhrase": "Mostly cloudy",
                    "HasPrecipitation": false
                },
                "Night": {
                    "Icon": 12,
                    "IconPhrase": "Showers",
                    "HasPrecipitation": true,
                    "PrecipitationType": "Rain",
                    "PrecipitationIntensity": "Moderate"
                },
                "Sources": [
                    "AccuWeather"
                ],
                "MobileLink": "http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=5&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/au/melbourne/26216/daily-weather-forecast/26216?day=5&unit=c&lang=en-us"
            }
        ]
    },
    "liveData": [
        {
            "LocalObservationDateTime": "2022-09-22T12:15:00+10:00",
            "EpochTime": 1663812900,
            "WeatherText": "Partly sunny",
            "WeatherIcon": 3,
            "HasPrecipitation": false,
            "PrecipitationType": null,
            "IsDayTime": true,
            "Temperature": {
                "Metric": {
                    "Value": 17.8,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 64,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "RealFeelTemperature": {
                "Metric": {
                    "Value": 19.6,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Pleasant"
                },
                "Imperial": {
                    "Value": 67,
                    "Unit": "F",
                    "UnitType": 18,
                    "Phrase": "Pleasant"
                }
            },
            "RealFeelTemperatureShade": {
                "Metric": {
                    "Value": 15.8,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Cool"
                },
                "Imperial": {
                    "Value": 60,
                    "Unit": "F",
                    "UnitType": 18,
                    "Phrase": "Cool"
                }
            },
            "RelativeHumidity": 63,
            "IndoorRelativeHumidity": 56,
            "DewPoint": {
                "Metric": {
                    "Value": 11.1,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 52,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Wind": {
                "Direction": {
                    "Degrees": 180,
                    "Localized": "S",
                    "English": "S"
                },
                "Speed": {
                    "Metric": {
                        "Value": 18.5,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Imperial": {
                        "Value": 11.5,
                        "Unit": "mi/h",
                        "UnitType": 9
                    }
                }
            },
            "WindGust": {
                "Speed": {
                    "Metric": {
                        "Value": 18.5,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Imperial": {
                        "Value": 11.5,
                        "Unit": "mi/h",
                        "UnitType": 9
                    }
                }
            },
            "UVIndex": 6,
            "UVIndexText": "High",
            "Visibility": {
                "Metric": {
                    "Value": 16.1,
                    "Unit": "km",
                    "UnitType": 6
                },
                "Imperial": {
                    "Value": 10,
                    "Unit": "mi",
                    "UnitType": 2
                }
            },
            "ObstructionsToVisibility": "",
            "CloudCover": 35,
            "Ceiling": {
                "Metric": {
                    "Value": 9144,
                    "Unit": "m",
                    "UnitType": 5
                },
                "Imperial": {
                    "Value": 30000,
                    "Unit": "ft",
                    "UnitType": 0
                }
            },
            "Pressure": {
                "Metric": {
                    "Value": 1018,
                    "Unit": "mb",
                    "UnitType": 14
                },
                "Imperial": {
                    "Value": 30.06,
                    "Unit": "inHg",
                    "UnitType": 12
                }
            },
            "PressureTendency": {
                "LocalizedText": "Falling",
                "Code": "F"
            },
            "Past24HourTemperatureDeparture": {
                "Metric": {
                    "Value": -1.1,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": -2,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "ApparentTemperature": {
                "Metric": {
                    "Value": 18.3,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 65,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "WindChillTemperature": {
                "Metric": {
                    "Value": 17.8,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 64,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "WetBulbTemperature": {
                "Metric": {
                    "Value": 14.1,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 57,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Precip1hr": {
                "Metric": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "PrecipitationSummary": {
                "Precipitation": {
                    "Metric": {
                        "Value": 0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "PastHour": {
                    "Metric": {
                        "Value": 0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past3Hours": {
                    "Metric": {
                        "Value": 0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past6Hours": {
                    "Metric": {
                        "Value": 0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past9Hours": {
                    "Metric": {
                        "Value": 0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past12Hours": {
                    "Metric": {
                        "Value": 0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past18Hours": {
                    "Metric": {
                        "Value": 0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past24Hours": {
                    "Metric": {
                        "Value": 0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                }
            },
            "TemperatureSummary": {
                "Past6HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 10,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 50,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 17.8,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 64,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                },
                "Past12HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 8.9,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 48,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 17.8,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 64,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                },
                "Past24HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 8.9,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 48,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 20,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 68,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                }
            },
            "MobileLink": "http://www.accuweather.com/en/au/melbourne/26216/current-weather/26216?lang=en-us",
            "Link": "http://www.accuweather.com/en/au/melbourne/26216/current-weather/26216?lang=en-us"
        }
    ],
    "metricSelection": true
};

// Mock Window before running each test for rendering
beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // Deprecated
            removeListener: jest.fn(), // Deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    });;
});


// Test that the page can be initialised upon render
test('Component Basic Render', () => {
    render(<WeatherWidget/>);
    const linkElement = screen.getByText("Search");
    expect(linkElement).toBeInTheDocument();
});


test('Blank Inputs does not break website', () => {
    render(<WeatherWidget
        initialLocationKey={null}
        initialLocationName={null}
        initialMetricSelection={null}/>);
    const linkElement = screen.getByText("Search");
    expect(linkElement).toBeInTheDocument();
});


test('Randomly Generated Inputs does not break website', () => {
    render(<WeatherWidget
        initialLocationKey={null}
        initialLocationName={"ad afdhajdlakdjasdajskldjakldjklasjd"}
        initialMetricSelection={null}/>);
    const linkElement = screen.getByText("Search");
    expect(linkElement).toBeInTheDocument();
});


