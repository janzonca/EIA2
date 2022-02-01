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
            ctx.strokeStyle = "purple";
            ctx.fillStyle = "purple";
            ctx.arc(100, 60, 15, 0, Math.PI * 2);
            ctx.stroke();
            ctx.fill();
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
            ctx.strokeStyle = "red";
            ctx.fillStyle = "red";
            ctx.arc(100, 100, 15, 0, Math.PI * 2);
            ctx.stroke();
            ctx.fill();
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
            ctx.strokeStyle = "darkred";
            ctx.fillStyle = "darkred";
            ctx.arc(100, 220, 15, 0, Math.PI * 2);
            ctx.stroke();
            ctx.fill();
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
            ctx.strokeStyle = "orange";
            ctx.fillStyle = "orange";
            ctx.arc(100, 20, 15, 0, Math.PI * 2);
            ctx.stroke();
            ctx.fill();
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
            ctx.strokeStyle = "pink";
            ctx.fillStyle = "pink";
            ctx.arc(100, 180, 15, 0, Math.PI * 2);
            ctx.stroke();
            ctx.fill();
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
            ctx.strokeStyle = "blue";
            ctx.fillStyle = "blue";
            ctx.arc(100, 140, 15, 0, Math.PI * 2);
            ctx.stroke();
            ctx.fill();
        }
    }
    Doenerbude.Lahmacun = Lahmacun;
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=grocery.js.map