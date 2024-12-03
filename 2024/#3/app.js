function organizeInventory(inventory) {
    return inventory.reduce((acc, el) => {
        let temp = {}
        if (!acc[el.category]) {
            temp[el.name] = el.quantity
            acc[el.category] = temp
        } else {
            if (!acc[el.category][el.name]) {
                acc[el.category][el.name] = el.quantity
            } else {
                acc[el.category][el.name] += el.quantity
            }
        }
        return acc
    }, {})
}

const inventary = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
]

console.log(organizeInventory(inventary))