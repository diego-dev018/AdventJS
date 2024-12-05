function organizeShoes(shoes) {
    return shoes.reduce((acc, el) => {
        const found = shoes.find(n => {
            if (
                n.size === el.size
                && n.type === 'R' 
                && el.type === 'I'
                && !acc.find(i => i === n)
            ) {
                return true
            }
        })
        if (found) {
            acc.push(found)
        }
        return acc
    }, []).map(n => n.size)
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