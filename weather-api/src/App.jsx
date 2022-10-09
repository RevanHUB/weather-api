import './App.css'
import './animations.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import axios from 'axios'
import Config from './config.js'
import Header from './components/header/header'
import Previous from './components/previous/previous';
import Home from './components/home/home';
import Search from './components/search/search';



class App extends React.Component {
  constructor() {
    super();
    this.hour = Config.date.getHours();
    this.HandlerSend = true;
    this.getHour = (hour) => {
      let schedule;
      if (hour >= 0 && hour <= 6) {
        schedule = 'Night'; 
      }
      if (hour >= 7 && hour <= 13) {
        schedule = 'Morning';
      }
      if (hour >= 13 && hour <= 17) {
        schedule = 'Afternoon'; 
      }
      if (hour >= 18 && hour <= 20) {
        schedule = 'Evening';
      }
      if (hour >= 21 && hour <= 23 ) {
        schedule = 'Night';
      }
      return schedule;
    };
    this.ToWeekday = (weekday) => {
      if (weekday === 1 ) {
        weekday = 'Monday'; 
       }
       if (weekday === 2 ) {
        weekday = 'Tuesday'; 
       }
       if (weekday === 3 ) {
        weekday = 'Wednesday'; 
       }
       if (weekday === 4) {
        weekday = 'Thursday'; 
       }
       if (weekday === 5 ) {
        weekday = 'Friday'; 
       }
       if (weekday === 6 ) {
        weekday = 'Saturday'; 
       }
       if (weekday === 0 ) {
        weekday = 'Sunday'; 
       }
      return weekday;
    },
    this.getData = async () => {
      if (this.HandlerSend === true) {
        null
      } else {
          await axios.request(Config.weather_options('Santa Cruz de La Palma')).then(function (response) {
            console.log(response.data);
            console.log(response.data.current_observation.atmosphere.humidity)
            /*this.setState({
                citySelected: response.data.location.city,
                currentTimeSelected: response.data.current_observation.condition.text,
                temperatureSelected: response.data.current_observation.condition.temperature,
                temperatureMinimumSelected: response.data.forecasts[0].low,
                temperatureMaximumSelected: response.data.forecasts[0].high,
                sensationSelected:  response.data.current_observation.wind.chill,
                humiditySelected: response.data.current_observation.atmosphere.humidity,
                windSelected: response.data.current_observation.wind.speed,
                visibility: response.data.current_observation.atmosphere.visibility
            })*/
       
          }).catch(function (error) {
            console.error(error);
        })
        //this.HandlerSend = true;
        console.log(this.HandlerSend);
      }
    },
    this.state = {
      citySelected : 'London',
      currentTimeSelected : 'sunny',
      temperatureSelected: 20,
      temperatureMinimumSelected:20,
      temperatureMaximumSelected: 22,
      sensationSelected: 19,
      humiditySelected: 33,
      windSelected: 20.9,
      visibility: 5,
      today: this.ToWeekday(Config.date.getDay()),
      scheduleNow: this.getHour(Config.date.getHours()),
      schedules: [
        'Morning',
        'Afternoon', 
        'Evening',
        'Night'
      ],
      previously : [
        {
          city: 'Manchester',
          weather: 'windy',
          temperature: 20,
        }
      ]
    }
  }
  render() {
    // insert ES6 code here
    this.HandlerSend = false;
    //this.getData();
   

    return(
      <section className="App">
          <Header  
              city = {this.state.citySelected} 
          />
          <Router>
            <Routes>
                 <Route exact path="/" element={
                  <section id="scrollSurface">
                    <Home 
                      info = {this.state}
                      request = {this.getData}
                    />
                     <Previous info = {this.state} />
                  </section>
                }></Route>
            </Routes>
          </Router>
          <Search />
      </section>
    )
  }
}

export default App
