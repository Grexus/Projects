import { TicTacToePlayerModel } from './../../models/tictactoe-player-model';
export class TicTacToe {

    public projectName: string;
    public player1: TicTacToePlayerModel;
    public player2: TicTacToePlayerModel;
    public activePlayer: number;
    public ticTacToeGrid: number[][];

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
        }
        
        this.player2 = {
            playerName: 'Player 2',
            playerScore: 0,
            isEditing: false
        }
    }

    public markCell(row: number, cell: number) {
        if(this.ticTacToeGrid[row][cell] == 0) { 
            this.ticTacToeGrid[row][cell] = this.activePlayer;
            this.toggleActivePlayer();
        }
    }

    private toggleActivePlayer() {
        this.activePlayer = this.activePlayer == 1 ? 2 : 1;
    }
}