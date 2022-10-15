import axios from 'axios';
import Config from '../../../resources/config';

export const SearchModule = (props) => {
    const searchSystem = async (value) => {
        await axios.request(Config.weather_options(value)).then(function (response) {
            if (response.data.city != null) {
                props.setData(response.data);
                props.setHandler(true);
            } else {
                props.setHandler(false);
            }
           
            }).catch(function (error) {
              console.error(error);
              props.setHandler(false)
          })
    };
    return (
        <nav>
            <form htmlFor="search">🔍︎
                <input type="text" placeholder="..." name="search" onKeyUp={(event) => {
                    
                    if (event.target.value != null) {
                        searchSystem(event.target.value);
                        }
                    }
                }/> 
            </form>
            <button onClick={() => { Config.hideModal(); }}>
                <span className="material-icons">close</span>
                CANCEL
            </button>
            
        </nav>
    )
}
export default SearchModule;