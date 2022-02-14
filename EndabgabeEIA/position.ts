namespace Doenerbude {
    
    export class Position {
        // x-Koordinate auf dem Canvas
        x: number; 
        // y-Koordinate auf dem Canvas
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        /// Einen Positionsvektor skalieren
        public scale(factor: number): void {
            this.x *= factor;
            this.y *= factor;
        }

        /// Die Position um einen Positionsvektor verschieben
        public add(add: Position): void {
            this.x += add.x;
            this.y += add.y;
        }

        /// Berechnet die Länge des aktuellen 
        public getLength(): number {
            return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        }
    }

}