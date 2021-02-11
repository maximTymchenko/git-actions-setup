import React from 'react'
import ButtonIcon from '../ButtonIcon'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'
import arrRight from '../../../../assets/img/arr-right.svg'

it('renders elem correctly', () => {
  const { getByTestId } = render(
    <ButtonIcon icon={arrRight} desc="Test"></ButtonIcon>
  )
  expect(getByTestId('button__icon')).toBeTruthy()
})

it('renders without unexpected changes', () => {
  const tree = renderer
    .create(<ButtonIcon icon={arrRight} desc="Test"></ButtonIcon>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
