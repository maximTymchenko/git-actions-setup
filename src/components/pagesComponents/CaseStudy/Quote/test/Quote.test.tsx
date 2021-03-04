import React from 'react';
import Quote from '../Quote';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('renders elem correctly', () => {
    const { getByTestId } = render(
        <Quote>
            Things like micro-delays while requests were traveling between one microservice to
            another sometimes disguised lightness and overall beauty of having a real-time 1:1
            conversation with a business you are chatting with.
        </Quote>,
    );
    expect(getByTestId('quote')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer
        .create(
            <Quote>
                Things like micro-delays while requests were traveling between one microservice to
                another sometimes disguised lightness and overall beauty of having a real-time 1:1
                conversation with a business you are chatting with.
            </Quote>,
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
