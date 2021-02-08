import React from 'react';
import Bucket from '../Bucket';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import bucket from '../../../../../assets/img/companies/bucket.svg';

it('renders elem correctly', () => {
    const { getByTestId } = render(<Bucket icon={bucket} />);
    expect(getByTestId('bucket')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer.create(<Bucket icon={bucket} />).toJSON();
    expect(tree).toMatchSnapshot();
});
