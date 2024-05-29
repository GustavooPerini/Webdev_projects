const myInput = document.getElementById("myInput");
const result = document.getElementById("result");

const MIN = 1;
const MAX = 100;

let randomNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
let attempts = 0;
let guess;

console.log(randomNumber);

function compare(){

    guess = myInput.value;
    guess = Number(guess);

    if(guess < MIN || guess > MAX){
        result.textContent = "Digite um valor válido.";
    }
    else{
        attempts++;
        if(myInput.value < randomNumber){
            result.textContent = `Palpite baixo. Tente novamente(tentativa: ${attempts})`;
        }
        else if(myInput.value > randomNumber){
            result.textContent = `Palpite alto. Tente novamente(tentativa: ${attempts})`;
        }
        else if(myInput.value == randomNumber){
            result.textContent = `Você acertou!!! Foram necessárias ${attempts} tentativas`;
        }
    }
}

