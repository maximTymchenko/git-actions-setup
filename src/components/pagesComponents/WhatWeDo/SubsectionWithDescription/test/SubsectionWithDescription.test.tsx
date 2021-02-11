import React from 'react'
import SubsectionWithDescription from '../SubsectionWithDescription'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
it('renders elem correctly', () => {
  const { getByTestId } = render(
    <SubsectionWithDescription
      title="Retail and E-commerce"
      description="Our clients’ products are heavily used by such companies like Walmart, The Home Depot, CVS Pharmacy in the USA and Canada. It’s a joy to be a part of their success."
    />
  )
  expect(getByTestId('subsection-with-description')).toBeTruthy()
})

it('renders without unexpected changes', () => {
  const tree = renderer
    .create(
      <SubsectionWithDescription
        title="Retail and E-commerce"
        description="Our clients’ products are heavily used by such companies like Walmart, The Home Depot, CVS Pharmacy in the USA and Canada. It’s a joy to be a part of their success."
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
