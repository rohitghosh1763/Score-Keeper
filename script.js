const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const thresholdInput = document.querySelector("#threshold");
const player1Btn = document.querySelector("#player1btn");
const player2Btn = document.querySelector("#player2btn");
const resetBtn = document.querySelector("#reset");
let player1Score = +player1.innerText;
let player2Score = +player2.innerText;
function endGame() {
    player1Btn.disabled = true;
    player2Btn.disabled = true;
    player1Btn.style.backgroundColor = "#b6d4cf";
    player2Btn.style.backgroundColor = "#b9cede";
}
function CheckGameOver() {
    let threshold = +thresholdInput.value;
    if (player1Score === threshold) {
        player1.style.color = "green";
        player2.style.color = "red";
        endGame();
    } else if (player2Score === threshold) {
        player2.style.color = "green";
        player1.style.color = "red";
        endGame();
    }
}
function reset() {
    player1.textContent = 0;
    player2.textContent = 0;
    player1Score = 0;
    player2Score = 0;
    player1Btn.disabled = false;
    player2Btn.disabled = false;
    player2.style.color = "black";
    player1.style.color = "black";
    player1Btn.style.backgroundColor = "#0ebc9f";
    player2Btn.style.backgroundColor = "#2a8dd7";
}
player1Btn.addEventListener("click", () => {
    player1Score++;
    player1.textContent = player1Score;
    CheckGameOver();
});
player2Btn.addEventListener("click", () => {
    player2Score += 1;
    player2.textContent = player2Score;
    CheckGameOver();
});

resetBtn.addEventListener("click", () => {
    reset();
});
thresholdInput.addEventListener("change", function (e) {
    reset();
});
