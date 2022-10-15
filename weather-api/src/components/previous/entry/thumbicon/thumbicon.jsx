import './icon.css'

export const ThumbIcon = (props) => {
    return (
        <i>
            {(props.icon === 'sunny' || props.icon === 'Sunny') ? <span  className="material-icons" data-time="sunny">circle</span>: null }
            {(props.icon === 'snow' || props.icon === 'Snow')?<span className="material-icons" data-time="snow">ac_unit</span> : null}
            {(props.icon === 'cloudy' || props.icon === 'Cloudy')?<span className="material-icons" data-time="cloudy">cloudy</span> : null}
            {(props.icon === 'foggy' || props.icon === 'Foggy')?<span className="material-icons" data-time="foggy">foggy</span> : null}
            {(props.icon === 'rainy' || props.icon === 'Rainy')?<span className="material-icons" data-time="rainy">water_drop</span> : null}
            {(props.icon === 'windy' || props.icon === 'Windy')?<span className="material-icons" data-time="windy">air</span> : null}
            {(props.icon === 'stormy'|| props.icon === 'Stormy')?<span className="material-icons" data-time="stormy">thunderstorm</span> : null}
        </i>
    )
};
export default ThumbIcon;