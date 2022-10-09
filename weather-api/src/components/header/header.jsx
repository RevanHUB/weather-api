import Config from '../../config';
import './header.css';
export const Header = (props) => {
    var selected = props.city;
    return (
        <header>
            <button  onClick={() => {
                console.log("show settings");
                Config.showAndhide('previous', 'home', 'search');
            }}>
                <span className='material-icons'>
                    menu
                </span>
            </button>
            <button   className="selected" onClick={() => {
                Config.showAndhide('home', 'previous', 'search');
            }}>{props.city}</button>
            
            <button onClick={() => {
                 Config.showAndhide('search', 'previous', 'home');
            }}>
                <span className="material-icons">
                    add
                </span>
            </button>
        </header>
    )
};
export default Header;