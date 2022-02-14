

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
                
                break;
                case MOOD.ANGRY:
                    color = "red";
                break;
            }

            
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
            ctx.fill ();
        }
    }

    export class Customer extends Human {

        public state: CUSTOMER_STATE;
        private order: Order;


        constructor(_position: Position) {
            super(MOOD.HAPPY, _position);

            // Eine zufällige Order wird ausgewählt und dem Kunden zugewiesen
            this.order = Orders.getRandomOrder();

            // Wenn die Kundis nach 10 Sekunden noch nicht bedient wurden, werden sie wütend
            setTimeout(() => {
                    if (this.state !== CUSTOMER_STATE.FINISHED) {
                        this.mood = MOOD.ANGRY
                    }
                }, 10000 );
        }


        
        getOrder(): Order {
            return this.order;
        }

        //Überschreiben der Draw-Funktion
        draw(ctx: CanvasRenderingContext2D): void {

            // Die originale Draw-Funktion aufrufen um den Kunden zu zeichnen
            super.draw(ctx);

            //Die Order soll noch gezeichnet werden wenn der State ORDERED ist...
            if (this.state === CUSTOMER_STATE.ORDERED) {
                ctx.fillText(this.order.toString(), this.position.x, this.position.y - this.radius - 3)
            }
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


            ctx.lineWidth = 10;
            ctx.stroke();
            ctx.lineWidth = 1;
        }

        isClicked(clickX, clickY):boolean {
            // Berechnung des Abstands vom Klick zum Mittelpunkt des Mitarbeiters
            let neuX = clickX - this.position.x;
            let neuY = clickY - this.position.y;
            let distance = Math.sqrt(Math.pow(neuX, 2) + Math.pow(neuY, 2));

            // Wenn der Abstand > Radius ist, dann wurde nicht auf den Mitarbeiter geklickt
            let isClicked =  distance <= this.radius;
            return isClicked
        }
    }

}

