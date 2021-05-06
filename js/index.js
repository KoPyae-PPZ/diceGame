function checkResult() {
    let curTitle = document.getElementById("title");
    if(oneVal == twoVal) {
        curTitle.textContent = "Draw";
    } else if(oneVal > twoVal) {
        curTitle.textContent = "Player 1 Wins";
    } else {
        curTitle.textContent = "Player 2 Wins";
    }
};

function generateRdn() {
    let rdnNum = Math.floor(Math.random() * 6) + 1;
    return rdnNum;
};

function addImage(i) {
    var myVal = 0;
    if(i == 0) myVal = oneVal;
    else myVal = twoVal;
    let image = document.querySelectorAll(".diceImg");
    image[i].setAttribute("src", "images/dice" + myVal+".png");
    
};

let oneVal = generateRdn();
let twoVal = generateRdn();

addImage(0);
addImage(1);
checkResult();
