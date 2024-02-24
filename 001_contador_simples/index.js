const score = document.getElementById("score");
const incrementB = document.getElementById("increaseB");
const decrementB = document.getElementById("decreaseB");
const resetB = document.getElementById("resetB");

let actualScore = 0;

incrementB.onclick = function(){
    actualScore++;
    score.textContent = actualScore;
}

decrementB.onclick = function(){
    if(actualScore != 0){
        actualScore--;
        score.textContent = actualScore;
    }
}

resetB.onclick = function(){
    actualScore = 0;
    score.textContent = actualScore;
}