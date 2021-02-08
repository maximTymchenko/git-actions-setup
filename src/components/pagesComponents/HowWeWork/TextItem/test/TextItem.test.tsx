import React from 'react';
import TextItem from '../TextItem';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('renders elem correctly', () => {
    const { getByTestId } = render(<TextItem itemDesc="test" itemTitle="test"></TextItem>);
    expect(getByTestId('text-item')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer.create(<TextItem itemDesc="test" itemTitle="test"></TextItem>).toJSON();
    expect(tree).toMatchSnapshot();
});
