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

	if(this.winner() === this.player1){
	return [this.player1.pick,
			this.verbPicker(),
			this.player2.pick]
			.join(' ');
		}
	else if(this.winner() === this.player2){
	return [this.player2.pick,
			this.verbPicker(),
			this.player1.pick]
			.join(' ');
		}
	else {
		return 'Draw!'
	};
};

Game.prototype.PAIRS = {
	'rock' 		: {
		scissors : 	'smashes',
		lizard   : 	'crushes' },

	'paper' 	: {
		rock 	 : 	'covers',
		spock 	 : 	'disproves' },


	'scissors' 	: {
		paper 	 : 	'cuts',
		lizard 	 : 	'decapitates' },

	'lizard' 	: {
		spock 	 : 	'bites',
		paper 	 : 	'eats' },

	'spock' 	: {
		scissors : 	'dismantles',
		rock 	 : 	'vaporizes' }
};

Game.prototype.randChoice = function() {
	var num = Math.floor(Math.random() * 5);
	if(num === 0){
	return 'rock';}
	else if(num === 1){
	return 'paper';}
	else if(num === 2){
	return 'scissors';}
	else if(num === 3){
	return 'lizard';}
	else {
	return 'spock'};
};

Game.prototype.isSamePick = function() {
	return this.player1.pick === this.player2.pick;
};