function createFrame(names) {
    let length_spaces = 0
    for (let i of names) {
        if (i.length > length_spaces) {
            length_spaces = i.length
        }
    }
    return `\
${'*'.repeat(length_spaces + 4)}
${names.map(name => `* ${name}${' '.repeat(length_spaces - name.length + 1)}*`).join('\n')}
${'*'.repeat(length_spaces + 4)}`
}

const frame = createFrame(['midu', 'madeval', 'educalvolpz'])
console.log(frame)