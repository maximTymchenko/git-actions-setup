import React from 'react'
import Counter from '../Counter'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
it('renders elem correctly', () => {
  const { getByTestId } = render(<Counter></Counter>)
  expect(getByTestId('counter')).toBeTruthy()
})

it('renders without unexpected changes', () => {
  const tree = renderer.create(<Counter></Counter>).toJSON()
  expect(tree).toMatchSnapshot()
})
