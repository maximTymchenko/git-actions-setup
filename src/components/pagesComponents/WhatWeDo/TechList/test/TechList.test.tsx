import React from 'react'
import TechList from '../TechList'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
const webDevelopmenList = [
  'Architecture planning',
  'Microservice architecture',
  'Event sourcing',
  'CQRS',
  'Amazon AWS',
  'Google Firebase',
  'Microsoft Azure',
]

it('renders elem correctly', () => {
  const { getByTestId } = render(
    <TechList techList={webDevelopmenList} title="Web development" />
  )
  expect(getByTestId('tech-list')).toBeTruthy()
})

it('renders without unexpected changes', () => {
  const tree = renderer
    .create(<TechList techList={webDevelopmenList} title="Web development" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
