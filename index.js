function startGame() {
  showScorecards();
  showIntro();
}

function showScorecards() {
  toggleElement(
    document.getElementsByClassName("scorecardContainer")[0],
    "hide"
  );
  document.getElementById("teamNameHome").innerHTML =
    document.getElementById("teamHome").value;
  document.getElementById("teamNameAway").innerHTML =
    document.getElementById("teamAway").value;
}

function showIntro() {
  toggleElement(document.getElementsByClassName("intro")[0], "hide");
}

function increaseScore(scId, scoreToIncrease) {
  document.getElementById(scId).innerHTML =
    parseInt(document.getElementById(scId).innerHTML) + scoreToIncrease;
}

function checkScores() {
  let homeScore = parseInt(document.getElementById("scHome").innerHTML);
  let awayScore = parseInt(document.getElementById("scAway").innerHTML);
  if (homeScore == awayScore) {
    document.getElementById(
      "resultsText"
    ).innerHTML += `It's a draw, well done to '${
      document.getElementById("teamNameHome").innerHTML
    }' & '${
      document.getElementById("teamNameAway").innerHTML
    }'. It's time for a rematch!`;
    toggleElement(document.getElementById("scHome"), "winnerOutline");
    toggleElement(document.getElementById("scAway"), "winnerOutline");
  } else if (homeScore > awayScore) {
    document.getElementById(
      "resultsText"
    ).innerHTML += `Congratulations to champions '${
      document.getElementById("teamNameHome").innerHTML
    }', unlucky '${
      document.getElementById("teamNameAway").innerHTML
    }', better luck next time!`;
    toggleElement(document.getElementById("scHome"), "winnerOutline");
  } else {
    document.getElementById(
      "resultsText"
    ).innerHTML += `Congratulations to champions '${
      document.getElementById("teamNameAway").innerHTML
    }', unlucky '${
      document.getElementById("teamNameHome").innerHTML
    }', better luck next time!`;
    toggleElement(document.getElementById("scAway"), "winnerOutline");
  }
}

function endGame() {
  checkScores();
  toggleElement(document.getElementsByClassName("btnContainer")[0], "hide");
  toggleElement(document.getElementsByClassName("btnContainer")[1], "hide");
  toggleElement(document.getElementsByClassName("results")[0], "hide");
  toggleElement(document.getElementById("btnEndGame"), "hide");
}

function restartGame() {
  showIntro();
}

function toggleElement(elementToHide, className) {
  elementToHide.classList.toggle(className);
}
