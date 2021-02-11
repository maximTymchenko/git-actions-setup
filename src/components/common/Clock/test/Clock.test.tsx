import React from 'react'
import Clock from '../Clock'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'

it('renders elem correctly', () => {
  const { getByTestId } = render(<Clock timezone="Europe/Kiev"></Clock>)
  expect(getByTestId('clock')).toBeTruthy()
})

it('renders without unexpected changes', () => {
  const tree = renderer.create(<Clock timezone="Europe/Kiev"></Clock>).toJSON()
  expect(tree).toMatchSnapshot()
})
