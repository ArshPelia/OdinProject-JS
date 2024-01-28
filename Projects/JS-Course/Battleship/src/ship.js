class Ship{
    //init coordinates
    constructor(length, x, y, orientation){
        //random length for ship
        // this.length = Math.random() * (5 - 1) + 1;
        this.hitsIncurred = 0
        this.isSunk = false
        this.length = length
        this.x = x
        this.y = y 
        this.orientation= orientation
    }
    hit() {
        this.hitsIncurred++
        if(this.hitsIncurred == this.length){
            this.isSunk = true
        }
    }
}



export {Ship}