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

// Funzione di controllo vittoria del giocatore3

function arrayCompare(numbGen, winnerNumbers){
    if(numbGen.length !== winnerNumbers.length){
        return false;
    }
    // for ( let i = 0; i < numbGen; i++){
    //     if (numbGen[i] !== winnerNumbers[i]){
    //         return false;
    //     }
    // }
    return true;
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
                console.log("vero")
            }
            else{ 
                console.log("falso")
            }
        }
        console.log(`Numeri inseriti dal giocatore: ${playerList}`);
        console.log(`Numeri inseriti dal giocatore corretti sono: ${winnerNumbers}`);

        if (arrayCompare(numbGen, winnerNumbers) === true) {
            console.log(`Hai vinto! ${winnerNumbers} ${numbGen}`);
            document.getElementById("guessed").innerHTML = `Hai vinto! Hai indovinato tutti i numeri: ${winnerNumbers}`;

        }
        else if (arrayCompare(numbGen, winnerNumbers) === false){
            console.log(`Oh no hai perso... ${winnerNumbers} ${numbGen}`);
            document.getElementById("guessed").innerHTML = `Oh no, hai perso, hai indovinato solo ${winnerNumbers.length} numeri: ${winnerNumbers}`;
        }
        document.getElementById("result").innerHTML = `I numeri da indovinare erano: ${numbGen}`
    }, 1000);
}, 30000);