import React from 'react';
import Technologies from '../Technologies';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('renders elem correctly', () => {
    const { getByTestId } = render(<Technologies></Technologies>);
    expect(getByTestId('technologies')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer.create(<Technologies></Technologies>).toJSON();
    expect(tree).toMatchSnapshot();
});
