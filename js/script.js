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

const bigSquare = document.querySelector(".square-container");

/* let selezionato = fSelezione(); */

let c = 0;


//FUNZIONI

//selezione della difficoltá
function selectDiff(){

    let x = document.getElementById("difficolta").selectedIndex;

    let y = document.getElementsByTagName("option")[x].value;

    return y;
};

// quando clicco su play compare la griglia in base al livello di difficolta
play.addEventListener("click", diffSelected);

function diffSelected() {

    c++;

    if(c === 1){
        let diff = selectDiff();

        let numDiff;

        if(diff === 'easy'){
            console.log(diff);
            numDiff = 100;

        } else if(diff === 'normal'){
            numDiff = 81;

        } else if(diff === 'hard'){
            numDiff = 49;
        }

        nascosto.classList.remove("hidden");

        let squareDiff = dDiff(bigSquare, numDiff, diff);
    }

}

//generatore di quadratini per ogni difficoltá
function dDiff(bigSquare, numDiff, diff){

    for(let i = 1; i <= numDiff; i++){

        let newSquare = `
    
            <div class="col square square-${diff}"><a href="#">${i}</a></div>
    
        `;

        bigSquare.innerHTML += newSquare;

    }

};

//
function fSelezione(){

    let selezionato = document.querySelector(".square");
    console.log(selezionato);

    return selezionato;

}

// quando clicco su una casella cambia colore di sfondo
/* selezionato.addEventListener("click", 

    function() {

        this.classList.add("selected");

    }

); */


