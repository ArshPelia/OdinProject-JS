class Ship{
    //init coordinates
    hitsIncurred = 0
    sunk = false
    constructor(length, x, y, orientation){
        //random length for ship
        // this.length = Math.random() * (5 - 1) + 1;
        this.hitsIncurred = hitsIncurred
        this.sunk = sunk
        this.length = length
        this.x = x
        this.y = y 
        this.orientation= orientation
    }
    hit() {
        this.hitsIncurred++
    }

    isSunk(){
        if(this.hitsIncurred == this.length){
            this.sunk = true
            return true;
        }
        return false
    }


}