function organizeShoes(shoes) {
    let pairs = []
    const toOrderMap = shoes.reduce((acc, { type, size }) => {
        acc[size] ??= { I: 0, R: 0}
        acc[size][type] += 1
        return acc
    }, {})
    for (let size in toOrderMap) {
        const toCheck = Math.min(toOrderMap[size]['I'], toOrderMap[size]['R'])
        for(const _ in Array.from({length: toCheck})) pairs.push(+size)
    }
    return pairs
}

const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
]

console.log(organizeShoes(shoes))
// [38, 42]
  
const shoes2 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
]
// [38, 38]
console.log(organizeShoes(shoes2))
  
  const shoes3 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 36 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
]

console.log(organizeShoes(shoes3))
// []