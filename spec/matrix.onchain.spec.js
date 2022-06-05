import {Mtx} from '../matrix.onchain.js'

describe('Mtx', () => {
  const a = [
    [1, 2, 3],
    [0, 1, 0]
  ]

  describe('.add', () => {
    it('adds two matrices', () => {
      let b = [
        [0, 0, 1],
        [1, 1, 1]
      ]
      expect(Mtx.add(a, b)).toEqual([
        [1, 2, 4],
        [1, 2, 1]
      ])
    })

    it('adds a matrix and a uniform matrix', () => {
      expect(Mtx.add(a, 3)).toEqual([
        [4, 5, 6],
        [3, 4, 3]
      ])
    })
  })

  describe('.sub', () => {
    it('subtracts a matrix', () => {
      let b = [
        [0, 0, 1],
        [1, 1, 1]
      ]
      expect(Mtx.sub(a, b)).toEqual([
        [1, 2, 2],
        [-1, 0, -1]
      ])
    })

    it('subtracts a uniform matrix from a matrix', () => {
      expect(Mtx.sub(a, 3)).toEqual([
        [-2, -1, 0],
        [-3, -2, -3]
      ])
    })
  })

  describe('.mpy', () => {
    it('multiplies two matrices', () => {
      let b = [
        [5, 6, 7],
        [0, 3, 9]
      ]
      expect(Mtx.mpy(a, b)).toEqual([
        [5, 12, 21],
        [0, 3, 0]
      ])
    })

    it('multiplies a matrix by a uniform matrix', () => {
      expect(Mtx.mpy(a, 3)).toEqual([
        [3, 6, 9],
        [0, 3, 0]
      ])
    })
  })

  describe('.div', () => {
    it('divides a matrix by another matrix', () => {
      let b = [
        [1, 10, 100],
        [1, 1, 1]
      ]
      expect(Mtx.div(a, b)).toEqual([
        [1, 0.2, 0.03],
        [0, 1, 0]
      ])
    })

    it('divides a matrix by a uniform matrix', () => {
      expect(Mtx.div(a, 2)).toEqual([
        [0.5, 1, 1.5],
        [0, 0.5, 0]
      ])
    })
  })

  describe('.op', () => {
    it('performs custom operations on two given matrices', () => {
      expect(Mtx.op(a, 2, (x, y) => x % y)).toEqual([
        [1, 0, 1],
        [0, 1, 0]
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
  })
})