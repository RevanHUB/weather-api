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
    },
    getHour(hour) {
        let schedule;
        if (hour >= 0 && hour <= 6) {
          schedule = 'Night'; 
        }
        if (hour >= 7 && hour <= 13) {
          schedule = 'Morning';
        }
        if (hour >= 13 && hour <= 17) {
          schedule = 'Afternoon'; 
        }
        if (hour >= 18 && hour <= 20) {
          schedule = 'Evening';
        }
        if (hour >= 21 && hour <= 23 ) {
          schedule = 'Night';
        }
        return schedule;
      },
      
    ToWeekday(weekday) {
      if (weekday === 1 ) {
        weekday = 'Monday'; 
       }
       if (weekday === 2 ) {
        weekday = 'Tuesday'; 
       }
       if (weekday === 3 ) {
        weekday = 'Wednesday'; 
       }
       if (weekday === 4) {
        weekday = 'Thursday'; 
       }
       if (weekday === 5 ) {
        weekday = 'Friday'; 
       }
       if (weekday === 6 ) {
        weekday = 'Saturday'; 
       }
       if (weekday === 0 ) {
        weekday = 'Sunday'; 
       }
      return weekday;
    },

    
      
    
    
};
export default Config;