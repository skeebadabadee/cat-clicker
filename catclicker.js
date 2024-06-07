/* Moya Cronin */

// /* Highscore Table */
// var highscore = [
//   { name: "--", score: 0 },
//   { name: "--", score: 0 },
//   { name: "--", score: 0 },
//   { name: "--", score: 0 },
//   { name: "--", score: 0 },
// ];

// function getScoreTable() {
//   html = "<table id = 'scores'>";

//   for (var i = 0; i < 5; i++) {
//     html += "<tr><td>";

//     html += i + 1;

//     html += "</td><td>";

//     html += highscore[i].name;

//     html += "</td><td>";

//     html += highscore[i].score;

//     html += "</td></tr>";
//   }

//   html += "</table>";

//   return html;
// }

// function updateTable() {
//   var newhtml = getScoreTable();

//   document.getElementById("highscoretable").innerHTML = newhtml;
// }

// window.addEventListener("load", updateTable);

// function sortScores(a, b) {
//   if (parseInt(b.score) < parseInt(a.score)) return -1;
//   else return 1;
// }
// function addToTable() {
//   var newscore = document.getElementById("scorein").value;

//   document.getElementById("scorein").value = "";

//   var newname = document.getElementById("namein").value;

//   document.getElementById("namein").value = "";

//   highscore.push({ name: newname, score: newscore });

//   highscore.sort(sortScores);

//   updateTable();
// }

/* Game Timer */
// var settime = 15;
// var level = 1;
var click = 0;
var pps = 0;
// var outOfTime = false;
// var highScore = 0;
// var time = settime;
// var started = false;

// function startGame() {
//   document.getElementById("kitty").className = "imgactive";
//   if (
//     (started == true) &
//     (document.getElementById("countdown").innerHTML !== "GAME OVER!")
//   ) {
//     return;
//   }
//   started = true;
//   click = 0;
//   time = settime + 1;
//   var countdown = setInterval(function () {
//     outOfTime = false;
//     time--;
//     document.getElementById("countdown").innerHTML = time + " seconds";
//     if (time == 0) {
//       clearInterval(countdown);
//       document.getElementById("countdown").innerHTML = "GAME OVER!";
//       outOfTime = true;
//       document.getElementById("kitty").className = "imginactive";
//       if (click > highScore) {
//         highScore = click;
//         document.getElementById("highScore").innerHTML = highScore;
//       }
//     }
//   }, 1000);
// }

// function endGame() {
//   time = 1;
//   started = false;
// }

//click countdown and timer
function addClick(amount) {
  click += amount;
  document.getElementById("click").innerHTML = click.toFixed(1);
  if (click < furballCost) {
    document
      .getElementById("furballButton")
      .setAttribute("disabled", "disabled");
  } else {
    document.getElementById("furballButton").removeAttribute("disabled");
  }

  if (furballCount >= 10) {
    if (litterboxCount == 0) {
      document.getElementById("litterboxButton").value =
        "Litterbox 🚮 (50) [0]";
    }
    litterboxUnlocked = true;
    document.getElementById("litterboxButton").classList.add("addscorebutton");
    document.getElementById("litterboxButton").classList.remove("locked");

    if (click < litterboxCost) {
      document
        .getElementById("litterboxButton")
        .setAttribute("disabled", "disabled");
    } else {
      document.getElementById("litterboxButton").removeAttribute("disabled");
    }

    if (litterboxCount >= 10) {
      if (catnipCount == 0) {
        document.getElementById("catnipButton").value = "Catnip 🥫 (150) [0]";
      }
      catnipUnlocked = true;
      document.getElementById("catnipButton").classList.add("addscorebutton");
      document.getElementById("catnipButton").classList.remove("locked");
      if (click < catnipCost) {
        document
          .getElementById("catnipButton")
          .setAttribute("disabled", "disabled");
      } else {
        document.getElementById("catnipButton").removeAttribute("disabled");
      }

      if (catnipCount >= 10) {
        if (bastetCount == 0) {
          document.getElementById("bastetButton").value = "Bastet 𓂀 (500) [0]";
        }
        bastetUnlocked = true;
        document.getElementById("bastetButton").classList.add("addscorebutton");
        document.getElementById("bastetButton").classList.remove("locked");
        if (click < bastetCost) {
          document
            .getElementById("bastetButton")
            .setAttribute("disabled", "disabled");
        } else {
          document.getElementById("bastetButton").removeAttribute("disabled");
        }
      }
    }
  }
}

function changeImage() {
  // if (document.getElementById("countdown").innerHTML == "GAME OVER!") {
  //   return;
  // }
  // if (started == false) {
  //   return;
  // }
  if (bastetCount == 0) {
    var image = document.getElementById("kitty");
    image.src = "images/cat2.png";
    setTimeout(() => (image.src = "images/cat1.png"), 300);
  } else {
    return;
  }
  randomNumber = Math.floor(Math.random() * 10 + 1);
  if (randomNumber == 7) {
    document.getElementById("mew").volume = 0.5;
    document.getElementById("mew").play();
  }
}

var furballCost = 10;
var furballCount = 0;

