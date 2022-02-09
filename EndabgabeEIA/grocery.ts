namespace Doenerbude { // namespace
    //Objekt wird erstellt, aber noch nicht verwedet
    export abstract class Grocery implements IDrawable {
        position: Position;
        color: string;

        constructor (_position: Position, _color: string) {
            this.position = _position;
            this.color = _color;
        }

        draw(ctx: CanvasRenderingContext2D): void {
            ctx.beginPath();
            ctx.strokeStyle = this.color;
            ctx.fillStyle = this.color;
            ctx.moveTo(this.position.x, this.position.y);
            ctx.lineTo(this.position.x + 20, this.position.y + 20);
            ctx.lineTo(this.position.x + 40, this.position.y);
            ctx.moveTo(this.position.x, this.position.y);
            ctx.closePath();
            ctx.stroke();
            ctx.fill ();
        }  
    }
//    ctx.arc(this.position.x, this.position.y, 15, 0, Math.PI * 2);


    // eine Klasse, welche eine Zwiebel darstellt 
    export class Onion extends Grocery {

        constructor(_position: Position) {
            super(_position, "purple");
        }

    }

    // eine Klasse, welche einer Paprika darstellt
    export class Pepper extends Grocery {
       
        constructor(_position: Position) {
            super(_position, "yellow");
        }

    }

// eine Klasse, welche eine Tomate darstellt
    export class Tomato extends Grocery {
       
        constructor(_position: Position) {
            super(_position, "darkred");
        }


    }
    // eine Klasse, welche einen Kebab darstellt
    export class Kebab extends Grocery {
      
        constructor(_position: Position) {
            super(_position, "black");
        }

    }
    
//eine Klasse, welche ein Yufka darstellt
    export class Yufka extends Grocery {
     
        constructor(_position: Position) {
            super(_position, "orange");
        }

    }
    // eine Klasse, welche einen Lahmacum darstellt
    export class Lahmacun extends Grocery {
        
        constructor(_position: Position) {
            super(_position, "brown");
        }

    }
}