import React, { useState } from 'react';
import PrimaryNav from '../PrimaryNav';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

const menuLinksServices: INavLinks = {
    activeLink: null,
    links: [
        { id: 1, title: 'Web development' },
        { id: 2, title: 'Cloud services' },
        { id: 3, title: 'Research' },
        { id: 4, title: 'Analytics' },
        { id: 5, title: 'Quality control' },
        { id: 6, title: 'Mobile development' },
    ],
};

const menuLinksIndustries: INavLinks = {
    activeLink: null,
    links: [
        { id: 1, title: 'Retail & E-commerce' },
        { id: 2, title: 'Construction' },
        { id: 3, title: 'Finance' },
        { id: 4, title: 'Media' },
    ],
};

const menuLinksExpertise: INavLinks = {
    activeLink: null,
    links: [
        { id: 1, title: 'SaaS product' },
        { id: 2, title: 'Chatbots' },
        { id: 3, title: 'AR & VR' },
        { id: 4, title: 'Blockchain' },
        { id: 5, title: 'Digital enterprise ' },
        { id: 6, title: 'Drone' },
        { id: 7, title: 'R&D' },
    ],
};

const menuLinksEngagement = {
    activeLink: null,
    links: [
        { id: 1, title: 'On-demand team extension' },
        { id: 2, title: 'Fully managed IT services' },
    ],
};

const navLinks = {
    activeLink: null,
    links: [
        { id: 1, title: 'Services' },
        { id: 2, title: 'Industries' },
        { id: 3, title: 'Expertise' },
        { id: 4, title: 'Engagement' },
    ],
};

const navLinksArray = {
    activeLink: null,
    links: [
        { id: 0, array: menuLinksServices },
        { id: 1, array: menuLinksIndustries },
        { id: 2, array: menuLinksExpertise },
        { id: 3, array: menuLinksEngagement },
    ],
};

const language = {
    activeLink: null,
    links: [
        { id: 1, title: '' },
        { id: 2, title: '' },
    ],
};

it('renders elem correctly', () => {
    const { getByTestId } = render(
        <PrimaryNav navLinks={navLinks} navLinksArray={navLinksArray} language={language} />,
    );
    expect(getByTestId('primary-nav')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer
        .create(
            <PrimaryNav navLinks={navLinks} navLinksArray={navLinksArray} language={language} />,
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
