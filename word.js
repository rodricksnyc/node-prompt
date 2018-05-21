var letter = require('./letter.js');

function Word(target) {
	this.target = target;
	this.thing = [];
	this.found = false;

	this.getLet = function() {
		for (var i=0; i < this.target.length; i++) {
			this.thing.push( new letter(this.target[i]));
		}
	};

	this.findWord = function() {
		this.found = this.thing.every(function(currLett) {
			return currLett.appear;
		});
		return this.found;
	};

	this.checkLetter = function(guessLetter) {
		var toReturn = 0;

		for (var i = 0; i < this.thing.length; i++) {
			if (this.thing[i].charac == guessLetter){
				this.thing[i].appear = true;
				toReturn++;
			}
		}
		return toReturn;
	};

	this.wordRender = function() {
		var string = '';
		for (var i = 0; i < this.thing.length; i++){
			string += this.thing[i].letterRender();
		}
		return string;
	};

}
module.exports = Word;
