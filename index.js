'use strict';
//creating element
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const sccore0El = document.querySelector("#score--0");
const sccore1El =document.getElementById("score--1");
const current0El =document.getElementById("current--0")
const current1El =document.getElementById("current--1")
const diceEl =document.querySelector(".dice");
const btnNewEl =document.querySelector(".btn--new");
const btnRollEl =document.querySelector(".btn--roll");
const btnHoldEl =document.querySelector(".btn--hold");


//starting condition

sccore0El.textContent=0;
sccore1El.textContent=0;
diceEl.classList.add("hidden");
let scores=[0,0];

let currentScore =0;
let activePlayer =0;
let playing =true;

function switchPlayer (){
   document.getElementById(`current--${activePlayer}`).textContent=0;
   activePlayer = activePlayer === 0 ? 1 : 0;
   currentScore=0;
   player0El.classList.toggle("player--active");
   player1El.classList.toggle("player--active");
 
};

function init(){

   diceEl.classList.add("hidden");
   scores=[0,0];
   currentScore =0;
   activePlayer =0;
   playing =true;
   sccore0El.textContent=0;
   sccore1El.textContent=0;
   current0El.textContent=0;
   current1El.textContent=0;
   player0El.classList.remove("player--winner");
   player1El.classList.remove("player--winner");
   player0El.classList.add("player--active");
   player1El.classList.remove("player--winner");
};



btnRollEl.addEventListener("click", function(){
   if(playing){
 //generate the dice
    const dice=Math.trunc(Math.random() *6) +1;
   //  console.log(dice);

 //display the dice
    diceEl.classList.remove("hidden");
    diceEl.src =`dice_${dice}.png`;

 // if one occurs the swith the player
    if(dice !==1){
        currentScore += dice;
      //   current0El.textContent=currentScore;
      document.getElementById(`current--${activePlayer}`).textContent=currentScore;
    }
    else{
       switchPlayer();
      }
   }
});
btnHoldEl.addEventListener("click", function(){
   //Add current score to active player's score
   if(playing){
       scores[activePlayer] +=currentScore;
       document.getElementById(`score--${activePlayer}`).textContent =scores[activePlayer];

   //finish the game

   if(scores[activePlayer] >=100){
      diceEl.classList.add("hidden");
      playing=false;
      
      document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
      document.querySelector(`.player--${activePlayer}`).classList.remove("player--active")
   }
   else{
        //switch to the next player
      switchPlayer();
   }

 
}
});
btnNewEl.addEventListener("click", init);