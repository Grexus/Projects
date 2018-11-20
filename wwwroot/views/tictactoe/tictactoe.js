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
        if (this.ticTacToeGrid[row][cell] == 0) {
            this.ticTacToeGrid[row][cell] = this.activePlayer;
            this.checkWinner();
            this.toggleActivePlayer();
        }
    }
    checkWinner() {
        if (this.ticTacToeGrid[0][0] && this.ticTacToeGrid[0][1] && this.ticTacToeGrid[0][2] ||
            this.ticTacToeGrid[1][0] && this.ticTacToeGrid[1][1] && this.ticTacToeGrid[1][2] ||
            this.ticTacToeGrid[2][0] && this.ticTacToeGrid[2][1] && this.ticTacToeGrid[2][2]) {
            this.gameActive = false;
            alert("Winner");
            this.setWinner();
        }
        else if (this.ticTacToeGrid[0][0] && this.ticTacToeGrid[1][0] && this.ticTacToeGrid[2][0] ||
            this.ticTacToeGrid[0][1] && this.ticTacToeGrid[1][1] && this.ticTacToeGrid[2][1] ||
            this.ticTacToeGrid[0][2] && this.ticTacToeGrid[1][2] && this.ticTacToeGrid[2][2]) {
            this.gameActive = false;
            alert("Winner");
            this.setWinner();
        }
        else if (this.ticTacToeGrid[0][0] && this.ticTacToeGrid[1][1] && this.ticTacToeGrid[2][2] ||
            this.ticTacToeGrid[2][0] && this.ticTacToeGrid[1][1] && this.ticTacToeGrid[0][2]) {
            this.gameActive = false;
            alert("Winner");
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