import { test } from 'tape'
import { add, mul, div } from '../src/math'

test('add(1, 2) returns 3', ({ end, equal }) => {
  equal(add(1, 2), 3)
  end()
})

test('mul(3, 4) returns 12', ({ end, equal }) => {
  equal(mul(3, 4), 12)
  end()
})

test('div(20, 2) returns 10', ({ end, equal }) => {
  equal(div(20, 2), 10)
  end()
})
