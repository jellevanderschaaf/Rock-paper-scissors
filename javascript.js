// Global variables

var playerCharacter;
var playerCharacterName;
var characterArray = [];
var randomChar;
var finalChoice;

// functions character selection

function chooseCharacter(id) {
    document.getElementById(id).style.border = "thick solid #00C851";
    playerCharacter = id;

    if (playerCharacter) {
        document.getElementById("buttonArena").disabled = false;
    }

    if (id == 'Conan') {
        document.getElementById('Thulsa').style.border = "";
        document.getElementById('Zula').style.border = "";
        document.getElementById('Rexor').style.border = "";
        characterArray.push('Thulsa', 'Zula', 'Rexor')
    } else if (id == 'Thulsa') {
        document.getElementById('Conan').style.border = "";
        document.getElementById('Zula').style.border = "";
        document.getElementById('Rexor').style.border = "";
        characterArray.push('Conan', 'Zula', 'Rexor')
    } else if (id == 'Zula') {
        document.getElementById('Conan').style.border = "";
        document.getElementById('Thulsa').style.border = "";
        document.getElementById('Rexor').style.border = "";
        characterArray.push('Conan', 'Thulsa', 'Rexor')
    } else if (id == 'Rexor') {
        document.getElementById('Conan').style.border = "";
        document.getElementById('Thulsa').style.border = "";
        document.getElementById('Zula').style.border = "";
        characterArray.push('Conan', 'Thulsa', 'Zula')
    }

    if (playerCharacter == "Thulsa") {
        playerCharacterName = "Thulsa Doom"
    } else playerCharacterName = playerCharacter;

};

function enterTheArena() {

    if (playerCharacter) {
        document.getElementById('characterName').innerHTML = playerCharacterName;
        document.getElementById('characterImage').src = playerCharacter + '.jpg';
        document.getElementById("item" + playerCharacter).outerHTML = "";
        document.getElementById('characterGrid').style.setProperty('grid-template-columns', '100px 100px 100px');
        document.getElementById("buttonArena").disabled = true;

    }

    setTimeout(computerChooses1, 1500);
    setTimeout(toggle, 2000);
    setTimeout(computerChooses2, 3000);
    setTimeout(toggle, 3500);
    setTimeout(computerChooses3, 4500);
    setTimeout(toggle, 5000);
    setTimeout(computerChooses4, 6000);
    setTimeout(toggle, 6500);
    setTimeout(computerChooses1, 7500);
    setTimeout(toggle, 8000);
    setTimeout(computerChooses2, 9000);
    setTimeout(toggle, 9500);
    setTimeout(computerChooses3, 10500);
    setTimeout(toggle, 11000);
    setTimeout(computerChooses4, 12000);
    setTimeout(toggle, 12500);
    setTimeout(computerChooses1, 13500);
    setTimeout(toggle, 14000);
    setTimeout(computerChooses2, 15000);
    setTimeout(toggle, 15500);
    setTimeout(computerChooses3, 16500);
    setTimeout(toggle, 17000);
    setTimeout(computerChooses4, 18000);
    setTimeout(toggle, 18500);
    setTimeout(computerChoosesFinal, 20000);
    setTimeout(toggleFinalChoiceOff, 20100);
    setTimeout(toggleFinalChoiceOn, 20200);
    setTimeout(toggleFinalChoiceOff, 20300);
    setTimeout(toggleFinalChoiceOn, 20400);
    setTimeout(toggleFinalChoiceOff, 20500);
    setTimeout(toggleFinalChoiceOn, 20600);

}

function computerChooses1() {
    document.getElementById('infoText').innerHTML = "Computer chooses";
    randomChar = characterArray[Math.floor(Math.random() * characterArray.length)];
    document.getElementById(randomChar).style.border = "thick solid #00C851";
}

function computerChooses2() {
    document.getElementById('infoText').innerHTML = "Computer chooses ."
    randomChar = characterArray[Math.floor(Math.random() * characterArray.length)];
    document.getElementById(randomChar).style.border = "thick solid #00C851";
}

function computerChooses3() {
    document.getElementById('infoText').innerHTML = "Computer chooses . ."
    randomChar = characterArray[Math.floor(Math.random() * characterArray.length)];
    document.getElementById(randomChar).style.border = "thick solid #00C851";
}

function computerChooses4() {
    document.getElementById('infoText').innerHTML = "Computer chooses . . ."
    randomChar = characterArray[Math.floor(Math.random() * characterArray.length)];
    document.getElementById(randomChar).style.border = "thick solid #00C851";
}

function toggle() {
    document.getElementById(randomChar).style.border = "";
}

function computerChoosesFinal() {
    finalChoice = characterArray[Math.floor(Math.random() * characterArray.length)];
    document.getElementById('infoText').innerHTML = "Computer picks " + finalChoice + "!"
    document.getElementById(finalChoice).style.border = "thick solid #00C851";
}

function toggleFinalChoiceOff() {
    document.getElementById(finalChoice).style.border = "";
}

function toggleFinalChoiceOn() {
    document.getElementById(finalChoice).style.border = "thick solid #00C851";
}