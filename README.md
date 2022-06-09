# matrix.onchain.js
A micro JS library (240 bytes) for matrix operations.

This library is intended for use in environments where the available storage
space is very limited; like blockchains for example. Everything is stripped down
to the bare essentials.

![GitHub](https://img.shields.io/github/license/onchainjs/matrix.onchain.js)
![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/onchainjs/matrix.onchain.js)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/onchainjs/matrix.onchain.js/matrix.onchain.js%20CI)

## Usage

### Operating on matrices
Perform operations on two matrices with equal dimensions. For example, If you'd
want to do a add operation:

```js
let a = [
  [1, 2, 3],
  [0, 1, 0]
]
let b = [
  [3, 2, 1],
  [1, 0, 1]
]

Mtx.op(a, b, (x, y) => x + y)
// => [
//      [4, 4, 4],
//      [1, 1, 1]
//    ]
```

Passing a numeric value as the second argument will first create a uniform
matrix of equal dimensions as the first, before performing the operation:

```js
Mtx.op(a, 2, (x, y) => x + y)
```

### Common operations
Often you'll need to repeat the same matrix operation multiple times. That's
where common operations come in.

First, register your favourite operation:

```js
Mtx.co['+'] = (x, y) => x + y
```

Then use and re-use that operation wherever needed:

```js
Mtx.op(a, b, Mtx.co['+'])
```

### Creating new matrices
With the `fill` method, a new matrix can be created with a given number of rows
and columns:

```js
Mtx.fill(3, 4)
// => [
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0]
// ]
```

Optionally, an initial value can be passed as the third argument:

```js
Mtx.fill(3, 4, 2)
// => [
//   [2, 2, 2, 2],
//   [2, 2, 2, 2],
//   [2, 2, 2, 2]
// ]
```

Alternatively, a full row with columns can be passed instead of the number of 
columns, to create a matrix with uniform columns:

```js
Mtx.fill(3, [0, 1, 0])
// => [
//   [0, 1, 0],
//   [0, 1, 0],
//   [0, 1, 0]
// ]
```

## License
matrix.onchain.js is licensed under the terms of the MIT License.
