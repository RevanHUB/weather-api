import cors from 'cors';
export const Config = { 
    date : new Date(),
    weather_options(location) {
      return {
        method: 'GET',
        url: 'http://localhost:80/q=' + location,
        params: {q: location},
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
          "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS"
        }
      } 
    },
    weather_all() {
      return {
        method: 'GET',
        url: 'http://localhost:80/',
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
          "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS"
        }
      } 
    },
    showAndhide( show,  hide, snd__hide ) {
        document.getElementById(hide).style.display = "none";
        document.getElementById(snd__hide).style.display = "none";
        document.getElementById(show).style.display = "flex";
    },
    hideModal() {
        document.getElementById("search").style.display = "none";
        document.getElementById("home").style.display = "flex";
    },
    addToFavorite(adding) {
      props.info.previously(JSON.stringify(adding));
    },
    getFavorites() {
      return localStorage.getItem('favorites');
    }
      
    
    
};
export default Config;