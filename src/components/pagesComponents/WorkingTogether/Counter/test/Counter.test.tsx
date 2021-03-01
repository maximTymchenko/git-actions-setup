import React from 'react';
import Counter from '../Counter';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

let counterPoints = [
    {
        id: 0,
        title: 'Outcome responsibility',
        isActive: false,
    },
    {
        id: 1,
        title: 'Project kickoff',
        isActive: false,
    },
    {
        id: 2,
        title: 'Onboarding approach',
        isActive: false,
    },
    {
        id: 3,
        title: 'Recruitment & screening',
        isActive: false,
    },
    {
        id: 4,
        title: 'Remote management',
        isActive: false,
    },
    {
        id: 5,
        title: 'Communication standards',
        isActive: false,
    },
    {
        id: 6,
        title: 'Intellectual property',
        isActive: false,
    },
    {
        id: 7,
        title: 'Pricing & predictability',
        isActive: false,
    },
];

it('renders elem correctly', () => {
    const { getByTestId } = render(<Counter counterPoints={counterPoints} />);
    expect(getByTestId('counter')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer.create(<Counter counterPoints={counterPoints} />).toJSON();
    expect(tree).toMatchSnapshot();
});
