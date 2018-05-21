var Word = require('./word.js');
var prompt = require('prompt');

console.log("Guess a letter of the name of an animal");
console.log("----------------");
prompt.start();

game = {
 	wordBank: ["giraffe", "elephant","kangaroo", "bobcat", "leopard", "rabbit", "zebra", "monkey", "wolf", "tiger", "donkey", "jaguar", "squirrel", "rhinoceros", "goose", "penguin", "raccoon", "ferret", "antelope", "mouse", "chicken", "camel", "deer", "caribou","buffalo", "baboon", "bull", "cheetah", "coyote", "chipmunk", "alpaca", "panther", "dingo", "dodo", "dolphin", "gazelle", "goat", "hippopotamus", "koala", "mongoose", "ostrich", "panda", "puma", "reindeer", "skunk", "turkey]", "walrus", "weasel", "puffin","caracal", "seal", "platypus", "hare", "flamingo", "gorilla", "hamster", "lemur", "okapi", "wombat", "wildebeest"],
 	wordsWon: 0,
 	guessesRemaining: 10,
 	currentWrd: null,

 	startGame: function (wrd) {
 		this.resetGuesses();
 		this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
 		this.currentWrd.getLet();
 		this.promptUser();
 	},

 	resetGuesses: function(){
 		this.guessesRemaining = 10;
 	},

 	promptUser: function(){
 		var self = this;
 		prompt.get(['guessLetter'], function(err, result){
 			console.log("You guessed: " + result.guessLetter);
 			var manyGuessed = self.currentWrd.checkLetter(result.guessLetter);

 			if(manyGuessed == 0) {
 				console.log("Wrong guess!");
 				self.guessesRemaining--;

 			} else {
 				console.log("Correct guess!");
 					if(self.currentWrd.findWord()){
 						console.log("You won!");
 						console.log("----------");
 						return;
 					}
 			}

 			console.log("Guesses remaining: " + self.guessesRemaining);
 			console.log("-----------");
 			if((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
 				self.promptUser();
 			}
 			else if(self.guessesRemaining ==0){
 				console.log("Game over. Correct Word ", self.currentWrd.target);
 			} else {
 				console.log(self.currentWrd.wordRender());
 			}
 		});

 	}
};

game.startGame();
