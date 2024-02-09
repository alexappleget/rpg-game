let health = 100;
let gold = 0;
let power = 0;

//stats
const healthText = document.querySelector('#health');
const goldText = document.querySelector('#gold');
const powerText = document.querySelector('#power');

//buttons
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');

//text
const text = document.querySelector('#text');

//clicking buttons
button1.onclick = goStore;
button2.onclick = goTrain;
button3.onclick = endBoss;

//blocks
const locations = [
    {
        name: 'town square',
        'button text': ['Go to Store', 'Go Train', 'End Boss'],
        'button function': [goStore, goTrain, endBoss],
        text: 'You wake up unconscious with only a stick in your hand...'
    },
    {
        name: 'store',
        'button text': ['Upgrade Weapon(10 gold)', 'Upgrade Health(10 gold)', 'Go Back'],
        'button function': [buyWeapon, buyHealth, goBack],
        text: 'Welcome to the Store!'
    },
    {
        name: 'train',
        'button text': ['Fight the rat!', 'Fight the dragon!', 'Go Back'],
        'button function': [fightRat, fightDragon, goBack],
        text: 'You are surrounded...'
    },
    {
        name: 'boss',
        'button text': ['Attack!', '', 'Go Back'],
        'button function': [atkBoss, '', goBack],
        text: 'The final fight has come. Are you ready?'
    }
];

// update area function
function update(area) {
    button1.innerText = area['button text'][0];
    button2.innerText = area['button text'][1];
    button3.innerText = area['button text'][2];
    button1.onclick = area['button function'][0];
    button2.onclick = area['button function'][1];
    button3.onclick = area['button function'][2];
    text.innerText = area.text;
};

//store javascript
function goStore() {
    update(locations[1]);
};

function buyWeapon() {
    if(gold >= 10) {
        gold -= 10;
        power += 10;
        goldText.innerText = gold;
        powerText.innerText = power;
    } else {
        text.innerText = 'You cannot afford a weapon!';
    }
};

function buyHealth() {
    if(gold >= 10) {
        gold -= 10;
        health += 10;
        goldText.innerText = gold;
        healthText.innerText = health;
    } else {
        text.innerText = 'You cannot afford more health!';
    }
};

// Train javascript
function goTrain() {
    update(locations[2]);
};

function fightRat() {
    if(power >= 0) {
        power += 100;
        health -= 5;
        gold += 7;
        powerText.innerText = power;
        healthText.innerText = health;
        goldText.innerText = gold;
    } else {
        text.innerText = 'Sorry you are too weak!';
    }
};

function fightDragon() {
    if (power >= 500) {
        power += 5;
        health -= 10;
        gold += 15;
        powerText.innerText = power;
        healthText.innerText = health;
        goldText.innerText = gold;
    } else {
        text.innerText = 'Sorry you are too weak!';
    }
};

// Go Back function
function goBack() {
    update(locations[0]);
};

// End Boss!!!!
function endBoss() {
    update(locations[3]);
};

function atkBoss() {
    if (power >= 999) {
        text.innerText = 'You defeated the boss and the world is saved! Game over!';
    } else {
        text.innerText = 'You are still too weak. Go back and train!';
    }
};