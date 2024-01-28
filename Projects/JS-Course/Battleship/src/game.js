import { Player } from "./ship";
import { Gameboard } from "./gameboard"; // Make sure the path to your gameboard module is correct

class Game {
    constructor(){
        this.p1 = new Player("P1")
        this.p2 = new Player("P2")
        this.gameBoard = new Gameboard()
        this.activePlayer = this.p1
        this.switchPlayerTurn = () => {
            this.activePlayer = this.activePlayer === this.p1 ? this.p2 : this.p1;
          };
        this.getActivePlayer = () => this.activePlayer;
    }
    playRound(idx) {
        
        /*  This is where we would check for a winner and handle that logic,
            such as a win message. */
    
      };
}

export {Game}