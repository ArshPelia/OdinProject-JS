(()=>{"use strict";class o{x;y;occupiedBy=null;getValue(){return this.occupiedBy?"X":"."}}console.log("Script Started"),(new class{constructor(){this.rows=10,this.cols=10,this.board=[];for(let s=0;s<this.rows;s++){this.board[s]=[];for(let t=0;t<this.cols;t++)this.board[s].push(new o)}}printToConsole(){const o=this.board.map((o=>o.map((o=>o.getValue()))));console.log(o)}}).printToConsole(),console.log("Script Ended")})();