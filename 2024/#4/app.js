function createXmasTree(height, ornament) {
    const low_head = 1 + ((height - 1) * 2)
    let new_piece = 1;
    const head = Array.from({ length: height }, (_, i) => {
        const fill = '_'.repeat(Math.ceil((low_head / 2) - i - 1));
        const piece = `${fill}${`${ornament}`.repeat(new_piece)}${fill}`;
        new_piece = new_piece + 2;
        return piece
    })
    const footer = Array.from({ length: 2 }, (_, i) => {
        const fill = '_'.repeat(Math.ceil((low_head / 2) - 1));
        return `${fill}#${fill}`
    })
    return head.concat(footer).join('\n')
}

const tree = createXmasTree(5, '*')
console.log(tree)