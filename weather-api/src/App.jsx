import './App.css'
import './animations.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import Config from './resources/config.js'
import Header from './components/header/header'
import Previous from './components/previous/previous';
import Home from './components/home/home';
import Search from './components/search/search';



class App extends React.Component {
  constructor() {
    super();
    this.hour = Config.date.getHours();
    this.HandlerSend = true;
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
      today: Config.ToWeekday(Config.date.getDay()),
      scheduleNow: Config.getHour(Config.date.getHours()),
      schedules: [
        'Morning',
        'Afternoon', 
        'Evening',
        'Night'
      ],
      refresh: true,
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
    };
  }
  render() {
    this.HandlerSend = false;
    return(
      <section className="App">
          <Header  
              info = { this.state }
              city = { this.state.citySelected } 
          />
          <Router>
            <Routes>
                 <Route exact path="/" element={
                  <section id="scrollSurface">
                    <Home 
                      info = {this.state}
                      changeState = {this.changeState}
                    />
                     <Previous 
                      info = {this.state} 
                      changeState = {this.changeState}
                      callRefresh = {this.callRefresh}
                     />
                  </section>
                }></Route>
            </Routes>
          </Router>
          <Search 
            addToFavorite = {Config.addToFavorite}
            info = {this.state}
            changeState = {this.changeState}
            callRefresh = {this.callRefresh}
          />
      </section>
    )
  }
}

export default App
