import { TicTacToeGridModel } from './../../models/tic-tac-toe-grid-model';
import { TicTacToePlayerModel } from './../../models/tic-tac-toe-player-model';

export class TicTacToe{

    projectName: string;
    players: TicTacToePlayerModel[] = [];
    grid: TicTacToeGridModel[] = [];

    constructor(){
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
        ]
        this.grid = [
            { playerMarked: -1 },
            { playerMarked: -1 },
            { playerMarked: -1 },
            { playerMarked: -1 },
            { playerMarked: -1 },
            { playerMarked: -1 },
            { playerMarked: -1 },
            { playerMarked: -1 },
            { playerMarked: -1 }
        ]
    }

    toggleEditPlayerName(i){
        this.players[i].editPlayerName = !this.players[i].editPlayerName;
    }

    markSpace(i){
        if(this.grid[i].playerMarked < 0){
            if(this.players[0].isActive){
                this.grid[i].playerMarked = 0;
            } else if (this.players[1].isActive) {
                this.grid[i].playerMarked = 1;
            }

            this.toggleActivePlayer();
        }
    }

    toggleActivePlayer(){
        if(this.players[0].isActive){
            this.players[0].isActive = false;
            this.players[1].isActive = true;
        } else {
            this.players[0].isActive = true;
            this.players[1].isActive = false; 
        }
    }
}