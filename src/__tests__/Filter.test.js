import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { Filter } from '../components/filter'

test('has correct label', () => {
  const label = 'length'
  const { getByTestId } = render(
    <Filter name={label} value={{ min: 10, max: 20 }} />
  )

  expect(getByTestId('filter-label').innerHTML).toEqual(label)
})

test('renders correctly', () => {
  const tree = renderer
    .create(<Filter name="Length" value={{ min: 10, max: 20 }} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
