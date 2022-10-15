import './search.css';


import { useState, useEffect} from 'react';
import SearchModule from './searchM/module';
import Results from './results/results';

export const Search = (props) => {
    const [searchData, setData] = useState([]);
    const [searchHandler, setHandler] = useState(false);
    

    if(!localStorage.getItem('favs')) {
        localStorage.setItem('favs', '[]');
    } 

    useEffect(() => {
        setHandler(false)
    }, [])
 
    return (
        <section id="search">
            <SearchModule 
                searchData = {searchData}
                searchHandler = {searchHandler}
                setData = {setData}
                setHandler = {setHandler}
            />
            

            <Results 
                searchData = {searchData}
                searchHandler = {searchHandler}
                setHandler = {setHandler}
                setData = {setData}
                changeState = {props.changeState}
               
            />
        </section>
    )
};
export default Search;