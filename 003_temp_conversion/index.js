const input = document.getElementById("temp");
const cel_to_fah = document.getElementById("cel_to_fah");
const fah_to_cel = document.getElementById("fah_to_cel");
const submit = document.getElementById("submit");
const result = document.getElementById("result");
let valor;

submit.onclick = function(){

    valor = Number(input.value);

    if(cel_to_fah.checked){
        valor = 1.8*valor + 32;
        result.textContent = valor.toFixed(1) + "°F";
    }
    else if(fah_to_cel.checked){
        valor = (valor - 32)/1.8;
        result.textContent = valor.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Escolha uma conversão!";
    }
}

