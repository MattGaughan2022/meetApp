import { render } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';
import App from '../App';

describe('<App /> component', () => {
    let AppDOM;
    beforeEach(() => {
      AppDOM = render(<App />).container.firstChild;
    })

    let NumberOfEventsComponent;
    test('NumberOfEventsComponent render', () =>{
      NumberOfEventsComponent = render(<NumberOfEvents/>);
      expect(NumberOfEventsComponent.container.firstChild).toHaveAttribute('id','start');
    });
    test('renders list of events', () => {
        expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
      });
      test('render CitySearch', () => {
        expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
      });
});