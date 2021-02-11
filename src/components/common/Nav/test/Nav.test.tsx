import React from 'react'
import Nav from '../Nav'
import { queryAllByTestId, render } from '@testing-library/react'
import renderer from 'react-test-renderer'

const menuLinks = {
  activeLink: null,
  links: [
    { id: 1, title: 'All' },
    { id: 2, title: 'Web development' },
    { id: 3, title: 'Cloud services' },
    { id: 4, title: 'Team extension' },
    { id: 5, title: 'AR & VR' },
    { id: 6, title: 'Retail & E-commerce' },
    { id: 7, title: 'Mobile development' },
  ],
}

it('renders elem correctly', () => {
  const { queryAllByTestId } = render(<Nav links={menuLinks} path="test"></Nav>)
  expect(queryAllByTestId('nav')).toBeTruthy()
})

it('renders without unexpected changes', () => {
  const tree = renderer
    .create(<Nav links={menuLinks} path="test"></Nav>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
