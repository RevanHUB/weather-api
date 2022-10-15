import Entry from './entry/entry';
import './previous.css'

export const Previous = (props) => {
    return (
        <section id="previous">
            <div className='grid'>
               <Entry 
                    changeState = {props.changeState}
                    callRefresh = {props.callRefresh}
                    info = {props.info}
               />
            </div>
        </section>
    )
}

export default Previous;