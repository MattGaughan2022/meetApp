var showButton = true;
const Event = ({event}) => {
    showHideDetails = () =>{
      if (showButton==true){
        showButton=false;
      }
      else showButton=false;
    }

    return (
      <div>
      <li id="event-item">{event.title}</li>
        <ul className="event-info">
          <li className="location">{event.location}</li>
          <li className="start">{event.startTime}</li>
          <li className="organizer">{event.organizer}</li>
        </ul>
        {showButton ? <button className="up-details">show details</button> : <button className="down-details">hide details</button>}
        <div>
          {!showButton ? <span>{event.description} </span>:<span></span>}
        </div>
      </div>
    );
  }
  
  export default Event;