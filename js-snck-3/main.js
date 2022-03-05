// Crea due tag div con due id diversi:
//    un div avrà il testo colorato di rosso mentre l'altro di verde.
//    Partendo da un array di numeri, creo una funzione che controlla se siano pari o dispari.
//    Se sono pari li stampo nell'div "rosso",
//    se sono dispari li stampo nell'div "verde".




let greenBox = document.createElement("div");
    greenBox.classList.add("green");

let redBox = document.createElement('div');
    redBox.classList.add("red");

const mainElement = document.querySelector('main');

let finalRedBox = mainElement.appendChild(redBox);
let finalGreenBox = mainElement.appendChild(greenBox);


const numbers = ['5', '4',];

function isEven(number){
    if ( number % 2 == 0 ){
        return true;
    }
    return false;
}

for ( let i = 0; i < numbers.length; i++) {
    if (isEven(numbers[i])) {
        greenBox.innerHTML += numbers[i] + ' è pari!';

    } else {
        redBox.innerHTML += numbers[i] + ' è dispari!';

    }
}



