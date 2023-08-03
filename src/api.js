 
 import mockData from './mock-data';
 /**
  *
  * @param {*} events:
 * The following function should be in the “api.js” file.
 * This function takes an events array, then uses map to create a new array with only locations.
 * It will also remove all duplicates by creating another new array using the spread operator and spreading a Set.
 * The Set will remove all duplicates from the array.
 */
export const extractLocations = (events) => {
  const extractedLocations = events.map((event) => event.location);
  const locations = [...new Set(extractedLocations)];
  return locations;
};

export const extractEventDetails = async (events)=>{
    let extractedEvents = events.map((event)=>{
    return {
      id: event.id,
      title: event.summary,
      location: event.location,
      startTime: event.start.dateTime,
      endTime: event.end.dateTime,
      organizer: event.organizer.email,
      description: event.description,
  };
  
});
return extractedEvents;
}

/**
 *
 * This function will fetch the list of all events
 */
export const getEvents = async () => {
  return mockData;
};