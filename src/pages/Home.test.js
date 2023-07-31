import React from 'react';
import {render} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';
import Trainers from '../components/Trainers/Trainers';

describe('Home component', ()=>{
    test('renders Home Comp', ()=>{
        render(
            <MemoryRouter>
                <Home/>
            </MemoryRouter>
        );
    });
    test('renders the h1 correctly', ()=>{
        const { getByText } = render(
            <MemoryRouter>
                <Home/>
            </MemoryRouter>
        );
        // const heading = getByText("El Tigre's Gear");
        // const heading = screen.getByRole('heading', { name: /El Tigre's Gear/i });
        // expect(heading).toHaveTextContent("El Tigre's Gear");
        let wrapper = document.querySelector('h1');
expect(wrapper?.textContent).toEqual("El Tigre's Gear");
    });
    test('renders the button', ()=>{
        const { getByText } = render(
            <MemoryRouter>
                <Home/>
            </MemoryRouter>
        );
        // const orderButton = getByText("ORDER NOW");
        let wrapperbttn = document.querySelector('button');
        expect(wrapperbttn.textContent).toEqual("ORDER NOW");
    });
    test('renders the Trainers Component', ()=>{
        const { getByTestId } = render(
            <MemoryRouter>
                <Home/>
            </MemoryRouter>
        );
        const trainers = getByTestId(<Trainers/>);
        expect(trainers).toBeInTheDocument();
    });
})