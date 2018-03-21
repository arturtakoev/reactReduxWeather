import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    renderWeather(cityData) {

        const temps = cityData.list.map(weather => weather.main.temp);
        const humudity = cityData.list.map(weather => weather.main.humidity);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const {lon, lat } = cityData.city.coord;

        return (
            <tr key={cityData.city.id}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart params={{ data: temps, color: "red" }} /></td>
                <td><Chart params={{ data: humudity, color: "green" }} /></td>
                <td><Chart params={{ data: pressure, color: "blue" }} /></td>
            </tr>
        );
    }

    render() {

        const weather = this.props.weather;
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(data => this.renderWeather(data))}
                </tbody>
            </table>
        );
    };
}


function mapStateToProps(state) {
    return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);
