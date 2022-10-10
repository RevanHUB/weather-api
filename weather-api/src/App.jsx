import './App.css'
import './animations.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


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
    
    this.state = {
      citySelected : 'London',
      currentTimeSelected : 'Sunny',
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
 
      ]
    }
    this.changeState = (city, time, temperature, lowtemp, hightemp, sensation, humidity, wind, visibility) => {
      this.setState({
        citySelected: city,
        currentTimeSelected: time,
        temperatureSelected: temperature,
        temperatureMinimumSelected: lowtemp,
        temperatureMaximumSelected: hightemp,
        sensationSelected:  sensation,
        humiditySelected: humidity,
        windSelected: wind,
        visibility: visibility
    })
    }
    
    
    
  }
  render() {
    // insert ES6 code here
    this.HandlerSend = false;
    
    //this.getData();
   

    return(
      <section className="App">
          <Header  
              info = { this.state }
              city = {this.state.citySelected} 
          />
          <Router>
            <Routes>
                 <Route exact path="/" element={
                  <section id="scrollSurface">
                    <Home 
                      info = {this.state}
                      changeState = {this.changeState}
                    />
                     <Previous info = {this.state} />
                  </section>
                }></Route>
            </Routes>
          </Router>
          <Search 
            addToFavorite = {Config.addToFavorite}
            info = {this.state}
          />
      </section>
    )
  }
}

export default App
