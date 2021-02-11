import React from 'react'
import Services from '../Services'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'

it('renders elem correctly', () => {
  const { getByTestId } = render(<Services></Services>)
  expect(getByTestId('services')).toBeTruthy()
})

it('renders without unexpected changes', () => {
  const tree = renderer.create(<Services></Services>).toJSON()
  expect(tree).toMatchSnapshot()
})
