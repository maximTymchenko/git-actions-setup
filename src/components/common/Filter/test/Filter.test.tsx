import React from 'react'
import Filter from '../Filter'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'

it('renders elem correctly', () => {
  const { getByTestId } = render(<Filter></Filter>)
  expect(getByTestId('filter')).toBeTruthy()
})

it('renders without unexpected changes', () => {
  const tree = renderer.create(<Filter></Filter>).toJSON()
  expect(tree).toMatchSnapshot()
})
