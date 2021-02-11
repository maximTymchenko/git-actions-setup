import React from 'react'
import FixedCounter from '../FixedCounter'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
it('renders elem correctly', () => {
  const { getByTestId } = render(<FixedCounter></FixedCounter>)
  expect(getByTestId('fixed-counter')).toBeTruthy()
})

it('renders without unexpected changes', () => {
  const tree = renderer.create(<FixedCounter></FixedCounter>).toJSON()
  expect(tree).toMatchSnapshot()
})
