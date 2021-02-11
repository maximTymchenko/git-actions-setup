import React from 'react'
import TextDescription from '../TextDescription'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'

it('renders elem correctly', () => {
  const { getByTestId } = render(
    <TextDescription description="test"></TextDescription>
  )
  expect(getByTestId('text-description')).toBeTruthy()
})

it('renders without unexpected changes', () => {
  const tree = renderer
    .create(<TextDescription description="test"></TextDescription>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
