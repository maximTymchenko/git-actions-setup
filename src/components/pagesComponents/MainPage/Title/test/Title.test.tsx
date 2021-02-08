import React from 'react';
import Title from '../Title';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

it('renders elem correctly', () => {
    const { getByTestId } = render(
        <Title
            title="Shall we chat quickly?"
            text="Even a 5-minute intro call could potentially save you countless hours of endless
                    back-and-forth emails."
        />,
    );
    expect(getByTestId('title')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer
        .create(
            <Title
                title="Shall we chat quickly?"
                text="Even a 5-minute intro call could potentially save you countless hours of endless
                    back-and-forth emails."
            />,
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
