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

	if(this.PAIRS[this.player1.pick]['beats'][0] === this.player2.pick || this.PAIRS[this.player1.pick]['beats'][1] === this.player2.pick){
     return this.player1
    }
    else{
      return this.player2
    };
};

Game.prototype.PAIRS = {
	'rock':     { 'beats': ['scissors', 'lizard'] },
	'paper':    { 'beats': ['rock', 'spock'] },
	'scissors': { 'beats': ['paper', 'lizard'] },
	'lizard': 	{ 'beats': ['spock', 'paper'] },
	'spock': 	{ 'beats': ['scissors', 'rock'] }
};

Game.prototype.isSamePick = function() {
	return this.player1.pick === this.player2.pick;
};