import React from 'react';
import MainTitle from '../MainTitle';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('renders elem correctly', () => {
    const { getByTestId } = render(<MainTitle subtitle="test" title="test"></MainTitle>);
    expect(getByTestId('main-title')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer.create(<MainTitle subtitle="test" title="test"></MainTitle>).toJSON();
    expect(tree).toMatchSnapshot();
});
