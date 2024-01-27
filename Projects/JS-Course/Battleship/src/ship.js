class Ship{
    constructor(){
        //random length for ship
        this.length = Math.random() * (5 - 1) + 1;
        this.hitsIncurred = 0
        this.sunk = 0
    }
    hit() {
        this.hitsIncurred++
    }

    isSunk(){
        return this.hitsIncurred == this.length
    }


}