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
            ctx.strokeStyle = "purple";
            ctx.arc(100,60,15,0,Math.PI * 2);
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
            ctx.strokeStyle = "red";
            ctx.arc(100,100,15,0,Math.PI * 2);
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
            ctx.strokeStyle = "darkred";
            ctx.arc(100,210,15,0,Math.PI * 2);
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
            ctx.strokeStyle = "orange";
            ctx.arc(100,20,15,0,Math.PI * 2);
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
            ctx.strokeStyle = "pink";
            ctx.arc(100,170,15,0,Math.PI * 2);
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
            ctx.strokeStyle = "blue";
            ctx.arc(100,140,15,0,Math.PI * 2);
            ctx.stroke();
            
            
        
        }

    }

  
}