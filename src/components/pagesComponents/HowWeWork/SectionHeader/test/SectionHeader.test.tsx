import React from 'react'
import SectionHeader from '../SectionHeader'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'

it('renders elem correctly', () => {
  const { getByTestId } = render(
    <SectionHeader
      descriptionMain="test"
      descriptionPrimary="test"
      descriptionSecondary="test"
      secondaryTitleText="test"
    ></SectionHeader>
  )
  expect(getByTestId('section-header')).toBeTruthy()
})

it('renders without unexpected changes', () => {
  const tree = renderer
    .create(
      <SectionHeader
        descriptionMain="test"
        descriptionPrimary="test"
        descriptionSecondary="test"
        secondaryTitleText="test"
      ></SectionHeader>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
