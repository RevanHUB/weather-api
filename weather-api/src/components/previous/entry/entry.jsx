
import { useState, useEffect } from 'react';
import Config from '../../../resources/config';
import Square from './gridsquare/square';

export const Entry = (props) => {

    let counter = 0;
    const [entry, setEntry] = useState('');

    useEffect(() => {
        let refresh = setInterval(() => {
            setEntry(JSON.parse(localStorage.getItem('favs')));
        }, 1000);
        return () => clearInterval(refresh);
    }, [entry] );
    
    return (
        <section id="previous">
            <div className='grid'>
                {
                   Array.from(entry).map((element) => {
                        counter++; 
                        return <button key={counter} className='city' onClick={ () => {
                            props.changeState(
                                element.city, 
                                element.weather, 
                                element.temperature, 
                                element.temperatureMinimum,
                                element.temperatureMaximum, 
                                element.sensation, 
                                element.humidity, 
                                element.wind, 
                                element.visibility 
                            ); 

                            Config.showAndhide('home', 'previous', 'search');
                            
                        }}>
                       <Square 
                            city = {element.city}
                            weather = {element.weather}
                            temperature = {element.temperature}
                        />
                    </button> 
                    })
                }
            </div>
        </section>
    )

}

export default Entry;