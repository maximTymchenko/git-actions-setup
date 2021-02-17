import React from 'react';
import BlogFilter from '../BlogFilter';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('renders elem correctly', () => {
    const { getByTestId } = render(<BlogFilter />);
    expect(getByTestId('blog-filter')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer.create(<BlogFilter />).toJSON();
    expect(tree).toMatchSnapshot();
});
