var Doenerbude;
(function (Doenerbude) {
    class OrderContainer {
        size = 50;
        position;
        // Lebensmittel im Container
        groceries;
        ctx;
        constructor(_position) {
            this.position = _position;
            this.groceries = [];
        }
        // Container mit Kapazität wird gemalt 
        draw(ctx) {
            // Container zeichnen
            ctx.beginPath();
            ctx.strokeStyle = "black";
            ctx.rect(this.position.x, this.position.y, this.size, this.size);
            ctx.stroke();
            // Lebensmittel mittig vom Container zeichnen
            // 10 * i versetzt jedes Lebensmittel um i * 10 Pixel, damit sie nicht genau übereinander sind
            for (let i = 0; i < this.groceries.length; i++) {
                this.groceries[i].position = new Doenerbude.Position(this.position.x, this.position.y + 5 + 10 * i);
                this.groceries[i].draw(ctx);
            }
        }
        // Es wird kontrolliert ob der Container geklicked wurde
        isClicked(clickX, clickY) {
            let c1 = clickX >= this.position.x;
            let c2 = clickX <= this.position.x + this.size;
            let c3 = clickY >= this.position.y;
            let c4 = clickY <= this.position.y + this.size;
            return c1 && c2 && c3 && c4;
        }
    }
    Doenerbude.OrderContainer = OrderContainer;
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=orderContainter.js.map