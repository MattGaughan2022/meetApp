import { useState } from "react";
import {extractEventDetails } from '../api';

const Event = ({event}) => {
  const [showHideInfo, setShowHideInfo] = useState(false);
    showHideDetails = () => {
      setShowHideInfo(!showHideInfo);
    }
    // console.log(event);
    // event = extractEventDetails(event);

    return (
      <div>
      <li id="event-item">Event: {event.title}</li>
        <ul className="event-info">
          <li className="location">{event.location}</li>
          <li className="start">{event.startTime}</li>
          <li className="organizer">{event.organizer}</li>
        </ul>
        {showHideInfo==false ? <button onClick={showHideDetails} className="up-details">show details</button> : <button onClick={showHideDetails} className="down-details">hide details</button>}
        <div>
          {showHideInfo==true ? <span>{event.description}</span> :null}
        </div>
      </div>
    );
  }
  
  export default Event;