"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TicTacToe {
    constructor() {
        this.players = [];
        this.grid = [];
        this.projectName = "Tic Tac Toe";
        this.players = [
            {
                playerName: 'Player 1',
                editPlayerName: false,
                playerScore: 0,
                isActive: true
            },
            {
                playerName: 'Player 2',
                editPlayerName: false,
                playerScore: 0,
                isActive: false
            }
        ];
        this.grid = [
            {
                isMarked: false,
                playerMarked: null
            },
            {
                isMarked: false,
                playerMarked: null
            },
            {
                isMarked: false,
                playerMarked: null
            },
            {
                isMarked: false,
                playerMarked: null
            },
            {
                isMarked: false,
                playerMarked: null
            },
            {
                isMarked: false,
                playerMarked: null
            },
            {
                isMarked: false,
                playerMarked: null
            },
            {
                isMarked: false,
                playerMarked: null
            },
            {
                isMarked: false,
                playerMarked: null
            }
        ];
    }
    toggleEditPlayerName(i) {
        this.players[i].editPlayerName = !this.players[i].editPlayerName;
    }
    markSpace(i) {
        this.grid[i].isMarked = true;
    }
    toggleActivePlayer() {
        if (this.players[0].isActive) {
            this.players[0].isActive = false;
            this.players[1].isActive = true;
        }
        else {
            this.players[0].isActive = true;
            this.players[1].isActive = false;
        }
    }
}
exports.TicTacToe = TicTacToe;
//# sourceMappingURL=tictactoe.js.map