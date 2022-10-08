import './current.css'
import Day from './day/day';
import Schedule from './hourshift/schedule';

export const Current = (props) => {
    console.log(props.info.today)
    return (
        <section className='current'>
            <Day day = {props.info.today}></Day>
            <Schedule schedules = {props.info.schedules} schedule = {props.info.scheduleNow} />
        </section>
    )
};
export default Current;