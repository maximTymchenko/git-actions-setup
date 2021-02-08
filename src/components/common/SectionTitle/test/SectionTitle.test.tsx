import React from 'react';
import SectionTitle from '../SectionTitle';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('renders elem correctly', () => {
    const { getByTestId } = render(<SectionTitle title="test"></SectionTitle>);
    expect(getByTestId('section-title')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer.create(<SectionTitle title="test"></SectionTitle>).toJSON();
    expect(tree).toMatchSnapshot();
});
