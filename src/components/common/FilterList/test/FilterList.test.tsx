import React from 'react';
import FilterList from '../FilterList';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

const platformsList = {
    lists: [
        { id: 1, title: 'Web' },
        { id: 2, title: 'Ios' },
        { id: 3, title: 'Android' },
        { id: 4, title: 'Analytics' },
        { id: 5, title: 'Quality control' },
        { id: 6, title: 'Mobile development' },
    ],
};

it('renders elem correctly', () => {
    const { getByTestId } = render(
        <FilterList filterLists={platformsList} filterListTitle="Platforms" />,
    );

    expect(getByTestId('filter-list')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer
        .create(<FilterList filterLists={platformsList} filterListTitle="Platforms" />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
