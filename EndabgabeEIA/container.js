var Doenerbude;
(function (Doenerbude) {
    class Container {
        // Größe des Containers (beim Zeichen)
        size = 50;
        // Jeder Container hat eine Position
        position;
        // Kapazität des Containers
        capacity;
        // Anzahl der Lebensmittel im Container
        count;
        // Lebensmittel im Container
        grocery;
        constructor(_capacity, _count, _grocery, _position) {
            this.position = _position;
            this.capacity = _capacity;
            this.count = _count;
            this.grocery = _grocery;
        }
        // Container mit Kapazität wird gemalt 
        draw(ctx) {
            ctx.beginPath();
            // Wenn keine Lebensmittel mehr im Container sind, dann wird die Anzahl rot gezeichnet
            if (this.count === 0) {
                ctx.fillStyle = "red";
            }
            else {
                ctx.fillStyle = "black";
            }
            // Anzahl/Kapazität
            ctx.fillText(this.count + "/" + this.capacity, this.position.x, this.position.y - 5);
            ctx.strokeStyle = "black";
            ctx.rect(this.position.x, this.position.y, this.size, this.size);
            ctx.stroke();
            // Lebensmittel wird mittig vom Container gemalt
            this.grocery.position = new Doenerbude.Position(this.position.x - 20 + this.size / 2, this.position.y - 10 + this.size / 2);
            this.grocery.draw(ctx);
        }
        // Es wird kontrolliert ob der Container geklicked wurde
        isClicked(clickX, clickY) {
            // prüfen ob der Klick innerhalb aller Seiten liegt
            // linke Seite
            let c1 = clickX >= this.position.x;
            // rechte Seite
            let c2 = clickX <= this.position.x + this.size;
            // obere Seite
            let c3 = clickY >= this.position.y;
            // untere Seite
            let c4 = clickY <= this.position.y + this.size;
            // Wenn alles erfüllt ist, dann wird true zurückgegeben
            return c1 && c2 && c3 && c4;
        }
    }
    Doenerbude.Container = Container;
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=container.js.map