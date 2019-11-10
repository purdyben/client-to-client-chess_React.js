import HandleMovment from './HandleMovment';
import board from './board';

export const style = {

    WhiteTile: {
        backgroundImage: `url('./images/WhiteTile.png')`
    },
    BlackTile: {
        backgroundImage: `url('./images/BlackTile.png')`
    },
    OrangeTile: {
        backgroundImage: `url('./images/OrangeTile.png')`
    },
    GreenTile: {
        backgroundImage: `url('./images/GreenTile.png')`
    }
};

export const moveHandler = new HandleMovment();
export let moveCount = 0;
export var gameboard = board.popTile(board.getPrev, board.setDefaultBoard);
export function setBoard() {
    board.setDefaultBoard(this.gameboard);
    return this.gameboard
}
// export function resetMoves(tile) {
//     console.log('runging reset pawn')
//     console.log("reset", this.moveSet)
//     this.moveSet = tile.state.piece.getAllPosibleMoves()
// }

