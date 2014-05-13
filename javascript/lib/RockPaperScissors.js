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

Game.prototype.isSamePick = function() {
	return this.player1.pick === this.player2.pick;
};