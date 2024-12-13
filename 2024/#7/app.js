function fixPackages(packages) {
    packages = packages.split('')
    const indexes = packages.reduce((acc, el, index) => {
        if(el === '(') {
            acc.start.push(index)
        }
        if(el === ')') {
            acc.end.push(index)
        }
        return acc
    }, { start: [], end: [] }); indexes.start.reverse()

    for (let i = 0; i < indexes.start.length; i++) {
        const start = indexes.start[i]
        const range = indexes.end[i] - indexes.start[i]
        const reversed = [...packages].slice(start + 1, start + range - (i * 2)).reverse()
        packages.splice(start, range + 1 - (i * 2), ...reversed)
    }

    return packages.join('')
}

console.log(fixPackages('a(bc(def)g)h'))
// console.log(fixPackages('a(b(cd(efg)))h'))
// console.log(fixPackages('a(b(c))e'))