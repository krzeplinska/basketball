// javascript

let countHome = 0
let countGuest = 0
let countPeriod = 1
let countHomeFouls = 0
let countGuestFouls = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let period = document.getElementById("period-number")
let foulsHome = document.getElementById("fouls-home")
let foulsGuest = document.getElementById("fouls-guest")

// Timer
document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start-btn');
    const display = document.getElementById('timer-display');
    let countdownTimer;

    startButton.addEventListener('click', function() {
        if(countdownTimer) clearInterval(countdownTimer);

        let timeLeft = 20 * 60; // 20 minutes in seconds
        updateDisplay(timeLeft); // Update display immediately without waiting for 1 second

        countdownTimer = setInterval(function() {
            timeLeft -= 1;
            updateDisplay(timeLeft);

        }, 1000); // update every second
    });

    function updateDisplay(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        display.textContent = `${pad(minutes)}:${pad(remainingSeconds)}`;
    }

    function pad(n) {
        return n < 10 ? '0' + n : n;
    }
});

function addHomeScore1() {
    countHome += 1
    homeScore.textContent = countHome
    winnerStyle()
}

function addHomeScore2() {
    countHome += 2
    homeScore.textContent = countHome
    winnerStyle()
}

function addHomeScore3() {
    countHome += 3
    homeScore.textContent = countHome
    winnerStyle()
}

function addGuestScore1() {
    countGuest += 1
    guestScore.textContent = countGuest
    winnerStyle()
}

function addGuestScore2() {
    countGuest += 2
    guestScore.textContent = countGuest
    winnerStyle()
}

function addGuestScore3() {
    countGuest += 3
    guestScore.textContent = countGuest
    winnerStyle()
}

function winnerStyle(){
    homeScore.classList.remove("winner");
    guestScore.classList.remove("winner");
    if(countHome>countGuest) {
    homeScore.classList.add("winner");
    } else if (countGuest>countHome){
    guestScore.classList.add("winner");
    }
}

function addPeriod() {
    countPeriod += 1
    period.textContent = countPeriod
    if(countPeriod>=4)
        countPeriod = 0
}

function addFoulsHome(){
    countHomeFouls += 1
    foulsHome.textContent = countHomeFouls
}

function addFoulsGuest(){
    countGuestFouls += 1
    foulsGuest.textContent = countGuestFouls
}

function newGame(){
homeScore.textContent = 0
countHome = 0
guestScore.textContent = 0
countGuest = 0
period.textContent = 1
countPeriod = 1
foulsHome.textContent = 0
countHomeFouls = 0
foulsGuest.textContent = 0
countGuestFouls = 0
homeScore.classList.remove("winner");
guestScore.classList.remove("winner");
}