let greenBox = document.createElement("div").classList.add("bg-green");

let redBox = document.createElement('div').classList.add("bg-red");


const mainElement = document.querySelector('main');

mainElement.append(greenBox, redBox);



numbers = ['5', '4',];

function numbersCheck (numbers) {
    if (numbers % 2 == 0) {
        return greenBox.innerHTML += numbers[i];

    } else {
        redBox.innerHTML += numbers[i];
    }
};


console.log(numbersCheck(4));

