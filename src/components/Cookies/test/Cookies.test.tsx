import React from 'react'
import Cookies from '../Cookies'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'

it('renders elem correctly', () => {
  const { getByTestId } = render(<Cookies></Cookies>)
  expect(getByTestId('cookies')).toBeTruthy()
})

it('renders without unexpected changes', () => {
  const tree = renderer.create(<Cookies></Cookies>).toJSON()
  expect(tree).toMatchSnapshot()
})
