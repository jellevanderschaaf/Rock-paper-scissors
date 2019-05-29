// Global variables

var playerCharacter;
var playerCharacterName;


var characterConan = "Conan";
var characterThulsaDoom = "Thulsa Doom";
var characterZula = "Zula";
var characterRexor = "Rexor";

// functions character selection

function chooseCharacter(id) {
    document.getElementById(id).style.border = "thick solid #00C851";
    playerCharacter = id;

    if (id == 'Conan') {
        document.getElementById('Thulsa').style.border = "";
        document.getElementById('Zula').style.border = "";
        document.getElementById('Rexor').style.border = "";
    } else if (id == 'Thulsa') {
        document.getElementById('Conan').style.border = "";
        document.getElementById('Zula').style.border = "";
        document.getElementById('Rexor').style.border = "";
    } else if (id == 'Zula') {
        document.getElementById('Conan').style.border = "";
        document.getElementById('Thulsa').style.border = "";
        document.getElementById('Rexor').style.border = "";
    } else if (id == 'Rexor') {
        document.getElementById('Conan').style.border = "";
        document.getElementById('Thulsa').style.border = "";
        document.getElementById('Zula').style.border = "";
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
    setTimeout(computerChooses2, 3000);
    setTimeout(computerChooses3, 4500);
    setTimeout(computerChooses4, 6000);
    setTimeout(computerChooses2, 7500);
    setTimeout(computerChooses3, 9000);
    setTimeout(computerChooses4, 10500);
    setTimeout(computerChooses2, 12000);
    setTimeout(computerChooses3, 13500);
    setTimeout(computerChooses4, 15000);

}

function computerChooses1() {
    document.getElementById('infoText').innerHTML = "Computer chooses";
}

function computerChooses2() {
    document.getElementById('infoText').innerHTML = "Computer chooses ."
}

function computerChooses3() {
    document.getElementById('infoText').innerHTML = "Computer chooses . ."
}

function computerChooses4() {
    document.getElementById('infoText').innerHTML = "Computer chooses . . ."
}