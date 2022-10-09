//import './entry.css'
import { useState } from 'react';

export const Entry = (props) => {
    //console.log(props.entries);
    let counter = 0;
    return (
        <section id="previous">
            <div className='grid'>
                {
                    props.entries.map((element) => {
                        counter++; 
                        return <button key={counter} className='city'>
                        <div>
                            <p>{element.city}</p>
                            <i>
                                { (element.weather === 'sunny') ? <span  className="material-icons" data-time="sunny">circle</span>: null }
                                {( element.weather === 'snow')?<span className="material-icons" data-time="snow">ac_unit</span> : null}
                                {( element.weather === 'cloudy')?<span className="material-icons" data-time="cloudy">cloudy</span> : null}
                                {( element.weather === 'foggy')?<span className="material-icons" data-time="foggy">foggy</span> : null}
                                {( element.weather === 'rainy')?<span className="material-icons" data-time="rainy">water_drop</span> : null}
                                {( element.weather === 'windy')?<span className="material-icons" data-time="windy">air</span> : null}
                                {( element.weather === 'stormy')?<span className="material-icons" data-time="stormy">thunderstorm</span> : null}
                            </i>
                            <p>{element.temperature}</p>
                        </div>
                    </button> })
                }
            </div>
        </section>
    )

}

export default Entry;