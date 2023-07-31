import React from 'react';
import {render} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

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
        const heading = getByText(/El Tigre's Gear/i);
        expect(heading).toBeInTheDocument();
    });
    test('renders the button', ()=>{
        const { getByText } = render(
            <MemoryRouter>
                <Home/>
            </MemoryRouter>
        );
        const orderButton = getByText(/ORDER NOW/i);
        expect(orderButton).toBeInTheDocument();
    });
    test('renders the Trainers Comp', ()=>{
        const { getByTestId } = render(
            <MemoryRouter>
                <Home/>
            </MemoryRouter>
        );
        const trainers = getByTestId('trainers');
        expect(trainers).toBeInTheDocument();
    });
})