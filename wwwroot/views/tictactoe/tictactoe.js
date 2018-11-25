"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TicTacToe {
    constructor() {
        this.projectName = 'TicTacToe';
        this.activePlayer = 1;
        this.ticTacToeGrid = [
            [{ cellValue: 0 }, { cellValue: 0 }, { cellValue: 0 }],
            [{ cellValue: 0 }, { cellValue: 0 }, { cellValue: 0 }],
            [{ cellValue: 0 }, { cellValue: 0 }, { cellValue: 0 }]
        ];
        this.player1 = {
            playerName: 'Player 1',
            playerScore: 0,
            isWinner: false
        };
        this.player2 = {
            playerName: 'Player 2',
            playerScore: 0,
            isWinner: false
        };
        this.gameActive = true;
    }
    markCell(row, cell) {
        if (this.ticTacToeGrid[row][cell].cellValue == 0 && this.gameActive) {
            this.ticTacToeGrid[row][cell].cellValue = this.activePlayer;
            this.checkWinner();
            this.toggleActivePlayer();
        }
    }
    checkWinner() { }
    toggleActivePlayer() {
        this.activePlayer = this.activePlayer == 1 ? -1 : 1;
    }
}
exports.TicTacToe = TicTacToe;
//# sourceMappingURL=tictactoe.js.map