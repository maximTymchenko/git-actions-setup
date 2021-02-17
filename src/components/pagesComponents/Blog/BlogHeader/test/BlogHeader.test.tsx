import React from 'react';
import BlogHeader from '../BlogHeader';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('renders elem correctly', () => {
    const { getByTestId } = render(
        <BlogHeader
            blogTitle="Blog"
            blogSubtitle=" Articles, stories, case studies technical guides, best practices, tech videos,
                    and lots of resources to help you build, grow, and skyrocket your product or
                    digital side of your business."
        />,
    );
    expect(getByTestId('blog-header')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer
        .create(
            <BlogHeader
                blogTitle="Blog"
                blogSubtitle=" Articles, stories, case studies technical guides, best practices, tech videos,
                    and lots of resources to help you build, grow, and skyrocket your product or
                    digital side of your business."
            />,
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
