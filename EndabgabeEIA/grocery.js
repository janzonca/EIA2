var Doenerbude;
(function (Doenerbude) {
    //Objekt wird erstellt, aber noch nicht verwedet
    class Grocery {
        position;
        color;
        constructor(_position, _color) {
            this.position = _position;
            this.color = _color;
        }
        draw(ctx) {
            ctx.beginPath();
            ctx.strokeStyle = this.color;
            ctx.fillStyle = this.color;
            ctx.moveTo(this.position.x, this.position.y);
            ctx.lineTo(this.position.x + 20, this.position.y + 20);
            ctx.lineTo(this.position.x + 40, this.position.y);
            ctx.moveTo(this.position.x, this.position.y);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
        }
    }
    Doenerbude.Grocery = Grocery;
    //    ctx.arc(this.position.x, this.position.y, 15, 0, Math.PI * 2);
    // eine Klasse, welche eine Zwiebel darstellt 
    class Onion extends Grocery {
        constructor(_position) {
            super(_position, "purple");
        }
    }
    Doenerbude.Onion = Onion;
    // eine Klasse, welche einer Paprika darstellt
    class Pepper extends Grocery {
        constructor(_position) {
            super(_position, "yellow");
        }
    }
    Doenerbude.Pepper = Pepper;
    // eine Klasse, welche eine Tomate darstellt
    class Tomato extends Grocery {
        constructor(_position) {
            super(_position, "darkred");
        }
    }
    Doenerbude.Tomato = Tomato;
    // eine Klasse, welche einen Kebab darstellt
    class Kebab extends Grocery {
        constructor(_position) {
            super(_position, "black");
        }
    }
    Doenerbude.Kebab = Kebab;
    //eine Klasse, welche ein Yufka darstellt
    class Yufka extends Grocery {
        constructor(_position) {
            super(_position, "orange");
        }
    }
    Doenerbude.Yufka = Yufka;
    // eine Klasse, welche einen Lahmacum darstellt
    class Lahmacun extends Grocery {
        constructor(_position) {
            super(_position, "brown");
        }
    }
    Doenerbude.Lahmacun = Lahmacun;
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=grocery.js.map