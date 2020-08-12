function isOverPopulated (neighbourCount) {
    if (neighbourCount <= 3) {
        return false
    } else {
        return true
    }
}

module.exports = isOverPopulated
