"use strict";

const numbGen = [];
const playerList = [];
const winnerNumbers = [];

//  	FUNCTION

//  Funzione Generazione numeri Randomici

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Funzione di controllo numeri generati uguali e se differenti inseriti nell'array

function numControl(cycle){
    while( numbGen.length < cycle ){
        const nmbrRandom = random(1, 100);
        if (numbGen.includes(nmbrRandom) === false) {
            numbGen.push(nmbrRandom);
        }

    }
    console.log(`Numeri generati dal computer: ${numbGen}`);
}

// MAIN

numControl(5);
document.getElementById("quizNumber").innerHTML = numbGen;

setTimeout(function() {
    document.getElementById("quizNumber").classList.add('d-none')
    setTimeout(function(){
        for( let i = 0; i < numbGen.length; i++){
            const playerNumber = Number(prompt(`inserisci i numero nella posizione: ${i+1}`));
            playerList.push(playerNumber);        
            if (playerList[i] == numbGen [i]){
                winnerNumbers.push(playerNumber);
            }
        }
        console.log(`Numeri inseriti dal giocatore: ${playerList}`);
        console.log(`Numeri inseriti dal giocatore corretti sono: ${winnerNumbers}`);
        if (winnerNumbers === numbGen) {
            console.log(`Hai vinto! ${winnerNumbers} ${numbGen}`);
        }
        else{
            console.log(`Oh no hai perso... ${winnerNumbers7} ${numbGen}`);
        }
    }, 1000);
}, 3000);