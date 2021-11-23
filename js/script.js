/* L'utente indica un livello di difficoltà 
in base al quale viene generata una griglia di gioco quadrata, 
in cui ogni cella contiene un numero tra quelli 
compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, 
la cella cliccata si colora di azzurro. */

const easy = document.getElementById("easy");
const play = document.getElementById("play");
const nascosto = document.getElementById("nascosto");

let diff = "easy";
let numDiff;

if(diff === 'easy'){
    numDiff = 100;

} else if(diff === 'normal'){
    numDiff = 81;

} else if(diff === 'hard'){
    numDiff = 49;
}

const bigSquare = document.querySelector(".square-container");

let squareDiff = dDiff(bigSquare, numDiff, diff);

const selezionato = document.querySelector(".square");
console.log(selezionato);

//FUNZIONI

// quando clicco su play compare la griglia
play.addEventListener("click", 

    function() {

        nascosto.classList.remove("hidden");

    }

);

//generatore di quadratini per ogni difficoltá
function dDiff(bigSquare, numDiff, diff){

    for(let i = 1; i <= numDiff; i++){

        let newSquare = `
    
            <div class="col square square-${diff}"><a href="#">${i}</a></div>
    
        `;

        bigSquare.innerHTML += newSquare;

    }

    
}

// quando clicco su una casella cambia colore di sfondo
selezionato.addEventListener("click", 

    function() {

        selezionato.classList.add("selected");

    }

);