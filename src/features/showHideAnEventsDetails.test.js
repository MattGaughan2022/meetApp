import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App'
import { getEvents } from '../mock-data';
import userEvent from '@testing-library/user-event'

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature,test =>{
    //scenario 1 - event details collapsed by default
    test('An event element is collapsed by default', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;

        given('the main page is open', () => {
            AppComponent = render(<App />);
        });

        when('events are showing', async () => {
            AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
      
            await waitFor(() => {
              const EventListItems = within(EventListDOM).queryAllByRole('listitem');
              expect(EventListItems.length).toBe(32);
            });
        });

        then('event details should be hidden', () => {
            const details = AppDOM.querySelector('.descriptionShown');
            expect(details).toBeNull;
        });
    });

    //scenario 2 - show details button is pressed
    test('When user clicks on \'show details\' the event details appear.', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;

        given('the main page is open', async () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;

            await waitFor(() => {
                const eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList[0]).toBeTruthy();
              });
        });

        when('the user clicks on details button', async () => {
            const user = userEvent.setup();
            const DetailsButton = AppDOM.querySelector('.up-details');
            await user.click(DetailsButton)
        });

        then('the user should receive the event details', () => {   
            const details = AppDOM.querySelector('.descriptionShown');
            expect(details).toBeTruthy();
        });
    });

    //scenario 3 - hide details button is pressed
    test('When user clicks on \'hide details\' the event details are hidden.', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;
        
        given('the first event has its details showing', async () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
            const user = userEvent.setup();
            
            await waitFor(() => {
                const eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList[0]).toBeTruthy();
              });
            const DetailsButton = AppDOM.querySelector('.up-details');
            await user.click(DetailsButton)

            const details = AppDOM.querySelector('.descriptionShown');
            expect(details).toBeTruthy();
        });

        when('the user clicks on details button', async () => {
            const user = userEvent.setup();
            const DetailsButton = AppDOM.querySelector('.down-details');
            await user.click(DetailsButton)
        });

        then('the user should not see the event details anymore', () => {
            const details = AppDOM.querySelector('.descriptionShown');
            expect(details).toBeNull;
        });
    });
})