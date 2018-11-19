"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TicTacToe {
    constructor() {
        this.projectName = 'TicTacToe';
        this.activePlayer = 1;
        this.ticTacToeGrid = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        this.player1 = {
            playerName: 'Player 1',
            playerScore: 0,
            isEditing: false
        };
        this.player2 = {
            playerName: 'Player 2',
            playerScore: 0,
            isEditing: false
        };
    }
    markCell(row, cell) {
        if (this.ticTacToeGrid[row][cell] == 0) {
            this.ticTacToeGrid[row][cell] = this.activePlayer;
            this.toggleActivePlayer();
        }
    }
    toggleActivePlayer() {
        this.activePlayer = this.activePlayer == 1 ? 2 : 1;
    }
}
exports.TicTacToe = TicTacToe;
//# sourceMappingURL=tictactoe.js.map