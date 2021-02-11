import React from 'react'
import FilterNav from '../FilterNav'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'

it('renders elem correctly', () => {
  const { getByTestId } = render(<FilterNav />)

  expect(getByTestId('filter-list')).toBeTruthy()
})

it('renders without unexpected changes', () => {
  const tree = renderer.create(<FilterNav />).toJSON()
  expect(tree).toMatchSnapshot()
})
