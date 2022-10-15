import ThumbIcon from "../thumbicon/thumbicon";

export const Square = (props) => {
    return(
        <div>
            <p>{props.city}</p>
            <ThumbIcon icon = {props.weather} />
            <p>{props.temperature}</p>
        </div>
    )
}
export default Square;