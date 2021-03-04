import React from 'react';
import Span from '../Span';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('renders elem correctly', () => {
    const { getByTestId } = render(<Span type="headline">About the client</Span>);
    expect(getByTestId('span')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer.create(<Span type="headline">About the client</Span>).toJSON();
    expect(tree).toMatchSnapshot();
});
