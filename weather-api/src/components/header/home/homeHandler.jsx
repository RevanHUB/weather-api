import Config from './../../../resources/config';

export const HomeHandler = (props) => {
    return (
        <button className="selected" onClick={() => {
            Config.showAndhide('home', 'previous', 'search');
        }}>{props.city}</button>
    )
}
export default HomeHandler;