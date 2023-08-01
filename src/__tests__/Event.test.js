/*for event details, need 'show/hide details' toggle 
actual details should include 
    TITLE (.summary)
    LOCATION (.location)
    START.dateTime + timeZone (splice?)
    end.dateTime + timeZone
    DESCRIPTION (.description)
    organizer (.creator.email)

*/

import { fireEvent, screen, render } from '@testing-library/react';
import Event from '../components/Event';
import userEvent from '@testing-library/user-event';
import { getEvents, extractEventDetails } from '../api';

describe('<Event /> component', () => {
    
    let EventComponent;
    let testEvent;
    beforeEach( async()=> {
        const allEvents = await getEvents(); 
        testEvent = await extractEventDetails(allEvents[0]);
        EventComponent=render(
        <Event 
            event={testEvent}
        />)
    });

    test('renders event location', async()=> {
        expect(EventComponent.queryByText(testEvent.location)).toBeInTheDocument();
    });
    
    test('renders event details button with the title', ()=> {
        expect(EventComponent.queryByText('show details')).toBeInTheDocument();
    });

    test('by default, event details should be hidden',()=>{
        expect(EventComponent.queryByText('.show-details')).toBeInTheDocument;
    });

    test('when the user clicks "show details" button, SHOW the full list of details of an event', async()=>{
        const user = userEvent.setup();
        const showInfoButton = (EventComponent.queryByRole('up-details'));
        await user.click(showInfoButton);
        expect(EventComponent.queryByText(/Have you wondered how/)).toBeInTheDocument;
    });
    
    test('when the user clicks "hide details" button, HIDE the list of details of an event', async()=>{
        const user = userEvent.setup();
        const showInfoButton = (EventComponent.queryByRole('down-details'));
        await user.click(showInfoButton);
        expect(EventComponent.queryByText(/Have you wondered how/)).not.toBeInTheDocument;
    });
})