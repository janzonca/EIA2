namespace Doenerbude { // namespace
    //Objekt wird erstellt, aber noch nicht verwedet
    export interface IGrocery extends IDrawable {  
    }

    // eine Klasse, welche eine Zwiebel darstellt 
    export class Onion implements IGrocery {
        position: Position;

        constructor(_position: Position) {
            this.position = _position;
        }

        draw(ctx: CanvasRenderingContext2D): void {
            ctx.beginPath();
            ctx.rect(this.position.x, this.position.y, 10, 10);
            ctx.stroke();
        }

    }

    // eine Klasse, welche einer Paprika darstellt
    export class Pepper implements IGrocery {
        position: Position;

        constructor(_position: Position) {
            this.position = _position;
        }

        draw(ctx: CanvasRenderingContext2D): void {
            ctx.beginPath();
            ctx.rect(this.position.x, this.position.y, 10, 10);
            ctx.stroke();
        }

    }

// eine Klasse, welche eine Tomate darstellt
    export class Tomato implements IGrocery {
        position: Position;

        constructor(_position: Position) {
            this.position = _position;
        }

        draw(ctx: CanvasRenderingContext2D): void {
            ctx.beginPath();
            ctx.rect(this.position.x, this.position.y, 10, 10);
            ctx.stroke();
        
        }

    }
    // eine Klasse, welche einen Kebab darstellt
    export class Kebab implements IGrocery {
        position: Position;

        constructor(_position: Position) {
            this.position = _position;
        }

        draw(ctx: CanvasRenderingContext2D): void {
            ctx.beginPath();
            ctx.rect(this.position.x, this.position.y, 10, 10);
            ctx.stroke();
        
        }

    }
    
//eine Klasse, welche ein Yufka darstellt
    export class Yufka implements IGrocery {
        position: Position;

        constructor(_position: Position) {
            this.position = _position;
        }

        draw(ctx: CanvasRenderingContext2D): void {
            ctx.beginPath();
            ctx.rect(this.position.x, this.position.y, 10, 10);
            ctx.stroke();
        }
        

    }
    // eine Klasse, welche einen Lahmacum darstellt
    export class Lahmacun implements IGrocery {
        position: Position;

        constructor(_position: Position) {
            this.position = _position;
        }

        draw(ctx: CanvasRenderingContext2D): void {
            ctx.beginPath();
            ctx.rect(this.position.x, this.position.y, 10, 10);
            ctx.stroke();
        
        }

    }

    //TODO das für die anderen zutaten machen und die draw methode implementieren
}