import React from 'react';
import TextImage from '../TextImage';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
it('renders elem correctly', () => {
    const { getByTestId } = render(
        <TextImage
            id="responsibility"
            titleText="Outcome responsibility"
            secondaryTitleText="Blackbird guarantees"
            large="large"
            descriptionMain="You get a wealth of our experience from actively working on miscellaneous client projects that your in-house teams would not probably collectively have. 
                    Regardless, of the hiring model you choose, we will always make sure you are aware of all possibilities and potential pitfalls in advance of making your final decision."
            relative="dislocation"
            typeValue="lighter"
        />,
    );
    expect(getByTestId('text-image')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer
        .create(
            <TextImage
                id="responsibility"
                titleText="Outcome responsibility"
                secondaryTitleText="Blackbird guarantees"
                large="large"
                descriptionMain="You get a wealth of our experience from actively working on miscellaneous client projects that your in-house teams would not probably collectively have. 
                    Regardless, of the hiring model you choose, we will always make sure you are aware of all possibilities and potential pitfalls in advance of making your final decision."
                relative="dislocation"
                typeValue="lighter"
            />,
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
