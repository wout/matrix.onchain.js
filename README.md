# matrix.onchain.js
A micro JS library (363 bytes) for matrix operations.

This library is intended for use in environments where the available storage
space is very limited; like blockchains for example. Everything is stripped down
to the bare essentials.

![GitHub](https://img.shields.io/github/license/onchainjs/matrix.onchain.js)
![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/onchainjs/matrix.onchain.js)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/onchainjs/matrix.onchain.js/matrix.onchain.js%20CI)

## Usage

### Operating on matrices
Perform add, subtract, multiply and divide opterations on two given matrices.
For example:

```js
let a = [
  [1, 2, 3],
  [0, 1, 0]
]
let b = [
  [0, 0, 1],
  [1, 1, 1]
]
Mtx.add(a, b)
// => [
//   [1, 2, 4],
//   [1, 2, 1]
// ]
```

You also can pass a `number` value as the second argument to perform uniform
operations:

```js
let a = [
  [1, 2, 3],
  [0, 1, 0]
]
Mtx.mpy(a, 2)
// => [
//   [2, 4, 6],
//   [0, 2, 0]
// ]
```

The following methods are available:
- `Mtx.add(a, b)`
- `Mtx.sub(a, b)`
- `Mtx.mpy(a, b)`
- `Mtx.div(a, b)`

### Custom matrix operations
Perform any other operation on two matrices with equal dimensions.

For example, If you'd want to to a modulo operation:

```js
Mtx.op(a, b, (x, y) => x % y)
```

Of course, this also works with uniform operations:

```js
Mtx.op(a, 2, (x, y) => x % y)
```

### Creating new matrices
With the `fill` method, a new matrix can be created with a given number of rows
and columns:

```js
Mtx.fill(4, 3)
// => [
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0]
// ]
```

Optionally, an initial value can be passed as the third argument:

```js
Mtx.fill(4, 3, 2)
// => [
//   [2, 2, 2, 2],
//   [2, 2, 2, 2],
//   [2, 2, 2, 2]
// ]
```

## License
matrix.onchain.js is licensed under the terms of the MIT License.
