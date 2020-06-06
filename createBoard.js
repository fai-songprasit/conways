function createBoard (size) {
    // new Array creates a row with size number of cols
    let board = new Array(size);
        //for every cols create new row (row = size)
        for (i = 0; i < board.length; i++){
            board[i] = new Array(size);
        }
    return board
}

module.exports = createBoard
