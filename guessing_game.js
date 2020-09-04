'use strict'

var promptLine = [
  'Have I completed a full bachelors degree?',
  'Am I under 25 years old?',
  'When I was in the military was my branch of service the Air Force?',
  'Can I speak Arabic?',
  'Did I tutor students in Algebra while I was in college?'
];

var correctLine = [
  'Correct, I have roughly 3 years worth of credits however I have not fully completed a bachelors yet.',
  "Correct, I'll be turning 25 this year in November.",
  'Correct, I was in the Army.',
  'Correct, although my fluency level is probably worse than a young childs.',
  'Correct, I was a Calculus tutor, however we had to cover for lower level courses as well.'
];

var incorrectLine = [
  'Incorrect, I have roughly 3 years worth of credits however I have not fully completed a bachelors yet.',
  "Inorrect, I'll be turning 25 this year in November.",
  'Heck no!, I served in the Army.',
  'Incorrect, although my fluency level is probably worse than a young childs.',
  'Incorrect, I was a Calculus tutor, however we had to cover for lower level courses as well.'
];

var easyAnswers = [
  "n",
  "y",
  "n",
  "y",
  "y"
];

var score = 0;

function easyQuestions() {
  var userInput;
  
  for(var i = 0; i < promptLine.length; i++) {
    userInput = prompt(promptLine[i]).charAt(0).toLowerCase();
    if(userInput === easyAnswers[i]) {
      alert(correctLine[i]);
      score++;
    } else
      alert(incorrectLine[i]);
  }
}

function numberQuestion() {
  var wonGame = false;
  var randNumber = Math.ceil(Math.random() * 10);
  var goodChoice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  for (var i = 0; i < 4; i++) {
    var userGuess = parseInt(prompt('guess a number between 1 and 10'));
    if (goodChoice.includes(userGuess)){
      if (userGuess == randNumber){
        alert('Correct!');
        wonGame = true;
        score++;
        break;
      } else if (userGuess > randNumber) {
        alert('Too high!'); 
      } else {
        alert('Too low!');
      }
    } else {
      alert('Please guess an integer between 1 and 10');
      i--;
    }
  }

  if (wonGame == false){
    alert('The answer was ' + randNumber);
  }
}

function gameQuestion() {
  var wonGame = false;
  var squareEnixGames = ['final fantasy tactics', 'chronotrigger', 'sword of mana', 'dragon quest', 'final fantasy 7', 'kingdom hearts', 'the last remnant', 'nier: automata', 'chaos rings'];
  var bestGame = 'final fantasy tactics';
  var gameString = ''
  for (var n = 0; n < squareEnixGames.length-1; n++){
    gameString += squareEnixGames[n] + ', ';
  }
  gameString += squareEnixGames[squareEnixGames.length-1];
  
  for (var i = 0; i < 6; i++){
    var userGuess = prompt('Guess which of these is my favorite Square Enix game: ' + gameString);
    userGuess = userGuess.toLowerCase();
    if (squareEnixGames.includes(userGuess)){
      if (userGuess == bestGame){
        alert('You are correct!');
        score++;
        wonGame = true;
        break;
      } else {
        alert('You are incorrect :(');
      }
    } else {
      alert("That wasn't a choice >:(");
      i--;
    }
  }
}

function gameEnd() {
  alert('Thanks for playing along ' + userName + '. You got ' + score + ' questions correct.');
}


var userName = prompt('What is your name?');
alert('Hello ' + userName + '! welcome to a page about me.');

easyQuestions();
numberQuestion();
gameQuestion();
gameEnd();