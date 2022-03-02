const userNumber = parseInt(prompt('inserisci un numero'));

for (i = 0; i < userNumber; i++) {
    const mainArrays =[];
        while (mainArrays < 10) {
            mainArrays.push(Math.floor(Math.random(4 * 4526) + 8));
            i++
        }

};

console.log(mainArrays);