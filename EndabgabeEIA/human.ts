

namespace Doenerbude {
    export abstract class Human extends Moveable {
        radius: number = 15;
        mood: MOOD;

        constructor(_mood: MOOD, _position: Position) {
            super(_position);
            this.mood = _mood;
        }

        draw(ctx: CanvasRenderingContext2D): void {
            let color: string = "green";
            switch(this.mood) {
                case MOOD.HAPPY:
                    color = "green";
                
                    //draw happy
                break;
                case MOOD.ANGRY:
                    color = "red";
                    //TODO draw angry 
                break;
            }

            
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
            ctx.fill ();
        }
    }

    export class Customer extends Human {


        constructor(_position: Position) {
            super(MOOD.HAPPY, _position);
        }



        draw(ctx: CanvasRenderingContext2D): void {
            super.draw(ctx);
        }
    }

    export class Employee extends Human {

        isCurrent: boolean;
        constructor(_position: Position) {
            super(MOOD.HAPPY, _position);

            this.isCurrent = false;
        }



        draw(ctx: CanvasRenderingContext2D): void {
            super.draw(ctx);
            if (this.isCurrent) {
                ctx.strokeStyle = "black";
            } else {
                ctx.strokeStyle = "grey";
            }


            ctx.lineWidth = 10
            ctx.stroke()
            ctx.lineWidth = 1
        }

        isClicked(clickX, clickY):boolean {
            let neuX = clickX - this.position.x;
            let neuY = clickY - this.position.y;
            let distance = Math.sqrt(Math.pow(neuX, 2) + Math.pow(neuY, 2));
            let isClicked =  distance <= this.radius;
            return isClicked    
        }
    }

}

