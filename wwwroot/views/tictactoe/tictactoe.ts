import { TicTacToePlayerModel } from './../../models/tictactoe-player-model';
export class TicTacToe {

    public projectName: string;
    public player1: TicTacToePlayerModel;
    public player2: TicTacToePlayerModel;
    public activePlayer: number;
    public ticTacToeGrid: number[][];
    public gameActive: boolean;

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

    public markCell(row: number, cell: number) {
        if(this.ticTacToeGrid[row][cell] == 0) { 
            this.ticTacToeGrid[row][cell] = this.activePlayer;
            
            this.checkWinner();
            this.toggleActivePlayer();
        }
    }

    private checkWinner() {
        // Horizontal
        if (this.ticTacToeGrid[0][0] && this.ticTacToeGrid[0][1] && this.ticTacToeGrid[0][2] ||
            this.ticTacToeGrid[1][0] && this.ticTacToeGrid[1][1] && this.ticTacToeGrid[1][2] ||
            this.ticTacToeGrid[2][0] && this.ticTacToeGrid[2][1] && this.ticTacToeGrid[2][2]) {
                this.gameActive = false;
                alert("Winner");
                this.setWinner();
        } 
        
        // Vertical
        else if (this.ticTacToeGrid[0][0] && this.ticTacToeGrid[1][0] && this.ticTacToeGrid[2][0] ||
            this.ticTacToeGrid[0][1] && this.ticTacToeGrid[1][1] && this.ticTacToeGrid[2][1] ||
            this.ticTacToeGrid[0][2] && this.ticTacToeGrid[1][2] && this.ticTacToeGrid[2][2]) {
                this.gameActive = false;
                alert("Winner");
                this.setWinner();
        }

        // Across
        else if (this.ticTacToeGrid[0][0] && this.ticTacToeGrid[1][1] && this.ticTacToeGrid[2][2] ||
            this.ticTacToeGrid[2][0] && this.ticTacToeGrid[1][1] && this.ticTacToeGrid[0][2]) {
                this.gameActive = false;
                alert("Winner");
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