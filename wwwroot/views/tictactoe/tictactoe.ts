import { TicTacToeCellModel } from './../../models/tictactoe-cell-model';
import { TicTacToePlayerModel } from './../../models/tictactoe-player-model';
export class TicTacToe {

    public projectName: string;
    public player1: TicTacToePlayerModel;
    public player2: TicTacToePlayerModel;
    public activePlayer: number;
    public ticTacToeGrid: TicTacToeCellModel[][];
    public gameActive: boolean;

    constructor() {
        this.projectName = 'TicTacToe';
        this.activePlayer = 1;

        this.ticTacToeGrid = [
            [ {cellValue: 0 }, {cellValue: 0 }, {cellValue: 0 } ],
            [ {cellValue: 0 }, {cellValue: 0 }, {cellValue: 0 } ],
            [ {cellValue: 0 }, {cellValue: 0 }, {cellValue: 0 } ]
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

    public markCell(row: number, cell: number) {
        if(this.ticTacToeGrid[row][cell].cellValue == 0) { 
            this.ticTacToeGrid[row][cell].cellValue = this.activePlayer;
            
            this.checkWinner();
            this.toggleActivePlayer();
        }
    }

    private checkWinner() {
        // Horizontal
        if (this.ticTacToeGrid[0][0].cellValue && this.ticTacToeGrid[0][1].cellValue && this.ticTacToeGrid[0][2].cellValue ||
            this.ticTacToeGrid[1][0].cellValue && this.ticTacToeGrid[1][1].cellValue && this.ticTacToeGrid[1][2].cellValue ||
            this.ticTacToeGrid[2][0].cellValue && this.ticTacToeGrid[2][1].cellValue && this.ticTacToeGrid[2][2].cellValue) {
                this.gameActive = false;
                this.setWinner();
        } 
        
        // Vertical
        else if (this.ticTacToeGrid[0][0].cellValue && this.ticTacToeGrid[1][0].cellValue && this.ticTacToeGrid[2][0].cellValue ||
            this.ticTacToeGrid[0][1].cellValue && this.ticTacToeGrid[1][1].cellValue && this.ticTacToeGrid[2][1].cellValue ||
            this.ticTacToeGrid[0][2].cellValue && this.ticTacToeGrid[1][2].cellValue && this.ticTacToeGrid[2][2].cellValue) {
                this.gameActive = false;
                this.setWinner();
        }

        // Diagonal
        else if (this.ticTacToeGrid[0][0].cellValue && this.ticTacToeGrid[1][1].cellValue && this.ticTacToeGrid[2][2].cellValue ||
            this.ticTacToeGrid[2][0].cellValue && this.ticTacToeGrid[1][1].cellValue && this.ticTacToeGrid[0][2].cellValue) {
                this.gameActive = false;
                this.setWinner();
        }
    }

    private setWinner(){
        this.activePlayer == 1 ? 
        this.player1.isWinner = true :
        this.player2.isWinner = true;
    }

    private toggleActivePlayer() {
        this.activePlayer = this.activePlayer == 1 ? 2 : 1;
    }
}