function isOutOfBounds (index, array) {
    if (index < array.length && index >= 0){
        return false
    } else {
        return true
    }
}

module.exports = isOutOfBounds
