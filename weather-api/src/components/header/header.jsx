import Config from '../../config';
import './header.css';
export const Header = (props) => {
    var selected = props.city;
    return (
        <header>
            <button  onClick={() => {
                console.log("show settings");
                
            }}>
                <span className='material-icons'>
                    menu
                </span>
            </button>
            <button   className="selected" onClick={() => {
                Config.showAndhide('home', 'previous');
            }}>{props.city}</button>
            
            <button onClick={() => {
                Config.showAndhide('previous', 'home');
            }}>
                <span className="material-icons">
                    add
                </span>
            </button>
        </header>
    )
};
export default Header;