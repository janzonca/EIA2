var Doenerbude;
(function (Doenerbude) {
    class Position {
        // x-Koordinate auf dem Canvas
        x;
        // y-Koordinate auf dem Canvas
        y;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        /// Einen Positionsvektor skalieren
        scale(factor) {
            this.x *= factor;
            this.y *= factor;
        }
        /// Die Position um einen Positionsvektor verschieben
        add(add) {
            this.x += add.x;
            this.y += add.y;
        }
        /// Berechnet die Länge des aktuellen 
        getLength() {
            return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        }
    }
    Doenerbude.Position = Position;
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=position.js.map