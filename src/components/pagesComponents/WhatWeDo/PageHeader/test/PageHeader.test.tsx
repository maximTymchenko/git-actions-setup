import React from 'react';
import PageHeader from '../PageHeader';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('renders elem correctly', () => {
    const { getByTestId } = render(
        <PageHeader title="Whar We Do" subtitle="Discover"></PageHeader>,
    );
    expect(getByTestId('page-header')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer
        .create(<PageHeader title="Whar We Do" subtitle="Discover"></PageHeader>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
