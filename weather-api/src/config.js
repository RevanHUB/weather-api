export const Config = { 
    'api_key':'EXAMPLE_KEY',
    showAndhide( show,  hide ) {
        // document.getElementById(hide).style.position = 'absolute'
        // document.getElementById(hide).style.animation = 'scrollingLeft 1s'
   
            document.getElementById(hide).style.display = "none";
   
        
        // console.log( show + " is showing")
        // document.getElementById(show).style.minWidth = "360px !important";
        // document.getElementById(show).style.maxWidth = "360px !important";
        // document.getElementById(show).style.width = "360px !important";
        document.getElementById(show).style.display = "flex";
    },
    
};
export default Config;