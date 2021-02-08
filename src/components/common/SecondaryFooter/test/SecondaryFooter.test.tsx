import React from 'react';
import SecondaryFooter from '../SecondaryFooter';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('renders elem correctly', () => {
    const { getByTestId } = render(<SecondaryFooter></SecondaryFooter>);
    expect(getByTestId('secondary-footer')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer.create(<SecondaryFooter></SecondaryFooter>).toJSON();
    expect(tree).toMatchSnapshot();
});
