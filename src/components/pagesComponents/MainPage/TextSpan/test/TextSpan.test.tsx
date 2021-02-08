import React from 'react';
import TextSpan from '../TextSpan';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('renders elem correctly', () => {
    const { getByTestId } = render(
        <TextSpan
            title="Shall we chat quickly?"
            text="Even a 5-minute intro call could potentially save you countless hours of endless
                    back-and-forth emails."
        />,
    );
    expect(getByTestId('text-span')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer
        .create(
            <TextSpan
                title="Shall we chat quickly?"
                text="Even a 5-minute intro call could potentially save you countless hours of endless
                    back-and-forth emails."
            />,
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
