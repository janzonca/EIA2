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
        draw() {
          
        
        } } }
