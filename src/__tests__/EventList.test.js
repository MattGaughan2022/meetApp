import { render, within, waitFor  } from '@testing-library/react';
import EventList from '../components/EventList';
import { getEvents, extractEventDetails } from '../api';
import App from "../App";

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

describe('<EventList /> integration', () =>{
  // test('renders a non-zero length list of events', async() =>{
  //   expect(EventListItems.length).toBeGreaterThan(0);
  // });
  

  test('renders a list of 32 events when the app is mounted and rendered', async () => {
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;
    const EventListDOM = AppDOM.querySelector('#event-list');
    await waitFor(() => {
      const EventListItems = within(EventListDOM).queryAllByRole('listitem');
      expect(EventListItems.length).toBe(32);
    });

  });


})