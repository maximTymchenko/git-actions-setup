import React from 'react';
import Accordion from '../Accordion';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('renders elem correctly', () => {
    const { getByTestId } = render(<Accordion></Accordion>);
    expect(getByTestId('accordion')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer.create(<Accordion></Accordion>).toJSON();
    expect(tree).toMatchSnapshot();
});
