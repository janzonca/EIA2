namespace Doenerbude { // namespace
    //Objekt wird erstellt, aber noch nicht verwedet
    export abstract class Grocery implements IDrawable {
        position: Position;
        color: string;
        groceryType: GROCERY;

        constructor (_position: Position, _color: string, _groceryType: GROCERY) {
            this.position = _position;
            this.color = _color;
            this.groceryType = _groceryType;
        }

        /// Zeichnen der Zutat als Dreieck
        public draw(ctx: CanvasRenderingContext2D): void {
            ctx.beginPath();
            ctx.strokeStyle = this.color;
            ctx.fillStyle = this.color;
            ctx.fillText(GROCERY[this.groceryType], this.position.x, this.position.y + 30)
            ctx.moveTo(this.position.x, this.position.y);
            ctx.lineTo(this.position.x + 20, this.position.y + 20);
            ctx.lineTo(this.position.x + 40, this.position.y);
            ctx.moveTo(this.position.x, this.position.y);
            ctx.closePath();
            ctx.stroke();
            ctx.fill ();
        }

        // Zutaten sollen geklont werden können, damit sie in die Bestellung reinkommen
        abstract clone(): void;
        
    }



    // eine Klasse, welche eine Zwiebel darstellt 
    export class Onion extends Grocery {

        constructor(_position: Position) {
            super(_position, "purple", GROCERY.ONION);
        }

        //Eine Zutat mit denselben Eigenschaften erstellen
        clone(): Grocery {
            return new Onion(this.position);
        }

    }

    // eine Klasse, welche einer Paprika darstellt
    export class Pepper extends Grocery {
       
        constructor(_position: Position) {
            super(_position, "yellow", GROCERY.PEPPER);
        }

        clone(): Grocery {
            return new Pepper(this.position);
        }

    }

// eine Klasse, welche eine Tomate darstellt
    export class Tomato extends Grocery {
       
        constructor(_position: Position) {
            super(_position, "darkred", GROCERY.TOMATO);
        }

        clone(): Grocery {
            return new Tomato(this.position);
        }


    }
    // eine Klasse, welche einen Kebab darstellt
    export class Kebab extends Grocery {
      
        constructor(_position: Position) {
            super(_position, "black", GROCERY.KEBAB_BREAD);
        }
        clone(): Grocery {
            return new Kebab(this.position);
        }
    }
    
//eine Klasse, welche ein Yufka darstellt
    export class Yufka extends Grocery {
     
        constructor(_position: Position) {
            super(_position, "orange", GROCERY.YUFKA_BREAD);
        }
        clone(): Grocery {
            return new Yufka(this.position);
        }

    }
    // eine Klasse, welche einen Lahmacum darstellt
    export class Lahmacun extends Grocery {
        
        constructor(_position: Position) {
            super(_position, "brown", GROCERY.LAHMACUN_BREAD);
        }
        clone(): Grocery {
            return new Lahmacun(this.position);
        }
    }
}