var Doenerbude;
(function (Doenerbude) {
    //Objekt wird erstellt, aber noch nicht verwedet
    class Grocery {
        position;
        color;
        groceryType;
        constructor(_position, _color, _groceryType) {
            this.position = _position;
            this.color = _color;
            this.groceryType = _groceryType;
        }
        /// Zeichnen der Zutat als Dreieck
        draw(ctx) {
            ctx.beginPath();
            ctx.strokeStyle = this.color;
            ctx.fillStyle = this.color;
            ctx.fillText(Doenerbude.GROCERY[this.groceryType], this.position.x, this.position.y + 30);
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
    // eine Klasse, welche eine Zwiebel darstellt 
    class Onion extends Grocery {
        constructor(_position) {
            super(_position, "purple", Doenerbude.GROCERY.ONION);
        }
        //Eine Zutat mit denselben Eigenschaften erstellen
        clone() {
            return new Onion(this.position);
        }
    }
    Doenerbude.Onion = Onion;
    // eine Klasse, welche einer Paprika darstellt
    class Pepper extends Grocery {
        constructor(_position) {
            super(_position, "yellow", Doenerbude.GROCERY.PEPPER);
        }
        clone() {
            return new Pepper(this.position);
        }
    }
    Doenerbude.Pepper = Pepper;
    // eine Klasse, welche eine Tomate darstellt
    class Tomato extends Grocery {
        constructor(_position) {
            super(_position, "darkred", Doenerbude.GROCERY.TOMATO);
        }
        clone() {
            return new Tomato(this.position);
        }
    }
    Doenerbude.Tomato = Tomato;
    // eine Klasse, welche einen Kebab darstellt
    class Kebab extends Grocery {
        constructor(_position) {
            super(_position, "black", Doenerbude.GROCERY.KEBAB_BREAD);
        }
        clone() {
            return new Kebab(this.position);
        }
    }
    Doenerbude.Kebab = Kebab;
    //eine Klasse, welche ein Yufka darstellt
    class Yufka extends Grocery {
        constructor(_position) {
            super(_position, "orange", Doenerbude.GROCERY.YUFKA_BREAD);
        }
        clone() {
            return new Yufka(this.position);
        }
    }
    Doenerbude.Yufka = Yufka;
    // eine Klasse, welche einen Lahmacum darstellt
    class Lahmacun extends Grocery {
        constructor(_position) {
            super(_position, "brown", Doenerbude.GROCERY.LAHMACUN_BREAD);
        }
        clone() {
            return new Lahmacun(this.position);
        }
    }
    Doenerbude.Lahmacun = Lahmacun;
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=grocery.js.map