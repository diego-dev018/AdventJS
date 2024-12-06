function inBox(box) {
    for (let i of [0, box.length - 1]) {
        if (box[i].includes(' ') || box[i].includes('*')) {
            return false
        }
    }
    for (let place of box) {
        let hashtag = 0
        for (let object of place) {
            if (object === '#') {
                hashtag += 1
            } else if (object === '*' && hashtag === 1) {
                return true
            }
        }
    }
    return false
}


console.log(inBox([
    "#*#",
    "###",
    "###"
])) // ➞ true