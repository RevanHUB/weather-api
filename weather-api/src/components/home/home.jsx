import './home.css'
import axios from 'axios'
import { useEffect } from 'react';

import Config from './../../resources/config'
import Icon from './components/icon/icon';
import Details from './components/details/details';
import Current from '../current/current';

export const Home = (props) => {
    const getData = async () => {
        await axios.request(Config.weather_options('Santa Cruz de La Palma')).then(function (response) {
            props.changeState(
                response.data.city,
                response.data.weather,
                response.data.temperature,
                response.data.temperatureMinimum,
                response.data.temperatureMaximum,
                response.data.sensation,
                response.data.humidity,
                response.data.wind,
                response.data.visibility
            )
            }).catch(function (error) {
              console.error(error);
          })
      }
    useEffect(() => {
        setTimeout(() => {
             getData();
        }, [])
        
    }, [])
    return(
        <section id="home" className='home'>
            <p className="time">{props.info.currentTimeSelected}</p>
                <Icon 
                    currentTime = {props.info.currentTimeSelected}
                />
                <Details 
                    temperature = {props.info.temperatureSelected} 
                    tempMin = {props.info.temperatureMinimumSelected} 
                    tempMax = {props.info.temperatureMaximumSelected} 
                    sensation = {props.info.sensationSelected} 
                    humidity = {props.info.humiditySelected} 
                    wind = {props.info.windSelected} 
                    visibility = {props.info.visibility} 
                />
                 <Current 
                      info = {props.info}
                />

        </section>
    )
}
export default Home;