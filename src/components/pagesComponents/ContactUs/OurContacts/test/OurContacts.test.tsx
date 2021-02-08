import React from 'react';
import OurContacts from '../OurContacts';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('renders elem correctly', () => {
    const { getByTestId } = render(<OurContacts></OurContacts>);
    expect(getByTestId('our-contacts')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer.create(<OurContacts></OurContacts>).toJSON();
    expect(tree).toMatchSnapshot();
});
