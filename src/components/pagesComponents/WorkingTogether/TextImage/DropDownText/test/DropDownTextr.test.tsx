import React from 'react'
import DropDownText from '../DropDownText'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'

it('renders elem correctly', () => {
  const { getByTestId } = render(<DropDownText title="title"></DropDownText>)
  expect(getByTestId('drop-down-text')).toBeTruthy()
})

it('renders without unexpected changes', () => {
  const tree = renderer
    .create(<DropDownText title="title"></DropDownText>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
