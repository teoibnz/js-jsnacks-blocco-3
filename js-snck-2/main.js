let userNumber = parseInt( prompt('Inserisci un numero'));

for (i = 0; i < userNumber; i++) {
    let tempArray = [];
        while (tempArray.length < 10) {
            tempArray.push(Math.floor(Math.random(4) * 4532));
        };
};


console.log(tempArray);