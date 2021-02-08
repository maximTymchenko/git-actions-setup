import React from 'react';
import Video from '../Video';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('renders elem correctly', () => {
    const { getByTestId } = render(<Video></Video>);
    expect(getByTestId('video')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer.create(<Video></Video>).toJSON();
    expect(tree).toMatchSnapshot();
});
