class Match {
    constructor(players) {
        this.players = players;
        this.currentGame = null;
    }
    start() {
        this.currentGame = new Game(this.players);
        return this.currentGame;
    }
    GetScoreboard(){
        return this.getCurrentGame().GetScoreboard();
    }

    getCurrentGame() {
        return this.currentGame;
    }
}

class Game {
    constructor(players) {
        this.players = players;
        this.scoreboard = 'Game Started';
        this.finished = false;
        console.log('Game Started');
    }
    wonPoint(player) {

        if (this.finished){
            return;
        }

        // set player as p1, the other player as p2
        var p1,
            p2;
        this.players.forEach(function (p) {
            if (p === player) {
                p1 = p;
            }
            else {
                p2 = p;
            }
        });

        // currently, the player is at 40,  the other is not
        if (p1.pointsWon == 40 && p2.pointsWon < 40) {
            this.scoreboard = player.name + ' Won!';
            this.finished = true;
            console.log(player.name, ' Won!');
            return;
        }

        // currently, both players at 40
        else if (p1.pointsWon == 40 && p2.pointsWon == 40){
            player.pointsWon = 45;
            this.scoreboard = player.name + ' Advantage';
            console.log(player.name, ' Advantage');
        }

        // currently, the other is at advantage
        else if (p2.pointsWon == 45) {
            p2.pointsWon = 40;
            this.scoreboard = 'Deuce';
            console.log('Deuce');
        }

        // currently, the player is at advantage
        else if (p1.pointsWon == 45){
            this.scoreboard = player.name + ' Won!';
            this.finished = true;
            console.log(player.name, ' Won!');
            return;
        }

        if (player.pointsWon == 0) {
            player.pointsWon = 15;
        }
        else if (player.pointsWon == 15) {
            player.pointsWon = 30;
        }
        else if (player.pointsWon != 45) {
            player.pointsWon = 40;
        }

        if (p1.getName() == 'player 1'){
            console.log(p1.getName(), p1.getPointsWon(), p2.getName(), p2.getPointsWon());
        }
        else{
            console.log(p2.getName(), p2.getPointsWon(), p1.getName(), p1.getPointsWon());
        }
    }

    reset(){
        this.players[0].pointsWon = 0;
        this.players[1].pointsWon =0;
        this.scoreboard = 'Game Reset';
        this.finished = false;
        console.log('Game Reset');
    }

    GetScoreboard(){
        return this.scoreboard;
    }
};

module.exports = Match;