namespace Doenerbude {
    export class Container implements IDrawable {
        size: number = 50;

        position: Position;
        capacity: number;
        count: number;
        grocery: Grocery;

        ctx: CanvasRenderingContext2D;

        constructor(_capacity: number, _count: number, _grocery: Grocery, _position: Position) {
            this.position = _position;
            this.capacity = _capacity;
            this.count = _count;
            this.grocery = _grocery;
            
        }
        draw(ctx: CanvasRenderingContext2D): void {
            ctx.beginPath();
            ctx.strokeStyle = "brown";
            ctx.rect(this.position.x, this.position.y, this.size, this.size);
            ctx.stroke();

            this.grocery.position = new Position(this.position.x + this.size / 2, this.position.y + this.size / 2);
            this.grocery.draw(ctx);
        }

        isClicked(clickX, clickY):boolean {
            let c1: boolean = clickX >= this.position.x;
            let c2 = clickX <= this.position.x + this.size;
            let c3 = clickY >= this.position.y;
            let c4 = clickY <= this.position.y + this.size;
            return c1 && c2 && c3 && c4;
        }
    }
}
 
          
            //TODO hier den container zeichen und dann die position der grocery in den container setzen
