/* eslint-env jest */
import { add, mul, div } from '../src/math'

test('add(1, 2) to equal 3', () => {
  expect(add(1, 2)).toBe(3)
})

test('mul(3, 4) to equal 12', () => {
  expect(mul(3, 4)).toBe(12)
})

test('div(20, 2) to equal 10', () => {
  expect(div(20, 2)).toBe(10)
})
