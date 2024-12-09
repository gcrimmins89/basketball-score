let homeScoreElement = document.getElementById("score-home");

let score = 0;

function increment(points) {
    score += points;
    homeScoreElement.textContent = score;
}


let awayScoreElement = document.getElementById("score-away");

let scoreA = 0;

function incrementA(points) {
    scoreA += points;
    awayScoreElement.textContent = scoreA;
}
