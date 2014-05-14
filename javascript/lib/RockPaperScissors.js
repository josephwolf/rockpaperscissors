function Player(name) {
	this.name = name
};

Player.prototype.picks = function(pick) {
	this.pick = pick;
}

function Game(player1, player2) {
	this.player1 = player1;
	this.player2 = player2;
};

Game.prototype.winner = function() {
	if(this.isSamePick()) return null;

	if(this.PAIRS[this.player1.pick][this.player2.pick]){
     return this.player1
    }
    else{
      return this.player2
    };
};

Game.prototype.verbPicker = function() {
	if(this.isSamePick()) return null;

	if(this.PAIRS[this.player1.pick][this.player2.pick]){
     return this.PAIRS[this.player1.pick][this.player2.pick]
    }
    else{
      return this.PAIRS[this.player2.pick][this.player1.pick]
    };
};

Game.prototype.winningMessage = function() {

	if(this.winner() === this.player2){
	return [this.PAIRS[this.player1.pick].titleOf,
			this.verbPicker(),
			this.PAIRS[this.player2.pick].titleOf]
			.join(' ') + '. You lose.';
		}
	else if(this.winner() === this.player1){
	return [this.PAIRS[this.player2.pick].titleOf,
			this.verbPicker(),
			this.PAIRS[this.player1.pick].titleOf]
			.join(' ') + '. You win.';
		}
	else {
		return 'There are no winners.'
	};
};

Game.prototype.PAIRS = {
	endlessvoid 		: {
		titleOf :  		'The endless void',
		terror : 		'is absent in',
		reality : 		'is crushed under the weight of' },

	you				 	: {
		titleOf :  		'The concept of you',
		predeterm : 	'has no impact on',
		endlessvoid : 	'is comprised entirely of' },


	terror			 	: {
		titleOf :  		'Abject terror',
		you : 			'is a slave to',
		predeterm : 	'is ignored in' },

	predeterm 			: {
		titleOf :  		'Predetermination',
		endlessvoid : 	'is nullified by',
		reality : 		'is made irrelevant by' },

	reality 			: {
		titleOf :  		'Reality',
		terror : 		'is never as bad as',
		you : 			'cannot survive in' }
};

Game.prototype.randChoice = function() {
	var num = Math.floor(Math.random() * 5);
	if(num === 0){
	return 'endlessvoid';}
	else if(num === 1){
	return 'you';}
	else if(num === 2){
	return 'terror';}
	else if(num === 3){
	return 'predeterm';}
	else {
	return 'reality'};
};

Game.prototype.randHeader = function() {
	var num = Math.floor(Math.random() * 5);
	if(num === 0){
	return 'Does anything matter?';}
	else if(num === 1){
	return 'What ARE you?';}
	else if(num === 2){
	return 'Time has no meaning.';}
	else if(num === 3){
	return 'Nothing is real.';}
	else {
	return 'There is no being outside of perception.'};
};

Game.prototype.isSamePick = function() {
	return this.player1.pick === this.player2.pick;
};