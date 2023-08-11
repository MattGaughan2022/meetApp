import { render, within } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { getEvents, extractEventDetails } from '../api';

describe('<App /> component', () => {
    let AppDOM;
    beforeEach(() => {
      AppDOM = render(<App />).container.firstChild;
    })

    let NumberOfEventsComponent;
    test('NumberOfEventsComponent render', () =>{
      NumberOfEventsComponent = render(<NumberOfEvents/>);
      expect(NumberOfEventsComponent.container.firstChild).toHaveAttribute('id','number-of-events');
    });
    test('renders list of events', () => {
        expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
      });
      test('render CitySearch', () => {
        expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
      });
});

describe('<App /> integration scope', () => {
  test('renders a list of events matching the city selected by the user', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const CitySearchDOM = AppDOM.querySelector('#city-search');
    const CitySearchInput = within(CitySearchDOM).queryByRole('textbox');

    await user.type(CitySearchInput, "Berlin");
    const berlinSuggestionItem = within(CitySearchDOM).queryByText('Berlin, Germany');
    await user.click(berlinSuggestionItem);

    const EventListDOM = AppDOM.querySelector('#event-list');
    const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');   

    const allEvents = await getEvents();
    const berlinEvents = allEvents.filter(
      event => event.location === 'Berlin, Germany'
    );
    expect(allRenderedEventItems.length).toBe(berlinEvents.length);
  });
  test('number inputted by a user equals number rendered', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
    const NumberOfEventsInput = within(NumberOfEventsDOM).queryByRole('textbox');
    await user.type(NumberOfEventsInput, "{backspace}{backspace}10");

    const EventListDOM = AppDOM.querySelector('#event-list');
    const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');
    expect(allRenderedEventItems.length).toBe(10);
  });
});