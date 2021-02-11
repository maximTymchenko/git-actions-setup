import React from 'react'
import VideoItem from '../VideoItem'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'

it('renders elem correctly', () => {
  const { getByTestId } = render(
    <VideoItem size="small" label="test" num="1"></VideoItem>
  )
  expect(getByTestId('video-item')).toBeTruthy()
})

it('renders without unexpected changes', () => {
  const tree = renderer
    .create(<VideoItem size="small" label="test" num="1"></VideoItem>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
