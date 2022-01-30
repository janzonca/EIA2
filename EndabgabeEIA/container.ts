namespace Doenerbude {
    export class Container implements IDrawable {
        position: Position;
        capacity: number;
        count: number;
        grocery: IGrocery;

        ctx: CanvasRenderingContext2D;

        constructor(_capacity: number, _count: number, _grocery: IGrocery, _position: Position) {
            this.position = _position;
            this.capacity = _capacity;
            this.count = _count;
            this.grocery = _grocery;
            
        }
        draw(ctx: CanvasRenderingContext2D): void {
            ctx.beginPath();
            ctx.rect(this.position.x, this.position.y, 10, 10);
            ctx.stroke();
        }
    }
}
 
          
            //TODO hier den container zeichen und dann die position der grocery in den container setzen
            this.grocery.position = new Position()
            this.grocery.draw(ctx);
        
        } 
    } 
}
