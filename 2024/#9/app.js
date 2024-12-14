function moveTrain(board, mov) {
    let pos = { x: 0, y: 0 }
    for (let i in board) {
        for (let n in board[i]) {
            if (board[i][n] === '@') {
                pos.y = i
                pos.x = n
            }
        }
    }
    switch (mov) {
        case 'L':
            pos.x--
            break;
        case 'R':
            pos.x++
            break;
        case 'U':
            pos.y--
            break;
        case 'D':
            pos.y++
            break;
        default:
            break;
    }

    if (pos.x < 0 || pos.y < 0 || pos.x >= board[0].length || pos.y >= board.length || board[pos.y][pos.x] === 'o') {
        return 'crash'
    } else if (board[pos.y][pos.x] === '*') {
        return 'eat'
    }
    return 'none'
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