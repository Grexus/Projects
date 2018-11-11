import { TicTacToePlayerModel } from './../../models/tic-tac-toe-player-model';

export class TicTacToe{

    projectName: string;
    players: TicTacToePlayerModel[] = [];

    constructor(){
        this.projectName = "Tic Tac Toe";
        this.players = [
            {
                playerName: 'Player 1',
                playerScore: 0,
            },
            {
                playerName: 'Player 2',
                playerScore: 0,
            }
        ]
    }

    editPlayerName(i){
        
    }
}