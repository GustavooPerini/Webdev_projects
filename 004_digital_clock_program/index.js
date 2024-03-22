/*function relogio(){
    const actualTime = new Date();

    let hours = actualTime.getHours;
    const meridiem = hours >= 12 && hours != 24 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, "0");
    const minutes = actualTime.getMinutes().toString().padStart(2, "0");
    const seconds = actualTime.getSeconds().toString().padStart(2, "0");

    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds} ${meridiem}`;
}*/

function relogio(){
    const actualTime = new Date();

    const hours = actualTime.getHours().toString().padStart(2, "0");
    const minutes = actualTime.getMinutes().toString().padStart(2, "0");
    const seconds = actualTime.getSeconds().toString().padStart(2, "0");

    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`
}

relogio();
setInterval(relogio, 1000); // mesma coisa do setTimeout, porém chama a função de callback em loop