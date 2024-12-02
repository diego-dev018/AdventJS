function createFrame(names) {
    let length_spaces = names.toSorted((a, b) => a.length - b.length).at(-1).length
    const border = '*'.repeat(length_spaces + 4)
    return `\
${border}
${names.map(name => `* ${name}${' '.repeat(length_spaces - name.length + 1)}*`).join('\n')}
${border}`
}

const frame = createFrame(['midu', 'madeval', 'educalvolpz'])
console.log(frame)