import React from 'react';
import OurOffices from '../OurOffices';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('renders elem correctly', () => {
    const { getByTestId } = render(<OurOffices></OurOffices>);
    expect(getByTestId('our-offices')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer.create(<OurOffices></OurOffices>).toJSON();
    expect(tree).toMatchSnapshot();
});
