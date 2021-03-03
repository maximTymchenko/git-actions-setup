import React from 'react';
import LargeSectionTitle from '../LargeSectionTitle';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('renders elem correctly', () => {
    const { getByTestId } = render(<LargeSectionTitle />);
    expect(getByTestId('large-section-title')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer.create(<LargeSectionTitle />).toJSON();
    expect(tree).toMatchSnapshot();
});
