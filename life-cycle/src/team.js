export default class {
    constructor(name, logo) {
        this.name = name; 
        this.logo = logo; 
        this.points = 0;
        this.gm = 0;
        this.gs = 0;
        this.balance = 0;
    }

    endPlay(outSideTeam, gm, gs) {
        if(this.wasDraw(gm, gs)) {       
            this.draw(gm, gs);     
            outSideTeam.draw(gm, gs); 
            return;
        }

        if(this.wasVictory(gm, gs)) {
            this.victory(gm, gs); 
            outSideTeam.lost(gs, gm); 
        } else {
            this.lost(gm, gs); 
            outSideTeam.victory(gs, gm); 
        }
    } 
    
    wasDraw(gm, gs) {
        return gm === gs;
    } 
    
    wasVictory(gm, gs) {
        return gm > gs;
    } 
      
    draw(gm, gs) {
        this.updateInfo(1, gm, gs);
    } 
    
    victory(gm, gs) {
        this.updateInfo(3, gm, gs); 
    }
    
    lost(gm, gs) {
        this.updateInfo(0, gm, gs);
    } 
    
    updateInfo(points, gm, gs) {
        this.points += points; 
        this.gm += gm; 
        this.gs += gs;
        this.balance += this.gm - this.gs;
    }
}