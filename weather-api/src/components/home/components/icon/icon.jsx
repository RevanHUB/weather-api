import './icon.css'
export const Icon = (props) => {
    return (
        <i>
             {( props.currentTime === 'sunny')?<span className="material-icons" data-time="sunny">circle</span> : null}
             {( props.currentTime === 'snow')?<span className="material-icons" data-time="snow">ac_unit</span> : null}
             {( props.currentTime === 'cloudy')?<span className="material-icons" data-time="cloudy">cloudy</span> : null}
             {( props.currentTime === 'foggy')?<span className="material-icons" data-time="foggy">foggy</span> : null}
             {( props.currentTime === 'rainy')?<span className="material-icons" data-time="rainy">water_drop</span> : null}
             {( props.currentTime === 'windy')?<span className="material-icons" data-time="windy">air</span> : null}
             {( props.currentTime === 'stormy')?<span className="material-icons" data-time="stormy">thunderstorm</span> : null}
        </i>
    )
}
export default Icon;