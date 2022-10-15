import Config from './../../../resources/config';

export const SearchHandler = () => {
    return (
        <button onClick={() => {
            Config.showAndhide('search', 'previous', 'home');
       }}>
           <span className="material-icons">
               add
           </span>
       </button>
    )
}
export default SearchHandler;