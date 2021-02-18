import React from 'react';
import BlogVideo from '../BlogVideo';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import video from '../../../../../assets/video/meeting_video.mp4';

it('renders elem correctly', () => {
    const { getByTestId } = render(
        <BlogVideo videoDesc="Hiring the best possible engineers" video={video} />,
    );
    expect(getByTestId('blog-video')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer
        .create(<BlogVideo videoDesc="Hiring the best possible engineers" video={video} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
