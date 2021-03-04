import React from 'react';
import Features from '../Features';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('renders elem correctly', () => {
    const { getByTestId } = render(
        <Features
            showBG="no-bg"
            title="Have a similar project or feel like we have what it takes to help you out?"
        />,
    );
    expect(getByTestId('features')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer
        .create(
            <Features
                showBG="no-bg"
                title="Have a similar project or feel like we have what it takes to help you out?"
            />,
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
