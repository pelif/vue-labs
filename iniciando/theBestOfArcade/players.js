class Player {

    constructor(name, avatar) {
        this.name = name;
        this.avatar = avatar;        
        this.victories = 0;
        this.defeats = 0;
        this.draws = 0;
        this.files = 0;        
        this.fightsWon = 0;
        this.lostFights = 0;
    }

    endGame(otherPlayer, victories, defeats) {
        if (this.wasDraw(victories, defeats)) {
            this.draw(victories, defeats);
            otherPlayer.draw(victories, defeats);
            return;
        }

        if (this.wasVictory(victories, defeats)) {
            this.victory(victories, defeats); 
            otherPlayer.lost(defeats, victories); 
        } else {
            this.lost(victories, defeats); 
            otherPlayer.victory(defeats, victories);
        }
    }

    wasDraw(victories, defeats) {
        return victories === defeats;
    }

    wasVictory(victories, defeats) {
        return victories > defeats;
    } 

    draw(victories, defeats) {
        this.updateFights(victories, defeats); 
        this.draws++;   
    }

    victory(victories, defeats) {
        this.updateFights(victories, defeats); 
        this.victories++;
    }

    lost(victories, defeats) {
        this.updateFights(victories, defeats); 
        this.defeats++;
    }

    updateFights(victories, defeats) {
        this.fightsWon += victories;
        this.lostFights += defeats;
    }

}