import React from 'react'
import RecomendedText from '../RecomendedText'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
it('renders elem correctly', () => {
  const { getByTestId } = render(
    <RecomendedText
      title="On You"
      textPoints={[
        '• Following our recommended Onboarding Framework',
        '• Following our Recruitment & Screening recommendations',
      ]}
    />
  )
  expect(getByTestId('recomended-text')).toBeTruthy()
})

it('renders without unexpected changes', () => {
  const tree = renderer
    .create(
      <RecomendedText
        title="On You"
        textPoints={[
          '• Following our recommended Onboarding Framework',
          '• Following our Recruitment & Screening recommendations',
        ]}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
