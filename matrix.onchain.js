const Matrix = {
  /**
    * Performs an addition operation on two matrices.
    * @param {number[][]} a - First matrix.
    * @param {number[][]} b  - Second matrix.
    * @return {number[][]} A new matrix.
    */
  add: (a, b) => Matrix.op(a, b, (x, y) => x + y),
  /**
    * Performs a substraction operation on two matrices.
    * @param {number[][]} a - First matrix.
    * @param {number[][]} b - Second matrix.
    * @return {number[][]} A new matrix.
    */
  sub: (a, b) => Matrix.op(a, b, (x, y) => x - y),
  /**
    * Performs a multiplication operation on two matrices.
    * @param {number[][]} a - First matrix.
    * @param {number[][]} b - Second matrix.
    * @return {number[][]} A new matrix.
    */
  mpy: (a, b) => Matrix.op(a, b, (x, y) => x * y),
  /**
    * Performs a division operation on two matrices.
    * @param {number[][]} a - First matrix.
    * @param {number[][]} b - Second matrix.
    * @return {number[][]} A new matrix.
    */
  div: (a, b) => Matrix.op(a, b, (x, y) => x / y),
  /**
    * Performs an operation on two matrices using the given callback function.
    * @param {number[][]} a - First matrix.
    * @param {number[][]} b - Second matrix.
    * @param {function} c - Callback function to operate on both matrices.
    * @return {number[][]} A new matrix.
    */
  op: (a, b, c) => a.map((x, i) => x.map((y, j) => c(y, b[i][j]))),
  /**
    * Creates and fills a new matrix.
    * @param {number} r - Number of rows.
    * @param {number} c - Number of columns.
    * @param {number|null} v - The fill value.
    * @return {number[][]} A new matrix.
    */
  fill: (r, c, v) => [...new Array(r)].map(_ => [...new Array(c)].map(_ => v || 0))
};
