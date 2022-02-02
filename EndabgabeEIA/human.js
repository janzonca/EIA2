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
                    //draw happy
                    break;
                case Doenerbude.MOOD.ANGRY:
                    color = "red";
                    //TODO draw angry 
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
        constructor(_position) {
            super(Doenerbude.MOOD.HAPPY, _position);
        }
        draw(ctx) {
            super.draw(ctx);
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
            let neuX = clickX - this.position.x;
            let neuY = clickY - this.position.y;
            let distance = Math.sqrt(Math.pow(neuX, 2) + Math.pow(neuY, 2));
            let isClicked = distance <= this.radius;
            return isClicked;
        }
    }
    Doenerbude.Employee = Employee;
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=human.js.map