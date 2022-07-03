const moves = [...[...Array(5).keys()].map(() => 'X'), ...[...Array(4).keys()].map(() => 'O')]

const isUnique = (arr) => [...new Set(arr)].length === 1;

const getWinners = (board) => {
  let winners = [];
  // Rows
  if (isUnique([board[0], board[1], board[2]])) winners.push(board[0])
  if (isUnique([board[3], board[4], board[5]])) winners.push(board[3])
  if (isUnique([board[6], board[7], board[8]])) winners.push(board[6])
  // Columns
  if (isUnique([board[0], board[3], board[6]])) winners.push(board[0])
  if (isUnique([board[1], board[4], board[7]])) winners.push(board[1])
  if (isUnique([board[2], board[5], board[8]])) winners.push(board[2])
  // Diagonals
  if (isUnique([board[0], board[4], board[8]])) winners.push(board[0])
  if (isUnique([board[2], board[4], board[6]])) winners.push(board[2])
  return winners;
}

export const generateBoard = () => {
  const board = [];
  const possibleMoves = [...moves];
  while(possibleMoves.length) {
    board.push(...possibleMoves.splice((Math.random() * possibleMoves.length), 1))
  }
  if (getWinners(board).length === 1) {
    console.log(board)
    return board;
  } else {
    // console.log('Not valid board')
    return generateBoard();
  }
}
