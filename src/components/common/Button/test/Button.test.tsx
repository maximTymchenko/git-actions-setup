import React from 'react';
import Button from '../Button';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

it('renders elem correctly', () => {
    const { getByTestId } = render(<Button></Button>);
    expect(getByTestId('button')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer.create(<Button children="Test"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
});
