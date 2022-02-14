var Doenerbude;
(function (Doenerbude) {
    class Moveable {
        position;
        isMoving = false;
        constructor(_position) {
            this.position = _position;
        }
        moveTo(newPosition) {
            if (this.isMoving) {
                return;
            }
            this.isMoving = true;
            let moveInterval = setInterval(() => {
                let richtungsVektor = new Doenerbude.Position(newPosition.x - this.position.x, newPosition.y - this.position.y);
                let distance = richtungsVektor.getLength();
                // Faktor mit dem man die Position multiplizieren (scale) muss, damit der RichtungsVektor nur noch eine Länge von SPEED besitzten. 
                // (SPEED ist in der main.ts definiert und gibt die Anzahl der Pixel pro Interval)
                let factor = Doenerbude.SPEED / richtungsVektor.getLength();
                // Richtungsvektor auf Länge von SPEED bringen
                richtungsVektor.scale(factor);
                this.position.add(richtungsVektor);
                // Abbruchbedingung => aktuelle Position und Zielposition stimmen ungefähr überein
                // Wenn die Entfernung kleiner als die Geschwindigkeit (also Pixel pro Interval) ist, dann brechen wir die 
                // Bewegung ab, damit nicht über das Ziel hinausgeschossen wird, falls es nicht genau erreicht wird.
                if (distance < Doenerbude.SPEED) {
                    this.position = newPosition;
                    this.isMoving = false;
                    clearInterval(moveInterval);
                }
            }, Doenerbude.REFRESHRATE);
        }
    }
    Doenerbude.Moveable = Moveable;
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=moveable.js.map