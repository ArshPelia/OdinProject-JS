// main.js

import { ScreenController } from "./screen"; // Make sure the path to your gameboard module is correct

console.log("Script Started");

const screen = new ScreenController(); // Declare g1 using 'const', and make sure Gameboard is imported correctly
const g1 = screen.game.gameBoard

g1.printToConsole();
g1.receiveAttack(1,1)
g1.receiveAttack(2,5)
g1.receiveAttack(7,3)
g1.receiveAttack(8,4)
g1.printToConsole();


console.log("Script Ended");
