import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App'
import { getEvents } from '../mock-data';
import userEvent from '@testing-library/user-event'

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature,test =>{
test('When user hasn\'t specified a number, 32 events are shown by default.', ({ given, when, then }) => {
        let AppComponent;
        given('the user has not specified a number of events', () => {

        });
        
        when('the main page is open', () => {
            AppComponent = render(<App />);
        });

        then('the number of events listed should be 32', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
      
            await waitFor(() => {
              const EventListItems = within(EventListDOM).queryAllByRole('listitem');
              expect(EventListItems.length).toBe(32);
            });
        });
    });

    test('User can change number of events displayed', ({ given, when, then }) => {        
        given('the user has entered a number less than 32',()  => {

        });

        when('the main page is open', () => {

        });

        then('the number of eventslisted should match this number', () => {

        });
    });
});