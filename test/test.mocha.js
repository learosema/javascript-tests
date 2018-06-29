import { describe, it } from 'mocha'
import { assert } from 'chai'
import { add, mul, div } from '../src/math'

describe('add', function () {
  it('should return 3 when called with parameters `add(1, 2)`', function () {
    assert.equal(add(1, 2), 3, 'add(1, 2) should return 3')
  })
})

describe('mul', function () {
  it('shoud return 9 when called with parameters `mul(3, 3)`', function () {
    assert.equal(mul(3, 3), 9, 'mul(3, 3) should return 9')
  })
})

describe('div', function () {
  it('shoud return 6 when called with parameters `div(12, 2)`', function () {
    assert.equal(div(12, 2), 6, 'div(12, 2) should return 6')
  })
})
