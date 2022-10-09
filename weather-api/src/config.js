export const Config = { 
    date : new Date(),
    weather_options(location) {
      return {
        method: 'GET',
        url: 'https://yahoo-weather5.p.rapidapi.com/weather',
      params: {location: location, format: 'json' /*change this to csv */ , u: 'c' /* change f to fahrenheit */},
        headers: {
          'X-RapidAPI-Key': 'f94737bd08msh9c66b608329fb47p1a75bcjsn60923cc2745e',
          'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
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
    }
      
    
    
};
export default Config;