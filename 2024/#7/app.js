function fixPackages(packages) {
    packages = packages.split('')

    for (let i = 0; i < packages.length; i++) {
        
        if (packages[i] === ')') {
            const end = parseInt(i)
            let start = end

            while (packages[start] !== '(') {
                start--
            }
            const range = end - start

            const reversed = [...packages].slice(start + 1, end).reverse()
            
            packages.splice(start, range + 1, ...reversed)

            i = i - 2

            continue
        }
    }

    return packages.join('')
}

console.log(fixPackages('a(bc(def)g)h'))
// console.log(fixPackages('a(b(cd(efg)))h'))
// console.log(fixPackages('a(b(c))e'))