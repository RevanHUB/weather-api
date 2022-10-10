import Config from '../../config';
import './search.css';

import axios from 'axios';
import {useState} from 'react';
import { useEffect } from 'react';
export const Search = (props) => {
    const [searchData, setData] = useState([]);
    const [searchHandler, setHandler] = useState(false);
    const searchSystem = async (value) => {
        await axios.request(Config.weather_options(value)).then(function (response) {
            //searchData = response.data;
            if (response.data.city != null) {
                setData(response.data);
                setHandler(true);
            } else {
                setHandler(false);
            }
           
            }).catch(function (error) {
              console.error(error);
              setHandler(false)
          })
    };
    useEffect(() => {
        setHandler(false)
    }, [])
 
    return (
        <section id="search">
            <nav>
                <form htmlFor="search">🔍︎
                    <input type="text" placeholder="..." name="search" onKeyUp={(event) => {
                        console.log(event.target.value);
                        if (event.target.value != null) {
                            setTimeout(() => {
                                searchSystem(event.target.value)
                            }, 2000);
                        }
                        
                       
                    }}/> 
                </form>
                <button onClick={() => {
                    Config.hideModal();
                }}>
                    <span className="material-icons">close</span>
                    CANCEL
                </button>
          
            </nav>
            <div className="resultados__busqueda">
                {
                    (searchHandler === true)?
                     <div className='resultado'>
                        <button>
                            {searchData.city}
                        </button>
                        <button onClick={(event) => {
                            //props.addToFavorite(event.target.value);
                            console.log(searchData)
                            props.info.previously.push(searchData)
                            console.log("added to favorites")
                        }} value={searchData.city}>
                            <span className="material-icons">favorite</span>
                        </button>
                    </div>
                   
                  :null
                        
                    
                }
                
                
            </div>
        </section>
    )
};
export default Search;