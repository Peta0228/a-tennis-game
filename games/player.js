class Player {
    constructor(name) {
        this.name = name;
        this.pointsWon = 0;
        this.gamesWon = 0;
    }
    setPointsWon(points) {
        this.pointsWon = points;
    }
    getPointsWon() {
        return this.pointsWon;
    }

    getName(){
        return this.name;
    }
}

module.exports = Player;