const temp = document.getElementById("temp");
const celToFah = document.getElementById("celToFah");
const fahToCel = document.getElementById("fahToCel");
const result = document.getElementById("result");
let valor;


function converter(){

    if(celToFah.checked){
        valor = Number(temp.value);
        valor = 1.8*valor + 32;
        result.textContent = `${valor.toFixed(1)}°F`;
    }
    else if(fahToCel.checked){
        valor = Number(temp.value);
        valor = (valor - 32)/1.8;
        result.textContent = `${valor.toFixed(1)}°C`;
    }
    else{
        result.textContent = "Selecione uma unidade!";
    }
}
