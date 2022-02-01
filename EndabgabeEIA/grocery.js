var Doenerbude;
(function (Doenerbude) {
    // eine Klasse, welche eine Zwiebel darstellt 
    class Onion {
        position;
        constructor(_position) {
            this.position = _position;
        }
        draw(ctx) {
            ctx.beginPath();
            ctx.rect(this.position.x, this.position.y, 10, 10);
            ctx.stroke();
            ctx.strokeStyle = "purple";
        }
    }
    Doenerbude.Onion = Onion;
    // eine Klasse, welche einer Paprika darstellt
    class Pepper {
        position;
        constructor(_position) {
            this.position = _position;
        }
        draw(ctx) {
            ctx.beginPath();
            ctx.rect(this.position.x, this.position.y, 10, 10);
            ctx.stroke();
            ctx.strokeStyle = "red";
            ctx.fillStyle = "red";
            ctx.fillRect(10, 10, 10, 10);
        }
    }
    Doenerbude.Pepper = Pepper;
    // eine Klasse, welche eine Tomate darstellt
    class Tomato {
        position;
        constructor(_position) {
            this.position = _position;
        }
        draw(ctx) {
            ctx.beginPath();
            ctx.rect(this.position.x, this.position.y, 10, 10);
            ctx.stroke();
            ctx.strokeStyle = "darkred";
            ctx.strokeStyle = "darkred";
            ctx.fillStyle = "darkred";
            ctx.fillRect(10, 10, 10, 10);
        }
    }
    Doenerbude.Tomato = Tomato;
    // eine Klasse, welche einen Kebab darstellt
    class Kebab {
        position;
        constructor(_position) {
            this.position = _position;
        }
        draw(ctx) {
            ctx.beginPath();
            ctx.rect(this.position.x, this.position.y, 10, 10);
            ctx.stroke();
            ctx.strokeStyle = "yellow";
        }
    }
    Doenerbude.Kebab = Kebab;
    //eine Klasse, welche ein Yufka darstellt
    class Yufka {
        position;
        constructor(_position) {
            this.position = _position;
        }
        draw(ctx) {
            ctx.beginPath();
            ctx.rect(this.position.x, this.position.y, 10, 10);
            ctx.strokeStyle = "yellow";
        }
    }
    Doenerbude.Yufka = Yufka;
    // eine Klasse, welche einen Lahmacum darstellt
    class Lahmacun {
        position;
        constructor(_position) {
            this.position = _position;
        }
        draw(ctx) {
            ctx.beginPath();
            ctx.rect(this.position.x, this.position.y, 10, 10);
            ctx.stroke();
            ctx.strokeStyle = "yellow";
        }
    }
    Doenerbude.Lahmacun = Lahmacun;
    //TODO das für die anderen zutaten machen und die draw methode implementieren
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=grocery.js.map