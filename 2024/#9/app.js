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

    const move_y = { U: -1, D: 1 }
    const move_x = { L: -1, R: 1 }
    if (mov === 'R' || mov === 'L') {
        pos.x = parseInt(pos.x) + (move_x[mov])
    } else {
        pos.y = parseInt(pos.y) + (move_y[mov])
    }

    try {        
        const fObj = board[pos.y][pos.x]
        if (fObj === 'o') {
            return 'crash'
        } else if (fObj === '*') {
            return 'eat'
        }
        return 'none'
    } catch {
        return 'crash'
    }
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