import './icon.css'
export const Icon = (props) => {
    return (
        <i>
             {( props.currentTime.includes('sunny') || props.currentTime.includes('Sunny'))?<span className="material-icons" data-time="sunny">circle</span> : null}
             {( props.currentTime.includes('snow') || props.currentTime.includes('Snow'))?<span className="material-icons" data-time="snow">ac_unit</span> : null}
             {( props.currentTime.includes('cloudy') || props.currentTime.includes('Cloudy'))?<span className="material-icons" data-time="cloudy">cloudy</span> : null}
             {( props.currentTime.includes('foggy') || props.currentTime.includes('Foggy'))?<span className="material-icons" data-time="foggy">foggy</span> : null}
             {( props.currentTime.includes('rainy') || props.currentTime.includes('Rainy'))?<span className="material-icons" data-time="rainy">water_drop</span> : null}
             {( props.currentTime.includes('windy') || props.currentTime.includes('Windy'))?<span className="material-icons" data-time="windy">air</span> : null}
             {( props.currentTime.includes('stormy') || props.currentTime.includes('Stormy'))?<span className="material-icons" data-time="stormy">thunderstorm</span> : null}
        </i>
    )
}
export default Icon;