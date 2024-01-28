import { Gameboard } from "./gameboard"; // Make sure the path to your gameboard module is correct


class Player {
    constructor(name,) {
        this.name = name;
        this.gameBoard = new Gameboard()
        this.sayName = function() {
            console.log(`Hello, I'm ${this.name}!`);
          };
    }
}

class Game {
    constructor(){
        this.p1 = new Player("P1")
        this.p2 = new Player("P2")
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