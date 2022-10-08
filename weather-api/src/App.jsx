import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import axios from 'axios'



import './App.css'
import Config from './config.js'
import Header from './components/header/header'
import Previous from './components/previous/previous';
import Home from './components/home/home';
import { useEffect } from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    this.date = new Date();
    this.dateformat = new Date().toLocaleDateString("es-ES", this.options);
    this.hour = this.date.getHours();
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
       if (weekday === 7 ) {
        weekday = 'Sunday'; 
       }
      return weekday;
    }
    this.callWeatherApi = (city) => {
      axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + Config.api_key).then (res => {
      console.log(res.data);
    })
  }
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
      today: this.ToWeekday(this.date.getDay()),
      scheduleNow: this.getHour(this.date.getHours()),
      schedules: [
        'Morning',
        'Afternoon', 
        'Evening',
        'Night'
      ],
      previousSearchs : [
        {
          city: 'Manchester',
          temperature: 20,
        
        }
      ]
    }
    

  }
  render() {
    //console.log(Config.api_key);
    
    //this.callWeatherApi('london');
    // console.log(this.dateformat);
    
    
    return(
      <section className="App">
          <Header  
              city = {this.state.citySelected} 
          />
          <Router>
            <Routes>
                 <Route exact path="/" element={
                  // los coloco todos dentro porque quiero que sea real time
                  // además la navegación quiero hacerla por contact y arrastrar y aumentar el width
                  // del contenedor, estilo mobile-first
                  <section id="scrollSurface">
                   
                    <Home 
                      info = {this.state}
                    />
                     <Previous />
                  </section>
                }></Route>
            </Routes>
          </Router>
      </section>
    )
  }
}

export default App
