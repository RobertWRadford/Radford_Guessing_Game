'use strict'

var userName = prompt('What is your name?');
//console.log('Hello ' + userName + '! welcome to a page about me.');
alert('Hello ' + userName + '! welcome to a page about me.');

// getting input from a user
for (var i = 0; i < 1; i++){
  var Degree = prompt('Have I completed a full bachelors degree?');
  var degree = toLowerCase(Degree);
  if (degree == 'no' || degree == 'n'){
    //console.log('Correct, I have roughly 3 years worth of credits however I have not fully completed a bachelors yet.');
    alert('Correct, I have roughly 3 years worth of credits however I have not fully completed a bachelors yet.');
  } else if (degree == 'yes' || degree == 'yes') {
    //console.log('Incorrect, I have roughly 3 years worth of credits however I have not fully completed a bachelors yet.');
    alert('Incorrect, I have roughly 3 years worth of credits however I have not fully completed a bachelors yet.');
  } else {
    //console.log('Please stick to yes/no or y/n answers.');
    alert('Please stick to yes/no or y/n answers.');
    i--
  }
}

for (var i = 0; i < 1; i++){
  var Age = prompt('Am I under 25 years old?');
  var age = toLowerCase(Age)
  if (degree == 'no' || degree == 'n'){
    //console.log('Inorrect, I'll be turning 25 this year in November.');
    alert('Inorrect, I'll be turning 25 this year in November.');
  } else if (degree == 'yes' || degree == 'yes') {
    //console.log('Correct, I'll be turning 25 this year in November.');
    alert('Correct, I'll be turning 25 this year in November.');
  } else {
    //console.log('Please stick to yes/no or y/n answers.');
    alert('Please stick to yes/no or y/n answers.');
    i--
  }
}

for (var i = 0; i < 1; i++){
  var Branch = prompt('When I was in the military was my branch of service the Air Force?');
  var branch = toLowerCase(Branch)
  if (degree == 'no' || degree == 'n'){
    //console.log('Correct, I was in the Army.');
    alert('Correct, I was in the Army.');
  } else if (degree == 'yes' || degree == 'yes') {
    //console.log('Heck no!, I served in the Army.');
    alert('Heck no!, I served in the Army.');
  } else {
    //console.log('Please stick to yes/no or y/n answers.');
    alert('Please stick to yes/no or y/n answers.');
    i--
  }
}

for (var i = 0; i < 1; i++){
  var Language = prompt('Can I speak Arabic?');
  var language = toLowerCase(Language)
  if (degree == 'no' || degree == 'n'){
    //console.log('Incorrect, although my fluency level is probably worse than a young childs.');
    alert('Incorrect, although my fluency level is probably worse than a young childs.');
'use strict'

var score = 0;

var userName = prompt('What is your name?');
//console.log('Hello ' + userName + '! welcome to a page about me.');
alert('Hello ' + userName + '! welcome to a page about me.');

// getting input from a user
for (var i = 0; i < 1; i++){
  var Degree = prompt('Have I completed a full bachelors degree?');
  var degree = Degree.toLowerCase();
  if (degree == 'no' || degree == 'n'){
    //console.log('Correct, I have roughly 3 years worth of credits however I have not fully completed a bachelors yet.');
    alert('Correct, I have roughly 3 years worth of credits however I have not fully completed a bachelors yet.');
    score++
  } else if (degree == 'yes' || degree == 'yes') {
    //console.log('Incorrect, I have roughly 3 years worth of credits however I have not fully completed a bachelors yet.');
    alert('Incorrect, I have roughly 3 years worth of credits however I have not fully completed a bachelors yet.');
  } else {
    //console.log('Please stick to yes/no or y/n answers.');
    alert('Please stick to yes/no or y/n answers.');
    i--;
  }
}

for (var i = 0; i < 1; i++){
  var Age = prompt('Am I under 25 years old?');
  var age = Age.toLowerCase();
  if (degree == 'no' || degree == 'n'){
    //console.log('Inorrect, I'll be turning 25 this year in November.');
    alert('Inorrect, I\'ll be turning 25 this year in November.');
  } else if (degree == 'yes' || degree == 'yes') {
    //console.log('Correct, I'll be turning 25 this year in November.');
    alert('Correct, I\'ll be turning 25 this year in November.');
    score++;
  } else {
    //console.log('Please stick to yes/no or y/n answers.');
    alert('Please stick to yes/no or y/n answers.');
    i--;
  }
}

for (var i = 0; i < 1; i++){
  var Branch = prompt('When I was in the military was my branch of service the Air Force?');
  var branch = Branch.toLowerCase();
  if (degree == 'no' || degree == 'n'){
    //console.log('Correct, I was in the Army.');
    alert('Correct, I was in the Army.');
    score++
  } else if (degree == 'yes' || degree == 'yes') {
    //console.log('Heck no!, I served in the Army.');
    alert('Heck no!, I served in the Army.');
  } else {
    //console.log('Please stick to yes/no or y/n answers.');
    alert('Please stick to yes/no or y/n answers.');
    i--
  }
}

for (var i = 0; i < 1; i++){
  var Language = prompt('Can I speak Arabic?');
  var language = Language.toLowerCase();
  if (degree == 'no' || degree == 'n'){
    //console.log('Incorrect, although my fluency level is probably worse than a young childs.');
    alert('Incorrect, although my fluency level is probably worse than a young childs.');
  } else if (degree == 'yes' || degree == 'yes') {
    //console.log('Correct, although my fluency level is probably worse than a young childs.');
    alert('Correct, although my fluency level is probably worse than a young childs.');
    score++;
  } else {
    //console.log('Please stick to yes/no or y/n answers.');
    alert('Please stick to yes/no or y/n answers.');
    i--;
  }
}

for (var i = 0; i < 1; i++){
  var Work = prompt('Did I tutor students in Algebra while I was in college?');
  var work = Work.toLowerCase();
  if (degree == 'no' || degree == 'n'){
    //console.log('Incorrect, I was a Calculus tutor, however we had to cover for lower level courses as well.');
    alert('Incorrect, I was a Calculus tutor, however we had to cover for lower level courses as well.');
  } else if (degree == 'yes' || degree == 'yes') {
    //console.log('Correct, I was a Calculus tutor, however we had to cover for lower level courses as well.');
    alert('Correct, I was a Calculus tutor, however we had to cover for lower level courses as well.');
    score++;
  } else {
    //console.log('Please stick to yes/no or y/n answers.');
    alert('Please stick to yes/no or y/n answers.');
    i--;
  }
}

var wonGame = false;
var randNumber = Math.ceil(Math.random() * 10);
var goodChoice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var j = 0; i < 4; i++) {
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

wonGame = false;
var squareEnixGames = ['final fantasy tactics', 'chronotrigger', 'sword of mana', 'dragon quest', 'final fantasy 7', 'kingdom hearts', 'the last remnant', 'nier: automata', 'chaos rings'];
var bestGame = 'final fantasy tactics';
var gameString = ''
for (var n = 0; n < squareEnixGames.length-1; n++){
  gameString += squareEnixGames[n] + ', ';
}
gameString += squareEnixGames[squareEnixGames.length-1];

for (var i = 0; i < 6; i++){
  userGuess = prompt('Guess which of these is my favorite Square Enix game: ' + gameString);
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
    alert('That wasn\'t a choice >:(');
    i--;
  }
}

alert('Thanks for playing along ' + userName + '. You got ' + score + ' questions correct.');
  } else if (degree == 'yes' || degree == 'yes') {
    //console.log('Correct, although my fluency level is probably worse than a young childs.');
    alert('Correct, although my fluency level is probably worse than a young childs.');
  } else {
    //console.log('Please stick to yes/no or y/n answers.');
    alert('Please stick to yes/no or y/n answers.');
    i--
  }
}

for (var i = 0; i < 1; i++){
  var Work = prompt('Did I tutor students in Algebra while I was in college?');
  var work = toLowerCase(Work)
  if (degree == 'no' || degree == 'n'){
    //console.log('Incorrect, I was a Calculus tutor, however we had to cover for lower level courses as well.');
    alert('Incorrect, I was a Calculus tutor, however we had to cover for lower level courses as well.');
  } else if (degree == 'yes' || degree == 'yes') {
    //console.log('Correct, I was a Calculus tutor, however we had to cover for lower level courses as well.');
    alert('Correct, I was a Calculus tutor, however we had to cover for lower level courses as well.');
  } else {
    //console.log('Please stick to yes/no or y/n answers.');
    alert('Please stick to yes/no or y/n answers.');
    i--
  }
}

var wonGame = false;
var randNumber = Math.ceiling(Math.random() * 10);
var goodChoice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i = 0, i < 4, i++) {
  var userGuess = parseInt(prompt('guess a number between 1 and 10'));
  for (j = 0, j < goodChoice.length, j++){
    if (userGuess == goodChoice[j]){
      if (userGuess == randNumber){
        alert('Correct!');
        break;
      } else if (userGuess > randNumber) {
        alert(''); 
      }
    }
  }
}

alert('Thanks for playing along ' + userName + '.');
