const inputs = document.querySelector(".inputs"),
resetBtn = document.querySelector(".reset-Btn"),
hint = document.querySelector(".hint span"),
typingInput = document.querySelector(".typing-input"),
timer = document.getElementById("countdown");


let word, correct = [], incorrect = [];

function randomWord() {
   //Getting random object from wordList
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranObj.word; // getting word from random object
    console.log(word);

    hint.innerText = ranObj.hint;

    let html = ""
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`;
    }
    inputs.innerHTML = html;
}

randomWord();

function initGame(e) {
    let key = e.target.value;
    if(key.match(/^[A-Za-z]+$/)) {
        console.log(key);
        if(word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if (word[i] === key) {
                    inputs.querySelectorAll("input")[i].value = key
                }
                
            }
        } else {
            console.log("letter not found")
        }
    }
    typingInput.value = ""
}

function countdown() {
    var timeLeft = 75;

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timeLeft --;
        } else if (word, incorrect) {
            timeLeft -5;

        }
    },1000)
};


resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
document.addEventListener("keydown", () => typingInput.focus());
timer.addEventListener(".typing-input", countdown )
 