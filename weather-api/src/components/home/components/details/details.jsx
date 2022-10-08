import './details.css'


export const Details = (props) => {
    return (
        <div className="details">
            <nav>
                <h1>{props.temperature}°</h1>
                <p className="minMax"> 
                    <span className="material-icons">arrow_drop_down</span> {props.tempMin} ° 
                    <span className="material-icons">arrow_drop_up</span> {props.tempMax} °
                </p>
            </nav>
            <nav>
                <h5>Details</h5>
                <p>Feels like <b>{props.sensation}°</b></p>
                <p>Humidity <b>{props.sensation} %</b></p>
                <p>Wind <b>{props.wind} Km / h</b></p>
                <p>Visibility <b>{props.visibility} km</b></p>
            </nav>
        </div>
    )
}
export default Details;