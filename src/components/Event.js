import { useState } from "react";
import {extractEventDetails } from '../api';

const Event = ({event}) => {
  const [showHideInfo, setShowHideInfo] = useState(false);
    const showHideDetails = () => {
      setShowHideInfo(!showHideInfo);
    }
    // console.log(event);
    // event = extractEventDetails(event);

    return (
      <div>
      <li id="event-item">Event: {event.title}</li>
        <ul className="event-info">
          <span className="location">{event.location}</span>
          <span className="start">{event.startTime}</span>
          <span className="organizer">{event.organizer}</span>
        </ul>
        {showHideInfo==false ? <button onClick={showHideDetails} className="up-details">show details</button> : <button onClick={showHideDetails} className="down-details">hide details</button>}
        <div>
          {showHideInfo==true ? <span>{event.description}</span> :null}
        </div>
      </div>
    );
  }
  
  export default Event;