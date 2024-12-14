function moveTrain(board, mov) {
    const result = { '·': 'none', '*': 'eat' }

    let y = board.findIndex(b => b.includes('@'))
    let x = board[y].indexOf('@');
  
    if (mov == 'L') x--;
    else if (mov == 'R') x++;
    else if (mov == 'U') y--;
    else y++;
    const pos = board[y]?.[x]
    return result[pos] ?? 'crash'
}


const board = [
    '·····',
    '*····',
    '@····',
    'o····',
    'o····'
]

console.log(moveTrain(board, 'U')) // -> 'eat'
console.log(moveTrain(board, 'D')) // -> 'crash'
console.log(moveTrain(board, 'L')) // -> 'crash'
console.log(moveTrain(board, 'R')) // -> 'none'