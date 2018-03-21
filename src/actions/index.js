import axios from 'axios';

const API_KEY = '199f27c6b69e6ddcb983380bbb1230a0';

export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROUTE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export function fetchWeather(city) {

    const url = `${ROUTE_URL}&q=${city}`;
    const request = axios.get(url);


    return {
        type: FETCH_WEATHER,
        payload: request
    };
}