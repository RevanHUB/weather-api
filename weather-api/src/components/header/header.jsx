import './header.css';
export const Header = (props) => {
    var selected = props.city;
    return (
        <header>
            <button onClick={() => {
                console.log("show settings");
            }}>
                <span className='material-icons'>
                    menu
                </span>
            </button>
            <button className="selected" href="/">{props.city}</button>
            
            <button onClick={() => {
                console.log("show previous")
            }}>
                <span className="material-icons">
                    add
                </span>
            </button>
        </header>
    )
};
export default Header;