import React from 'react'
import LargeCompanyContainer from '../LargeCompanyContainer'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import walmart from '../../../../../assets/img/walmart.svg'

it('renders elem correctly', () => {
  const { getByTestId } = render(
    <LargeCompanyContainer
      img={walmart}
      description="Increasing Walmart weekly ads conversion with a custom web app for Ad Tech
        company"
      label="CASE STUDY"
      hashtags="Amazon, Retail & E-commerce, React, Web development, +13 more"
    />
  )
  expect(getByTestId('large-company-container')).toBeTruthy()
})

it('renders without unexpected changes', () => {
  const tree = renderer
    .create(
      <LargeCompanyContainer
        img={walmart}
        description="Increasing Walmart weekly ads conversion with a custom web app for Ad Tech
        company"
        label="CASE STUDY"
        hashtags="Amazon, Retail & E-commerce, React, Web development, +13 more"
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
