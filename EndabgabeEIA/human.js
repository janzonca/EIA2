var Doenerbude;
(function (Doenerbude) {
    class Human {
        mood;
        position;
        constructor(_mood, _position) {
            this.mood = _mood;
            this.position = _position;
        }
        draw() {
            console.log("ich bin ein human");
            switch (this.mood) {
                case Doenerbude.MOOD.HAPPY:
                    //draw happy
                    break;
                case Doenerbude.MOOD.ANGRY:
                    //TODO draw angry 
                    break;
            }
            throw new Error("Method not implemented.");
        }
    }
    Doenerbude.Human = Human;
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=human.js.map