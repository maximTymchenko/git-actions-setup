import React from 'react';
import TitleAndDesc from '../TitleAndDesc';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('renders elem correctly', () => {
    const { getByTestId } = render(
        <TitleAndDesc
            title="Impact"
            desc="The shiny new 1:1 Retail Conversations™ is going through final tests and about ready for the mid-2020 launch. Moreover, some of the current clients — national chains and Tier 1 national carriers already gave it a high score."
        />,
    );
    expect(getByTestId('title-and-desc')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer
        .create(
            <TitleAndDesc
                title="Impact"
                desc="The shiny new 1:1 Retail Conversations™ is going through final tests and about ready for the mid-2020 launch. Moreover, some of the current clients — national chains and Tier 1 national carriers already gave it a high score."
            />,
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
