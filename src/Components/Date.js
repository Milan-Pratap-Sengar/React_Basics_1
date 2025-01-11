import './Date.css'
//Component creation
function Date(props){
    let day=props.dayName;
    let month=props.monthName;
    let year=props.yearName;
    return(
        <div>
            <div className='Date'>{day}</div>
            <div className='Date'>{month}</div>
            <div className='Date'>{year}</div>
            {props.children}  {/* tp make "milan pratap sengar" visible*/}
        </div>
    );
}
export default Date;