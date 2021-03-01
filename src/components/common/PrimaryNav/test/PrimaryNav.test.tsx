import React from 'react';
import PrimaryNav from '../PrimaryNav';
import { queryAllByTestId, render } from '@testing-library/react';
import renderer from 'react-test-renderer';

const menuLinksHowWeWork = {
    activeLink: null,
    links: [
        { id: 1, title: 'Engagement Models', page: '/how-we-work/working-together/' },
        { id: 2, title: 'Your IP Protection', page: '/how-we-work/intellectual-property/' },
    ],
};

it('renders elem correctly', () => {
    const { queryAllByTestId } = render(
        <PrimaryNav navTitle="How We Work" navArray={menuLinksHowWeWork} />,
    );
    expect(queryAllByTestId('primary-nav')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer
        .create(<PrimaryNav navTitle="How We Work" navArray={menuLinksHowWeWork} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
