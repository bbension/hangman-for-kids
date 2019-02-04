//global variables
//=======================================
//create an array of words//
const word = ['unicorn', 'transformers', 'crafts', 'pickles', 'chocolate', 'chips', 'bicycles', 'dolls', 'playdates', 'laughing', 'skipping and jumping', 'hugs', 'stickers'];

//choose words randomly//
Let randNum = math.floor(Math.random() * word.length);
Let chosenWord = word[randNum];
Let rightWord = [];
Let wrongWord = [];
Let underScore = [];

//dom manipulation//
Let docUnderscore = document.getElementsByClassName('underscore');
Let docRightGuess = document.getElementsByClassName('rightGuess');
Let docWrongGuess = document.getElementsByClassName('wrongGuess');

//Main=====================//

//create underscore based on length of word//
Let generateUnderscore = () => {
    for(Let i=0; i < chosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

//Get users guess
document.addEventListener('keypress', (event) => {
    Let keyword = String.fromCharCode(event.keycode);

//if users guess is right//
    if(chosenWord.indexOf(keyword) > -1){
//if right push to right array
    rightWord.push(keyword);
   
//replace underscore with right letter
    underScore[chosenWord.indexOf(keyword)] = keyword;
    docUnderscore[0].innerHTML = underScore.join(' ');
    docRightGuess[0].innerHTML = rightGuess;
    docWrongGuess[0].innerHTML = wrongGuess;
//check to see if user word matches guesses//
    if(underScore.join('') == chosenWord) {
alert('You Win');
    }
}
else {
    wrongWord.push(keyword); 

});
}


