// Global variables

var playerCharacter;
var playerCharacterName;
var characterArray = [];
var randomChar;
var finalChoice;
var computerCharacterName;

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
        document.getElementById('Rexxor').style.border = "";
        characterArray.push('Thulsa', 'Zula', 'Rexxor')
    } else if (id == 'Thulsa') {
        document.getElementById('Conan').style.border = "";
        document.getElementById('Zula').style.border = "";
        document.getElementById('Rexxor').style.border = "";
        characterArray.push('Conan', 'Zula', 'Rexxor')
    } else if (id == 'Zula') {
        document.getElementById('Conan').style.border = "";
        document.getElementById('Thulsa').style.border = "";
        document.getElementById('Rexxor').style.border = "";
        characterArray.push('Conan', 'Thulsa', 'Rexxor')
    } else if (id == 'Rexxor') {
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

    document.getElementById('characterName').innerHTML = playerCharacterName;
    document.getElementById('characterImage').src = playerCharacter + '.jpg';
    document.getElementById("item" + playerCharacter).outerHTML = "";
    document.getElementById('characterGrid').style.setProperty('grid-template-columns', '100px 100px 100px');
    document.getElementById("buttonArena").disabled = true;

    if (playerCharacter == "Conan") {

        document.getElementById('Thulsa').onclick = null;
        document.getElementById('Zula').onclick = null;
        document.getElementById('Rexxor').onclick = null;
        document.getElementById('Thulsa').style.pointerEvents = "none";
        document.getElementById('Zula').style.pointerEvents = "none";
        document.getElementById('Rexxor').style.pointerEvents = "none";
    }
    if (playerCharacter == "Thulsa") {
        document.getElementById('Conan').onclick = null;
        document.getElementById('Zula').onclick = null;
        document.getElementById('Rexxor').onclick = null;
        document.getElementById('Conan').style.pointerEvents = "none";
        document.getElementById('Zula').style.pointerEvents = "none";
        document.getElementById('Rexxor').style.pointerEvents = "none";
    }
    if (playerCharacter == "Zula") {
        document.getElementById('Thulsa').onclick = null;
        document.getElementById('Conan').onclick = null;
        document.getElementById('Rexxor').onclick = null;
        document.getElementById('Thulsa').style.pointerEvents = "none";
        document.getElementById('Conan').style.pointerEvents = "none";
        document.getElementById('Rexxor').style.pointerEvents = "none";
    }
    if (playerCharacter == "Rexxor") {
        document.getElementById('Thulsa').onclick = null;
        document.getElementById('Zula').onclick = null;
        document.getElementById('Conan').onclick = null;
        document.getElementById('Thulsa').style.pointerEvents = "none";
        document.getElementById('Zula').style.pointerEvents = "none";
        document.getElementById('Conan').style.pointerEvents = "none";
    }

    setTimeout(computerChooses1, 1500);
    setTimeout(toggle, 2000);
    setTimeout(computerChooses2, 3000);
    setTimeout(toggle, 3500);
    setTimeout(computerChooses3, 4500);
    setTimeout(toggle, 5000);
    setTimeout(computerChooses4, 6000);
    setTimeout(toggle, 6500);
    setTimeout(computerChoosesFinal, 7500);
    setTimeout(toggleFinalChoiceOff, 7600);
    setTimeout(toggleFinalChoiceOn, 7700);
    setTimeout(toggleFinalChoiceOff, 7800);
    setTimeout(toggleFinalChoiceOn, 7900);
    setTimeout(toggleFinalChoiceOff, 8000);
    setTimeout(toggleFinalChoiceOn, 8100);
    setTimeout(computerEntersArena, 8500);

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

function computerEntersArena() {

    if (finalChoice == "Thulsa") {
        computerCharacterName = "Thulsa Doom";
    } else computerCharacterName = finalChoice;

    document.getElementById('computerCharacterName').innerHTML = computerCharacterName;
    document.getElementById('computerCharacterImage').src = finalChoice + '.jpg';
    document.getElementById("item" + finalChoice).outerHTML = "";
    document.getElementById('characterGrid').style.setProperty('grid-template-columns', '100px 100px');
    document.getElementById("buttonFight").disabled = false;
}

// global variables

var playerHand = "Absent";
var computerHand;
var winner = "";
var round = 0;
var playerScore = 0;
var computerScore = 0;


// gameplay functions

function startGame() {

    document.getElementById('vs').innerHTML = "";
    document.getElementById("buttonFight").outerHTML = "";

    instructions();

    function resolveFight() {

        var computerArray = ['rock', 'paper', 'scissors']
        computerHand = computerArray[Math.floor(Math.random() * computerArray.length)];

        if (playerHand == 'rock' || playerHand == 'paper' || playerHand == 'scissors') {
            document.getElementById('arena' + playerHand).classList.remove('hidden');
        }

        document.getElementById('enemy' + computerHand).classList.remove('hidden');

        if (playerHand == 'rock' && computerHand == 'rock') {
            document.getElementById('infoText2').innerHTML = "Draw!";
            winner = "";
        }
        if (playerHand == 'rock' && computerHand == 'paper') {
            document.getElementById('infoText2').innerHTML = finalChoice + " wins this round!";
            winner = "computer";
        }
        if (playerHand == 'rock' && computerHand == 'scissors') {
            document.getElementById('infoText2').innerHTML = playerCharacter + " wins this round!";
            winner = "player";
        }

        if (playerHand == 'paper' && computerHand == 'rock') {
            document.getElementById('infoText2').innerHTML = playerCharacter + " wins this round!";
            winner = "player";
        }
        if (playerHand == 'paper' && computerHand == 'paper') {
            document.getElementById('infoText2').innerHTML = "Draw!";
            winner = "";
        }
        if (playerHand == 'paper' && computerHand == 'scissors') {
            document.getElementById('infoText2').innerHTML = finalChoice + " wins this round!";
            winner = "computer";
        }

        if (playerHand == 'scissors' && computerHand == 'rock') {
            document.getElementById('infoText2').innerHTML = finalChoice + " wins this round!";
            winner = "computer";
        }
        if (playerHand == 'scissors' && computerHand == 'paper') {
            document.getElementById('infoText2').innerHTML = playerCharacter + " wins this round!";
            winner = "player";
        }
        if (playerHand == 'scissors' && computerHand == 'scissors') {
            document.getElementById('infoText2').innerHTML = "Draw";
            winner = "";
        }

        if (playerHand == 'Absent' && computerHand == 'rock') {
            document.getElementById('infoText2').innerHTML = finalChoice + " wins this round!";
            winner = "computer";
        }
        if (playerHand == 'Absent' && computerHand == 'paper') {
            document.getElementById('infoText2').innerHTML = finalChoice + " wins this round!";
            winner = "computer";
        }
        if (playerHand == 'Absent' && computerHand == 'scissors') {
            document.getElementById('infoText2').innerHTML = finalChoice + " wins this round!";
            winner = "computer";
        }

    }

    setTimeout(playRound, 7000);

    function playRound() {

        if (playerScore < 3 && computerScore < 3) {

            setTimeout(newRound, 1000);
            setTimeout(countdown5, 2000);
            setTimeout(countdown4, 3000);
            setTimeout(countdown3, 4000);
            setTimeout(countdown2, 5000);
            setTimeout(countdown1, 6000);
            setTimeout(resolveFight, 7000);
            setTimeout(winningHandGold, 7000);
            setTimeout(toggleWinningHand, 7100);
            setTimeout(winningHandGold, 7200);
            setTimeout(toggleWinningHand, 7300);
            setTimeout(winningHandGold, 7400);
            setTimeout(toggleWinningHand, 7500);
            setTimeout(winningHandGold, 7600);
            setTimeout(keepScore, 8000);
            setTimeout(keepScore2, 8000);
            setTimeout(clearArena, 8000);
            setTimeout(endGame, 8000);
            setTimeout(playRound, 9000);
        }
    }
}

function setPlayerHand(id) {
    playerHand = id;
    if (playerHand == 'rock' || playerHand == 'paper' || playerHand == 'scissors') {
        document.getElementById(playerHand).style.color = "#00C851";
        setTimeout(togglePlayerHandOff, 500);
    }
}

function togglePlayerHandOff() {
    if (playerHand == 'rock' || playerHand == 'paper' || playerHand == 'scissors') {
        document.getElementById(playerHand).style.color = "black";
    }
}

function newRound() {
    round += 1;
    document.getElementById('infoText2').innerHTML = "Round " + round;
}

function countdown5() {
    document.getElementById('infoText2').innerHTML = "5";
}

function countdown4() {
    document.getElementById('infoText2').innerHTML = "4";
}

function countdown3() {
    document.getElementById('infoText2').innerHTML = "3";
}

function countdown2() {
    document.getElementById('infoText2').innerHTML = "2";
}

function countdown1() {
    document.getElementById('infoText2').innerHTML = "1";
}

function winningHandGold() {

    if (winner == "player") {
        document.getElementById('arenarock').style.color = "#ffbb33";
        document.getElementById('arenapaper').style.color = "#ffbb33";
        document.getElementById('arenascissors').style.color = "#ffbb33";
        document.getElementById('arenarock').style.setProperty('font-size', '50px');
        document.getElementById('arenapaper').style.setProperty('font-size', '50px');
        document.getElementById('arenascissors').style.setProperty('font-size', '50px');
    }
    if (winner == "computer") {
        document.getElementById('enemyrock').style.color = "#ffbb33";
        document.getElementById('enemypaper').style.color = "#ffbb33";
        document.getElementById('enemyscissors').style.color = "#ffbb33";
        document.getElementById('enemyrock').style.setProperty('font-size', '50px');
        document.getElementById('enemypaper').style.setProperty('font-size', '50px');
        document.getElementById('enemyscissors').style.setProperty('font-size', '50px');
    }
}

function toggleWinningHand() {
    if (winner == "player") {
        document.getElementById('arenarock').style.color = "black";
        document.getElementById('arenapaper').style.color = "black";
        document.getElementById('arenascissors').style.color = "black";
        document.getElementById('arenarock').style.setProperty('font-size', '40px');
        document.getElementById('arenapaper').style.setProperty('font-size', '40px');
        document.getElementById('arenascissors').style.setProperty('font-size', '40px');

    }
    if (winner == "computer") {
        document.getElementById('enemyrock').style.color = "black";
        document.getElementById('enemypaper').style.color = "black";
        document.getElementById('enemyscissors').style.color = "black";
        document.getElementById('enemyrock').style.setProperty('font-size', '40px');
        document.getElementById('enemypaper').style.setProperty('font-size', '40px');
        document.getElementById('enemyscissors').style.setProperty('font-size', '40px');
    }
}

function keepScore() {
    if (winner == "player") {
        playerScore += 1;
    }
    if (winner == "computer") {
        computerScore += 1;
    }
}

function keepScore2() {
    if (playerScore == 1) {
        document.getElementById('playerCircle1').style.color = "#00C851";
    }
    if (playerScore == 2) {
        document.getElementById('playerCircle2').style.color = "#00C851";
    }
    if (playerScore == 3) {
        document.getElementById('playerCircle3').style.color = "#00C851";
    }

    if (computerScore == 1) {
        document.getElementById('computerCircle3').style.color = "#00C851";
    }
    if (computerScore == 2) {
        document.getElementById('computerCircle2').style.color = "#00C851";
    }
    if (computerScore == 3) {
        document.getElementById('computerCircle1').style.color = "#00C851";
    }
}

function clearArena() {
    document.getElementById('arenarock').style.color = "black";
    document.getElementById('arenapaper').style.color = "black";
    document.getElementById('arenascissors').style.color = "black";
    document.getElementById('enemyrock').style.color = "black";
    document.getElementById('enemypaper').style.color = "black";
    document.getElementById('enemyscissors').style.color = "black";
    document.getElementById('arenarock').classList.add('hidden');
    document.getElementById('arenapaper').classList.add('hidden');
    document.getElementById('arenascissors').classList.add('hidden');
    document.getElementById('enemyrock').classList.add('hidden');
    document.getElementById('enemypaper').classList.add('hidden');
    document.getElementById('enemyscissors').classList.add('hidden');
    winner = "";
    playerHand = "Absent";
    computerHand = "";
}

function endGame() {
    if (playerScore == 3) {
        document.getElementById('infoText2').innerHTML = playerCharacterName + " wins the game in " + round + " rounds!";
    }
    if (computerScore == 3) {
        document.getElementById('infoText2').innerHTML = computerCharacterName + " wins the game in " + round + " rounds!";
    }
}

function instructions() {
    document.getElementById('infoText2').innerHTML = "Use the icons below your portrait to fight your enemy!";
    highlightHandsOn();
    setTimeout(highlightHandsOff, 1000);
    setTimeout(highlightHandsOn, 2000);
    setTimeout(highlightHandsOff, 3000);
    setTimeout(highlightHandsOn, 4000);
    setTimeout(highlightHandsOff, 5000);
    setTimeout(highlightHandsOn, 6000);
    setTimeout(highlightHandsOff, 7000);
}

function highlightHandsOn() {
    document.getElementById('rock').style.color = "#ffbb33";
    document.getElementById('paper').style.color = "#ffbb33";
    document.getElementById('scissors').style.color = "#ffbb33";
}

function highlightHandsOff() {
    document.getElementById('rock').style.color = "black";
    document.getElementById('paper').style.color = "black";
    document.getElementById('scissors').style.color = "black";
}