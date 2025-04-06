// you need to implement this function only
function rotate(matrix) {
  // your code here

  let row = matrix.length;
  let col = matrix[0].length;
  const rotated = Array.from({ length: col }, () => Array(row).fill(0));

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      rotated[j][row - i - 1] = matrix[i][j];
    }
  }

  return rotated;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const check = rotate(matrix);
console.log(check);
