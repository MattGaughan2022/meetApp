import { render } from '@testing-library/react';
import EventList from '../components/EventList';
import { getEvents } from '../api';

describe('<EventList /> component', () => {
  let EventListComponent;

  test('has an element with "list" role', () => {
    EventListComponent=render(<EventList events={[]}/>);
    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });

  test('renders correct number of events', async () => {
    let allEvents = []
    allEvents = await getEvents(); 
    EventListComponent = render(<EventList events={allEvents} />);
    expect(EventListComponent.getAllByRole("listitem")).toHaveLength(allEvents.length);
  });

});