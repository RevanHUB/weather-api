import './home.css'

import Icon from './components/icon/icon';
import Details from './components/details/details';
import Current from '../current/current';
import { useEffect } from 'react';
export const Home = (props) => {
    useEffect(() => {
        setTimeout(() => {
             props.request();
        }, [])
        
    }, [])
    return(
        <section id="home" className='home'>
            <p className="time">{props.info.currentTimeSelected}</p>
                <Icon currentTime = {props.info.currentTimeSelected}/>
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