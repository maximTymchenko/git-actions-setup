import React from 'react';
import PhotoIcon from '../PhotoIcon';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

const ourTeam: TOurTeam = [
    { id: 0, name: 'Yurii Drozd', position: 'CEO & Managing Director', img: CEO },
    { id: 1, name: 'Yurii Drozd', position: 'CEO & Managing Director', img: CEO },
    { id: 2, name: 'Yurii Drozd', position: 'CEO & Managing Director', img: CEO },
    { id: 3, name: 'Yurii Drozd', position: 'CEO & Managing Director', img: CEO },
    { id: 4, name: 'Yurii Drozd', position: 'CEO & Managing Director', img: CEO },
];

it('renders elem correctly', () => {
    const { getByTestId } = render(<PhotoIcon ourTeam={ourTeam} />);
    expect(getByTestId('photo-icon')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer.create(<PhotoIcon ourTeam={ourTeam} />).toJSON();
    expect(tree).toMatchSnapshot();
});
