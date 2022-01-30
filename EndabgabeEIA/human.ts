

namespace Doenerbude {
    export abstract class Human implements IDrawable {
        
        mood: MOOD;
        position: Position;

        constructor(_mood: MOOD, _position: Position) {
            this.mood = _mood;
            this.position = _position;
        }

        draw(): void {
            console.log("ich bin ein human");
            switch(this.mood) {
                case MOOD.HAPPY:

                
                    //draw happy
                break;
                case MOOD.ANGRY:
                    //TODO draw angry 
                break;
            }

            
            throw new Error("Method not implemented.");
        }
    }
}
