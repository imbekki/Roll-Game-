

//selcting elements// 
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const newEL = document.querySelector('.btn--new');
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const curr0EL = document.getElementById('current--0');
const curr1EL = document.getElementById('current--1');


let scores, currentScore, activePlayer, playing; 


const init = function(){
//starting conditions//
scores = [0, 0];
currentScore = 0;
activePlayer = 0;
playing = true;
score0El.textContent = 0;
score1EL.textContent = 0;
curr0EL.textContent = 0;
curr1EL.textContent = 0;
diceEl.classList.add('hidden');
player0El.classList.remove('player--winner');
player1El.classList.remove('player--winner');
player0El.classList.add('player--active');
player1El.classList.remove('player--active');
};

init();






const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0; 
    activePlayer = activePlayer === 0 ? 1 : 0; 
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};





//rolling dice functionality

roll.addEventListener('click', function(){
    if(playing){
    diceEl.classList.remove('hidden')
    const dice = Math.trunc(Math.random() * 6) + 1; 
    diceEl.src = `dice-${dice}.png`

    // переключатель игрока

    if(dice !== 1){
        currentScore += dice; 
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else{
        switchPlayer()
    }
    }
});






// hold button 
hold.addEventListener('click', function(){
    if(playing){
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if(scores[activePlayer] >= 50){
        playing = false
        diceEl.classList.add('hidden')
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    }else{
    switchPlayer()}
    }
});

newEL.addEventListener('click', init);







