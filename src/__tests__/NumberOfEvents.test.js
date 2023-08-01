import NumberOfEvents from '../components/NumberOfEvents';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

let NumberOfEventsComponent;
describe('<NumberOfEvents /> component', () =>{
    beforeEach(()=>{
        NumberOfEventsComponent = render(<NumberOfEvents />);
    })

    test('test for role of "textbox" ', () =>{
        expect(NumberOfEventsComponent.getByRole('textbox')).toBeInTheDocument();
    });

    test('test for default value of input field', () =>{
        expect(NumberOfEventsComponent.getByPlaceholderText('32')).toBeInTheDocument();
    });

    test('test for user input changing textbox value', async () =>{
        const user = userEvent.setup();
        let inputBox = NumberOfEventsComponent.getByRole('textbox');
        await user.type(inputBox, '{backspace}{backspace}10');
        expect(inputBox).toHaveValue('10');
    });
    
})