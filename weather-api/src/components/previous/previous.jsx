import Entry from './entry/entry';
import './previous.css'

export const Previous = (props) => {
    console.log(props.info.previously)
    return (
        <section id="previous">
            <div className='grid'>
               <Entry entries = {props.info.previously}/>
            </div>
        </section>
    )

}

export default Previous;