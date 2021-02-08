import React from 'react';
import Features from '../Features';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('renders elem correctly', () => {
    const { getByTestId } = render(<Features></Features>);
    expect(getByTestId('features')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer.create(<Features></Features>).toJSON();
    expect(tree).toMatchSnapshot();
});
