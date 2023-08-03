import { render } from '@testing-library/react';
import EventList from '../components/EventList';
import { getEvents, extractEventDetails } from '../api';

describe('<EventList /> component', () => {
  let EventListComponent;
  beforeEach(()=> {
    EventListComponent=render(<EventList events={[]}/>);
  });

  test('has an element with "list" role', () => {
    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });

  test('renders correct number of events', async () => {
    var allEvents = await getEvents(); 
    allEvents = await extractEventDetails(allEvents);
    EventListComponent.rerender(<EventList events={allEvents} />);
    expect(EventListComponent.getAllByText("show details")).toHaveLength(allEvents.length);
  });

});