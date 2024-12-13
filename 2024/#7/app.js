function fixPackages(packages) {
    const new_packages = []

    for (let word of packages) {
        if (word === ')') {
            let reversed = ''
            while(new_packages.at(-1) !== '(') {
                reversed += new_packages.pop()
            }
            new_packages.pop()
            new_packages.push(...reversed)
            continue
        }
        new_packages.push(word)
    }
    return new_packages.join('')
}

console.log(fixPackages('a(bc(def)g)h'))
// console.log(fixPackages('a(b(cd(efg)))h'))
// console.log(fixPackages('a(b(c))e'))