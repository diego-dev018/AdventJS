function drawRace(indices, length) {
    const maps = indices.map((n, i) => {
        const spaces = ' '.repeat(indices.length - 1 - i)
        let carril = ('~'.repeat(length)).split('')
        let put_index = n >= 0 ? n : n + length
        if (put_index) {
            carril[put_index] = 'r'
        }
        carril = carril.join('')
        return `${spaces}${carril} /${i + 1}`
    })
    return maps.join('\n')
}

console.log(drawRace([0, 5, -3], 10))

/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/