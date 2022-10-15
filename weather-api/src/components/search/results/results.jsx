import Config from '../../../resources/config';

export const Results = (props) => {
    return(
        <div className="resultados__busqueda">
                {
                    (props.searchHandler === true)?
                     <div className='resultado'>
                        <button onClick={
                            () => {
                                props.changeState(
                                    props.searchData.city, 
                                    props.searchData.weather, 
                                    props.searchData.temperature, 
                                    props.searchData.temperatureMinimum,
                                    props.searchData.temperatureMaximum, 
                                    props.searchData.sensation, 
                                    props.searchData.humidity, 
                                    props.searchData.wind, 
                                    props.searchData.visibility 
                                );
                                Config.showAndhide('home', 'previous', 'search');
                            }
                        }>
                            {props.searchData.city}
                        </button>
                        <button onClick={(event) => {
                            localStorage.setItem('favs', "[" + JSON.stringify(props.searchData) + "]");
                            console.log("added to favorites");
                            Config.showAndhide('previous', 'home', 'search');
                        }} value={props.searchData.city}>
                            <span className="material-icons">favorite</span>
                        </button>
                    </div>
                   
                  :null
                        
                    
                }
                
                
            </div>
    )
}
export default Results;