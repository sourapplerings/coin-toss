var clicks = 0;

function coinToss() {
    clicks++
    var random = Math.random();
    var res = 'Your Result';
    if (random <= 0.50) {
        res = 'You Got Heads!'
    } else {
        res = 'You Got Tails!'
    }
    document.getElementById('result').innerHTML = res;
    document.getElementById('show-result').innerHTML = `You have clicked ` + clicks + ` time(s)`;
}

let eventTarget = document.getElementById('button');

eventTarget.addEventListener('click', coinToss)