import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import './App.css';
import { InfoAlert, ErrorAlert } from './components/Alert'
import { useState, useEffect } from 'react';
import { getEvents, extractEventDetails, extractLocations } from './api';

const App = ()=> {
  const [events, setEvents]=useState([]);
  const [currentNOE, setCurrentNOE]=useState(32);
  const [allLocations, setAllLocations]=useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [currentNumber, setCurrentNumber] = useState("");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");

  const fetchData = async() =>{
    var allEvents = await getEvents();
    allEvents = await extractEventDetails(allEvents);
    const filteredEvents = (currentCity === "See all cities") ? 
    allEvents :
    allEvents.filter(event => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE));
    setCurrentNumber(events.length);
    setAllLocations(extractLocations(allEvents))
  }

  useEffect(() => {
    fetchData();
  }, [currentCity, currentNOE]);
  
  return (
    <div className="App">
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert}/> : null}
      </div>
      <CitySearch 
        setInfoAlert={setInfoAlert} 
        allLocations={allLocations} 
        setCurrentCity={setCurrentCity}/>
      <NumberOfEvents 
        setCurrentNOE={setCurrentNOE} 
        currentNumber={currentNumber}
        setErrorAlert={setErrorAlert}/>
      <EventList events={events}/>
    </div>
  );
}

//hello 

export default App;
