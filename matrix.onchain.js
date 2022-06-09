/**
 * @typedef {number[]} MatrixRowArray
 * @typedef {MatrixRowArray[]} MatrixArray
 */

export const Mtx = {
  /**
    * Performs an addition operation on two matrices.
    *
    * @param {MatrixArray} a - First matrix.
    * @param {MatrixArray|number} b  - Second matrix or fill value.
    * @return {MatrixArray} A new matrix.
    */
  add(a, b) { return Mtx.op(a, b, (x, y) => x + y) },

  /**
    * Performs a substraction operation on two matrices.
    *
    * @param {MatrixArray} a - First matrix.
    * @param {number|MatrixArray} b - Second matrix or fill value.
    * @return {MatrixArray} A new matrix.
    */
  sub(a, b) { return Mtx.op(a, b, (x, y) => x - y) },

  /**
    * Performs a multiplication operation on two matrices.
    * @param {MatrixArray} a - First matrix.
    * @param {MatrixArray|number} b - Second matrix or fill value.
    * @return {MatrixArray} A new matrix.
    */
  mpy(a, b) { return Mtx.op(a, b, (x, y) => x * y) },

  /**
    * Performs a division operation on two matrices.
    *
    * @param {MatrixArray} a - First matrix.
    * @param {MatrixArray|number} b - Second matrix or fill value.
    * @return {MatrixArray} A new matrix.
    */
  div(a, b) { return Mtx.op(a, b, (x, y) => x / y) },

  /**
    * Performs an operation on two matrices using the given callback function.
    *
    * @param {MatrixArray} a - First matrix.
    * @param {MatrixArray|number} b - Second matrix or fill value.
    * @param {function} c - Callback function to operate on both matrices.
    * @return {MatrixArray} A new matrix.
    */
  op(a, b, c) {
    if (typeof b == 'number') b = Mtx.fill(a.length, a[0].length, b)
    return a.map((x, i) => x.map((y, j) => c(y, b[i][j])))
  },

  /**
    * Creates and fills a new matrix.
    *
    * @param {number} r - Number of rows.
    * @param {MatrixRowArray|number} c - Number of columns or an array with columns.
    * @param {number|null} v - The fill value.
    * @return {MatrixArray} A new matrix.
    */
  fill(r, c, v) {
    return [...new Array(r)].map(_ => Mtx.row(c, v || 0))
  },

  /**
   * Creates a row of the given numeric value, or returns the given column.
   * 
   * @param {number} c - Number of columns or an array with columns.
   * @param {MatrixRowArray|number} v - 
   * @returns {MatrixRowArray} The given row or a new row filled with the given value.
   */
  row(c, v) {
    return typeof c == 'number' ? [...new Array(c)].map(_ => v) : c
  }
};
