import { test } from 'tape'
import { add, mul, div } from '../public/math.mjs'

test('add(1, 2) returns 3', function ({ plan, equal }) {
  plan(1)
  equal(add(1, 2), 3)
})

test('mul(3, 4) returns 12', function ({ plan, equal }) {
  plan(1)
  equal(mul(3, 4), 12)
})

test('div(20, 2) returns 10', function ({ plan, equal }) {
  plan(1)
  equal(div(20, 2), 10)
})
