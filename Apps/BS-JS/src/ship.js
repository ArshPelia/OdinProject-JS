class Ship{
    //init coordinates
    constructor(len, orient){
        this.hitsIncurred = 0
        this.length = len
        this.orientation = orient
    }
    hit() {
        this.hitsIncurred++
    }

    isSunk(){
        return this.hitsIncurred == this.length
    }
}



export {Ship}