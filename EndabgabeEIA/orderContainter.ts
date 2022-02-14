namespace Doenerbude {
    export class OrderContainer implements IDrawable {
        size: number = 50;
        position: Position;

        // Lebensmittel im Container
        groceries: Array<Grocery>;

        ctx: CanvasRenderingContext2D;

        constructor(_position: Position) {
            this.position = _position;
            this.groceries = [];
            
        }
        // Container mit Kapazität wird gemalt 
        draw(ctx: CanvasRenderingContext2D): void {

            // Container zeichnen
            ctx.beginPath();
            ctx.strokeStyle = "black";
            ctx.rect(this.position.x, this.position.y, this.size, this.size);
            ctx.stroke();


            // Lebensmittel mittig vom Container zeichnen
            // 10 * i versetzt jedes Lebensmittel um i * 10 Pixel, damit sie nicht genau übereinander sind
            for (let i: number = 0; i < this.groceries.length; i++) {
                this.groceries[i].position = new Position(this.position.x , this.position.y + 5 + 10 * i);
                this.groceries[i].draw(ctx);
            }

        }

        // Es wird kontrolliert ob der Container geklicked wurde
        isClicked(clickX, clickY):boolean {
            let c1: boolean = clickX >= this.position.x;
            let c2: boolean = clickX <= this.position.x + this.size;
            let c3: boolean = clickY >= this.position.y;
            let c4: boolean = clickY <= this.position.y + this.size;
            return c1 && c2 && c3 && c4;
        }
    }
}