import React from 'react';
import BlogForm from '../BlogForm';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('renders elem correctly', () => {
    const { getByTestId } = render(<BlogForm />);
    expect(getByTestId('blog-form')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer.create(<BlogForm />).toJSON();
    expect(tree).toMatchSnapshot();
});