function addFurball() {
  if (click >= furballCost) {
    click = click - furballCost;
    furballCount = furballCount + 1;
    setInterval(function () {
      addClick(0.002);
      document.getElementById("click").innerHTML = click.toFixed(1);
    }, 10);
    furballCost = Math.round(furballCost * 1.15);
    pps = pps + 0.2;
    document.getElementById("pps").innerHTML = pps.toFixed(1);
    document.getElementById("click").innerHTML = click.toFixed(1);
    document.getElementById("furballButton").value =
      "Furball 🧶 (" + furballCost + ") [" + furballCount + "]";
  }
}

var litterboxCost = 50;
var litterboxCount = 0;

function addLitterbox() {
  if ((click >= litterboxCost) & litterboxUnlocked) {
    click = click - litterboxCost;
    litterboxCount = litterboxCount + 1;
    setInterval(function () {
      addClick(0.01);
      document.getElementById("click").innerHTML = click.toFixed(1);
    }, 10);
    litterboxCost = Math.round(litterboxCost * 1.12);
    pps = pps + 1;
    document.getElementById("pps").innerHTML = pps.toFixed(1);
    document.getElementById("click").innerHTML = click.toFixed(1);
    document.getElementById("litterboxButton").value =
      "Litterbox 🚮 (" + litterboxCost + ") [" + litterboxCount + "]";
  }
}

var catnipCost = 150;
var catnipCount = 0;

function addCatnip() {
  if ((click >= catnipCost) & catnipUnlocked) {
    click = click - catnipCost;
    catnipCount = catnipCount + 1;
    setInterval(function () {
      addClick(0.0275);
      document.getElementById("click").innerHTML = click.toFixed(1);
    }, 10);
    catnipCost = Math.round(catnipCost * 1.12);
    pps = pps + 2.75;
    document.getElementById("pps").innerHTML = pps.toFixed(1);
    document.getElementById("click").innerHTML = click.toFixed(1);
    document.getElementById("catnipButton").value =
      "Catnip 🥫 (" + catnipCost + ") [" + catnipCount + "]";
  }
}

const start = () => {
  setTimeout(function () {
    confetti.start();
  }, 1000);
};

const stop = () => {
  setTimeout(function () {
    confetti.stop();
  }, 5000);
};

var bastetCost = 500;
var bastetCount = 0;

function addBastet() {
  if ((click >= bastetCost) & bastetUnlocked) {
    click = click - bastetCost;
    bastetCount = bastetCount + 1;
    setInterval(function () {
      addClick(1);
      document.getElementById("click").innerHTML = click.toFixed(1);
    }, 10);
    bastetCost = Math.round(bastetCost * 1.12);
    pps = pps + 100;
    document.getElementById("pps").innerHTML = pps.toFixed(1);
    document.getElementById("click").innerHTML = click.toFixed(1);
    document.getElementById("bastetButton").value =
      "Bastet 𓂀 (" + bastetCost + ") [" + bastetCount + "]";
  }
  if (bastetCount == 1) {
    start();
    var audio = new Audio("audio/bop.mp3");
    audio.volume = 0.5;
    audio.play();
    document.body.style.backgroundColor = "#fbab4f";
    document.getElementById("center").classList.remove("center");
    document.getElementById("center").classList.add("centeregypt");
    document.getElementById("furballButton").classList.remove("addscorebutton");
    document
      .getElementById("furballButton")
      .classList.add("addscorebuttonegypt");
    document
      .getElementById("litterboxButton")
      .classList.remove("addscorebutton");
    document
      .getElementById("litterboxButton")
      .classList.add("addscorebuttonegypt");
    document.getElementById("catnipButton").classList.remove("addscorebutton");
    document
      .getElementById("catnipButton")
      .classList.add("addscorebuttonegypt");
    document.getElementById("bastetButton").classList.remove("addscorebutton");
    document
      .getElementById("bastetButton")
      .classList.add("addscorebuttonegypt");
    var image = document.getElementById("kitty");
    image.src = "images/cat2egypt.png";
  }
}

function debug() {
  furballCount = 10;
  litterboxCount = 10;
  document.getElementById("litterboxButton").classList.remove("locked");
  document.getElementById("litterboxButton").classList.add("addscorebutton");
  document.getElementById("litterboxButton").value =
    "Litterbox 🚮 (" + litterboxCost + ") [" + litterboxCount + "]";
  catnipCount = 10;
  document.getElementById("catnipButton").classList.remove("locked");
  document.getElementById("catnipButton").classList.add("addscorebutton");
  document.getElementById("catnipButton").value =
    "Catnip 🥫 (" + catnipCost + ") [" + catnipCount + "]";
  click = 999;
  addClick(0);
}

//stop click counter after game end
// if (secs < 0) {
//   document.getElementById("kitty").onclick = null;
//   clearTimeout(countdown);
//   alert("Game OVER!");
//   element.innerHTML = "<h1> GAME OVER!</h1>";
// }

// function changeLevel1() {
//   settime = 15;
//   document.getElementById("level1").className = "active";
//   document.getElementById("level2").className = "";
//   document.getElementById("level3").className = "";
//   highScore = 0;
// }

// function changeLevel2() {
//   settime = 10;
//   document.getElementById("level1").className = "";
//   document.getElementById("level2").className = "active";
//   document.getElementById("level3").className = "";
//   highScore = 0;
// }

// function changeLevel3() {
//   settime = 5;
//   document.getElementById("level1").className = "";
//   document.getElementById("level2").className = "";
//   document.getElementById("level3").className = "active";
//   highScore = 0;
// }
