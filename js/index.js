"use strict";

const numbGen = [];

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
    console.log(numbGen);
}


numControl(5);