import Config from './../../../resources/config';

export const PreviousHandler = () => {
    return (
        <button onClick={() => {
            console.log("show settings");
            Config.showAndhide('previous', 'home', 'search');
        }}>
            <span className='material-icons'>
                menu
            </span>
        </button>
    )
}
export default PreviousHandler;