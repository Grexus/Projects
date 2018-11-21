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
        if (this.ticTacToeGrid[row][cell].cellValue == 0) {
            this.ticTacToeGrid[row][cell].cellValue = this.activePlayer;
            this.checkWinner();
            this.toggleActivePlayer();
        }
    }
    checkWinner() {
        if (this.ticTacToeGrid[0][0].cellValue && this.ticTacToeGrid[0][1].cellValue && this.ticTacToeGrid[0][2].cellValue ||
            this.ticTacToeGrid[1][0].cellValue && this.ticTacToeGrid[1][1].cellValue && this.ticTacToeGrid[1][2].cellValue ||
            this.ticTacToeGrid[2][0].cellValue && this.ticTacToeGrid[2][1].cellValue && this.ticTacToeGrid[2][2].cellValue) {
            this.gameActive = false;
            this.setWinner();
        }
        else if (this.ticTacToeGrid[0][0].cellValue && this.ticTacToeGrid[1][0].cellValue && this.ticTacToeGrid[2][0].cellValue ||
            this.ticTacToeGrid[0][1].cellValue && this.ticTacToeGrid[1][1].cellValue && this.ticTacToeGrid[2][1].cellValue ||
            this.ticTacToeGrid[0][2].cellValue && this.ticTacToeGrid[1][2].cellValue && this.ticTacToeGrid[2][2].cellValue) {
            this.gameActive = false;
            this.setWinner();
        }
        else if (this.ticTacToeGrid[0][0].cellValue && this.ticTacToeGrid[1][1].cellValue && this.ticTacToeGrid[2][2].cellValue ||
            this.ticTacToeGrid[2][0].cellValue && this.ticTacToeGrid[1][1].cellValue && this.ticTacToeGrid[0][2].cellValue) {
            this.gameActive = false;
            this.setWinner();
        }
    }
    setWinner() {
        this.activePlayer == 1 ?
            this.player1.isWinner = true :
            this.player2.isWinner = true;
    }
    toggleActivePlayer() {
        this.activePlayer = this.activePlayer == 1 ? 2 : 1;
    }
}
exports.TicTacToe = TicTacToe;
//# sourceMappingURL=tictactoe.js.map