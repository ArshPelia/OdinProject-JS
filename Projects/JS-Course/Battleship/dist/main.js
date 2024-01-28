(()=>{"use strict";class t{constructor(t,e,i,s){this.hitsIncurred=0,this.isSunk=!1,this.length=t,this.x=e,this.y=i,this.orientation=s}hit(){this.hitsIncurred++,this.hitsIncurred==this.length&&(this.isSunk=!0)}}class e{orientations=["v","h"];constructor(t){this.rows=10,this.cols=10,this.board=[],this.ships=[],this.player=t;for(let t=0;t<this.rows;t++){this.board[t]=[];for(let e=0;e<this.cols;e++)this.board[t].push(new s)}this.populateShips()}printToConsole(){const t=this.board.map((t=>t.map((t=>t.getValue()))));console.log(t)}populateShips(){for(;this.ships.length<5;){let e=Math.floor(Math.random()*this.orientations.length),i=this.orientations[e],s=Math.floor(10*Math.random()),r=Math.floor(10*Math.random()),o=Math.floor(5*Math.random())+1,a=this.validPlacement(o,s,r,i);if(!0===a[0]){let e=new t(o,s,r,a[1]);for(let t=0;t<o;t++)"vertical"===a[1]?this.board[s][r+t].placeShip(e):this.board[s+t][r].placeShip(e);this.ships.push(e)}}}validPlacement(t,e,i,s){if(e+t>this.rows||this.board[e][i].isOccupied())return[!1,""];if("v"==s){for(let s=i;s<i+t;s++)if(s>=this.cols||this.board[e][s].isOccupied())return[!1,""];for(let s=i;s<i+t;s++)if(s>=this.cols||this.board[e][s].isOccupied())return[!1,""];return i+t>=this.cols?[!1,""]:[!0,"vertical"]}for(let s=e;s<e+t;s++)if(s>=this.rows||this.board[s][i].isOccupied())return[!1,""];for(let s=e;s<e+t;s++)if(s>=this.rows||this.board[s][i].isOccupied())return[!1,""];return[!0,"horizontal"]}receiveAttack(t){const e=Math.floor((t-1)/10),i=(t-1)%10;if(e>=this.rows||i>=this.cols)return console.error("Invalid Hit: Out of Bounds"),-1;let s=this.board[e][i].strike();console.log("Attack at ("+e+","+i+") => "+s)}allSunk(){for(i in this.ships)if(0==i.isSunk())return!1;return!0}}class s{constructor(t,e){this.x=t,this.y=e,this.ship=null,this.misHit=!1,this.value=""}placeShip(t){this.ship=t,this.value="X"}isOccupied(){return!!this.ship}getValue(){return this.value}strike(){return this.isOccupied()?(this.ship.hit(),this.value="H",!0):(this.value="M",!1)}}class r{constructor(t){this.name=t,this.gameBoard=new e,this.sayName=function(){console.log(`Hello, I'm ${this.name}!`)}}}class o{constructor(){this.p1=new r("P1"),this.p2=new r("P2"),this.activePlayer=this.p1,this.inActivePlayer=this.p2,this.getActivePlayer=()=>this.activePlayer}switchPlayerTurn(){this.activePlayer=this.activePlayer===this.p1?this.p2:this.p1,this.inActivePlayer=this.inActivePlayer===this.p1?this.p2:this.p1}playRound(t){if(console.log(`${this.getActivePlayer().name} is striking at: ${t}...`),-1==this.inActivePlayer.gameBoard.receiveAttack(t)||-1==this.activePlayer.gameBoard.receiveAttack(t))return;const e=this.checkForWinner();if(e){console.log(`Player ${e.name} wins!`);const t=document.querySelector(".winner");document.querySelector(".board").remove(),t.textContent="",t.textContent="Winner: "+e.name}this.switchPlayerTurn(),console.log("Current Active Player: "+this.activePlayer.name+"'s ships: "),console.log(this.activePlayer.gameBoard.ships),console.log("Current Inactive Player: "+this.inActivePlayer.name+"'s ships: "),console.log(this.inActivePlayer.gameBoard.ships)}checkForWinner(){return this.inActivePlayer.gameBoard.ships.every((t=>t.isSunk))?this.activePlayer:null}}const a=new class{constructor(){this.game=new o,this.playerTurnDiv=document.querySelector(".turn");const t=document.querySelector(".board");document.querySelector(".p1Ships"),document.querySelector(".p2Ships"),this.updateScreen=()=>{t.textContent="";const e=this.game.getActivePlayer(),i=e.gameBoard.board;this.playerTurnDiv.textContent=`${e.name}'s turn...`;var s=0;i.forEach((e=>{e.forEach(((e,i)=>{s++;const r=document.createElement("button");r.classList.add("cell"),r.dataset.column=i,r.dataset.idx=s,r.textContent=e.getValue(),"X"==e.getValue()?r.style.backgroundColor="red":"M"==e.getValue()?r.style.backgroundColor="blue":"H"==e.getValue()&&(r.style.backgroundColor="green"),t.appendChild(r)}))}))},t.addEventListener("click",(t=>{const e=t.target.dataset.idx;e&&(this.game.playRound(e),this.updateScreen())})),this.updateScreen()}};a.game.p1.gameBoard,a.game.p2.gameBoard})();