namespace Doenerbude {
    
    export class Position {
        x: number; 
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        public scale(factor: number): void {
            this.x *= factor;
            this.y *= factor;
        }

        public add(add: Position): void {
            this.x += add.x;
            this.y += add.y;
        }

        public getLength(): number {
            return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        }
    }

}