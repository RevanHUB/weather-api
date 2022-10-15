import Config from './../../resources/config';
import './header.css';
import PreviousHandler from './previous/previousHandler';
import HomeHandler from './home/homeHandler';
import SearchHandler from './search/searchHandler';
export const Header = (props) => {
    
    return (
        <header>
            <PreviousHandler />
            <HomeHandler city = {props.city} />
            
            <SearchHandler />
            
        </header>
    )
};
export default Header;