var Doenerbude;
(function (Doenerbude) {
    class Human extends Doenerbude.Moveable {
        radius = 15;
        mood;
        constructor(_mood, _position) {
            super(_position);
            this.mood = _mood;
        }
        draw(ctx) {
            let color = "green";
            switch (this.mood) {
                case Doenerbude.MOOD.HAPPY:
                    color = "green";
                    break;
                case Doenerbude.MOOD.ANGRY:
                    color = "red";
                    break;
            }
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    Doenerbude.Human = Human;
    class Customer extends Human {
        state;
        order;
        constructor(_position) {
            super(Doenerbude.MOOD.HAPPY, _position);
            // Eine zufällige Order wird ausgewählt und dem Kunden zugewiesen
            this.order = Doenerbude.Orders.getRandomOrder();
            // Wenn die Kundis nach 10 Sekunden noch nicht bedient wurden, werden sie wütend
            setTimeout(() => {
                if (this.state !== Doenerbude.CUSTOMER_STATE.FINISHED) {
                    this.mood = Doenerbude.MOOD.ANGRY;
                }
            }, 10000);
        }
        getOrder() {
            return this.order;
        }
        //Überschreiben der Draw-Funktion
        draw(ctx) {
            // Die originale Draw-Funktion aufrufen um den Kunden zu zeichnen
            super.draw(ctx);
            //Die Order soll noch gezeichnet werden wenn der State ORDERED ist...
            if (this.state === Doenerbude.CUSTOMER_STATE.ORDERED) {
                ctx.fillText(this.order.toString(), this.position.x, this.position.y - this.radius - 3);
            }
        }
    }
    Doenerbude.Customer = Customer;
    class Employee extends Human {
        isCurrent;
        constructor(_position) {
            super(Doenerbude.MOOD.HAPPY, _position);
            this.isCurrent = false;
        }
        draw(ctx) {
            super.draw(ctx);
            if (this.isCurrent) {
                ctx.strokeStyle = "black";
            }
            else {
                ctx.strokeStyle = "grey";
            }
            ctx.lineWidth = 10;
            ctx.stroke();
            ctx.lineWidth = 1;
        }
        isClicked(clickX, clickY) {
            // Berechnung des Abstands vom Klick zum Mittelpunkt des Mitarbeiters
            let neuX = clickX - this.position.x;
            let neuY = clickY - this.position.y;
            let distance = Math.sqrt(Math.pow(neuX, 2) + Math.pow(neuY, 2));
            // Wenn der Abstand > Radius ist, dann wurde nicht auf den Mitarbeiter geklickt
            let isClicked = distance <= this.radius;
            return isClicked;
        }
    }
    Doenerbude.Employee = Employee;
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=human.js.map