let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message
}
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if(!guess) {
        displayMessage('مشتی شماره وارد نکردیا 😂🤦‍♂️');
    } else if (guess === secretNumber) {
        displayMessage('ایول 👏😍 بیا اینم جایزت 🍬🤣🤣');
        document.querySelector('body').style.backgroundColor = '#17b331';
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber;
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'نزدیک شدی یکم برو پایین تر 😁😯' : 'نزدیک شدی یکم برو بالاتر 😁🤑');
            score --;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('ای بابا باختی که مشتی 💔😒')
            document.querySelector('body').style.backgroundColor = '#b51313';
            document.querySelector('.score').textContent = 0;
            document.querySelector('.number').textContent = secretNumber;
        }
    }
});
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('منتظر چی هستی مشتی حدس بزن خُب');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#363636';
    document.querySelector('.number').style.width = '15rem'
})