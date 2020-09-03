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
    //console.log('Incorrect, I was a Calculus tutor, however we had to cover for lower level courses as well. Thanks for playing along ' + userName + '.');
    alert('Incorrect, I was a Calculus tutor, however we had to cover for lower level courses as well. Thanks for playing along ' + userName + '.');
  } else if (degree == 'yes' || degree == 'yes') {
    //console.log('Correct, I was a Calculus tutor, however we had to cover for lower level courses as well. Thanks for playing along ' + userName + '.');
    alert('Correct, I was a Calculus tutor, however we had to cover for lower level courses as well. Thanks for playing along ' + userName + '.');
  } else {
    //console.log('Please stick to yes/no or y/n answers.');
    alert('Please stick to yes/no or y/n answers.');
    i--
  }
}
