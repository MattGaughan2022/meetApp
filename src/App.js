import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import './App.css';
import { useState, useEffect } from 'react';
import { getEvents, extractEventDetails, extractLocations } from './api';

const App = ()=> {
  const [events, setEvents]=useState([]);
  const [currentNOE, setCurretNOE]=useState(32);
  const [allLocations, setAllLocations]=useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");

  const fetchData = async() =>{
    var allEvents = await getEvents();
    allEvents = await extractEventDetails(allEvents);
    const filteredEvents = currentCity === "See all cities" ? 
    allEvents :
    allEvents.filter(event => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents))
  }

  useEffect(() => {
    fetchData();
  }, [currentCity]);
  
  return (
    <div className="App">
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity}/>
      <NumberOfEvents />
      <EventList events={events}/>
    </div>
  );
}

//hello 

export default App;
