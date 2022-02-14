namespace Doenerbude {
    export abstract class Moveable implements IDrawable {
        position: Position;
        public isMoving: boolean = false;

        protected constructor(_position: Position) {
            this.position = _position;
        }

        public moveTo(newPosition: Position): void {
            if (this.isMoving) {
                return;
            }

            this.isMoving = true;

            let moveInterval: number = setInterval(() => {
                
                let richtungsVektor: Position = new Position(newPosition.x - this.position.x, newPosition.y - this.position.y);
                let distance: number = richtungsVektor.getLength();
                // Faktor mit dem man die Position multiplizieren (scale) muss, damit der RichtungsVektor nur noch eine Länge von SPEED besitzten. 
                // (SPEED ist in der main.ts definiert und gibt die Anzahl der Pixel pro Interval)
                let factor: number = SPEED / richtungsVektor.getLength();
                // Richtungsvektor auf Länge von SPEED bringen
                richtungsVektor.scale(factor);

                this.position.add(richtungsVektor);

                // Abbruchbedingung => aktuelle Position und Zielposition stimmen ungefähr überein
                // Wenn die Entfernung kleiner als die Geschwindigkeit (also Pixel pro Interval) ist, dann brechen wir die 
                // Bewegung ab, damit nicht über das Ziel hinausgeschossen wird, falls es nicht genau erreicht wird.
                if (distance < SPEED) {

                    this.position = newPosition;
                    this.isMoving = false;
                    clearInterval(moveInterval);
                }
            }, REFRESHRATE);

            
        }

        abstract draw(ctx: CanvasRenderingContext2D): void;
    }
}