import React from 'react'
import ContactsTitle from '../ContactsTitle'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'

it('renders elem correctly', () => {
  const { getByTestId } = render(
    <ContactsTitle subtitleText="test" titleText="test"></ContactsTitle>
  )
  expect(getByTestId('contacts-title')).toBeTruthy()
})

it('renders without unexpected changes', () => {
  const tree = renderer
    .create(
      <ContactsTitle subtitleText="test" titleText="test"></ContactsTitle>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
