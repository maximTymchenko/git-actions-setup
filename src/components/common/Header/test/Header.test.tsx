import React from 'react';
import Header from '../Header';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('renders elem correctly', () => {
    const { getByTestId } = render(<Header path="test path"></Header>);
    expect(getByTestId('header')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer.create(<Header path="test path"></Header>).toJSON();
    expect(tree).toMatchSnapshot();
});
