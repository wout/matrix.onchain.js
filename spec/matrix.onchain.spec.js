import {Mtx} from '../matrix.onchain.js'

describe('Mtx', () => {
  Mtx.co['+'] = (x, y) => x + y
  Mtx.co['*'] = (x, y) => x * y

  const a = [
    [1, 2, 3],
    [0, 1, 0]
  ]

  describe('.op', () => {
    it('performs operations on two given matrices', () => {
      expect(Mtx.op(a, 2, (x, y) => x % y)).toEqual([
        [1, 0, 1],
        [0, 1, 0]
      ])
    })

    it('adds two matrices', () => {
      let b = [
        [0, 0, 1],
        [1, 1, 1]
      ]
      expect(Mtx.op(a, b, Mtx.co['+'])).toEqual([
        [1, 2, 4],
        [1, 2, 1]
      ])
    })

    it('adds multiplies a matrix with a uniform matrix', () => {
      expect(Mtx.op(a, 3, Mtx.co['*'])).toEqual([
        [4, 5, 6],
        [3, 4, 3]
      ])
    })
  })

  describe('.fill', () => {
    it('creates a zero matrix given a number of rows and columns', () => {
      expect(Mtx.fill(4, 2)).toEqual([
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ])
    })
  })

  describe('.fill', () => {
    it('creates matrix with a number of rows and columns and a fill value', () => {
      expect(Mtx.fill(3, 5, 9)).toEqual([
        [9, 9, 9, 9, 9],
        [9, 9, 9, 9, 9],
        [9, 9, 9, 9, 9]
      ])
    })

    it('creates matrix with a number of rows, filled with the given column', () => {
      expect(Mtx.fill(3, [1, 0, 1, 0, 1])).toEqual([
        [1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1]
      ])
    })
  })
})