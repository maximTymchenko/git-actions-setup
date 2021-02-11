import React from 'react'
import Footer from '../Footer'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'

it('renders elem correctly', () => {
  const { getByTestId } = render(<Footer></Footer>)
  expect(getByTestId('footer')).toBeTruthy()
})

it('renders without unexpected changes', () => {
  const tree = renderer.create(<Footer></Footer>).toJSON()
  expect(tree).toMatchSnapshot()
})
