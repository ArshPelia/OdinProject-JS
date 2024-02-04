import { ScreenController } from "./UI";

const screen = new ScreenController();

screen.game.activeBoard.printToConsole()
console.log(screen.game.activeBoard.ships)
screen.game.inactiveBoard.printToConsole()
console.log(screen.game.inactiveBoard.ships)
