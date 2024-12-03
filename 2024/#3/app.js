function organizeInventory(inventory) {
    return inventory.reduce((acc, {name, quantity, category}) => {
        if (!acc[category]) {
            acc[category] = { [name]: quantity }
        } else {
            acc[category][name] = acc[category][name] + quantity || quantity
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