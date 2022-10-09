import Config from '../../config';
import './search.css';
export const Search = (props) => {
    return (
        <section id="search">
            <nav>
                <form htmlFor="search">🔍︎
                    <input type="text" placeholder="..." name="search" onChange={(event) => {
                        console.log(event.target.value);
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
                <div className='resultado'>
                    <button>
                        London
                    </button>
                    <button>
                        <span className="material-icons">favorite</span>
                    </button>
                </div>
                
            </div>
        </section>
    )
};
export default Search;