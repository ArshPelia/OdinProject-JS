// main.js

import { Gameboard } from "./gameboard"; // Make sure the path to your gameboard module is correct

console.log("Script Started");

const g1 = new Gameboard(); // Declare g1 using 'const', and make sure Gameboard is imported correctly

g1.printToConsole();
g1.receiveAttack(1,1)
g1.receiveAttack(2,5)
g1.receiveAttack(7,3)
g1.receiveAttack(8,4)
g1.printToConsole();


console.log("Script Ended");
