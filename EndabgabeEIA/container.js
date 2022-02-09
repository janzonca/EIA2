var Doenerbude;
(function (Doenerbude) {
    class Container {
        size = 50;
        position;
        capacity;
        count;
        grocery;
        ctx;
        constructor(_capacity, _count, _grocery, _position) {
            this.position = _position;
            this.capacity = _capacity;
            this.count = _count;
            this.grocery = _grocery;
        }
        draw(ctx) {
            ctx.beginPath();
            ctx.strokeStyle = "black";
            ctx.rect(this.position.x, this.position.y, this.size, this.size);
            ctx.stroke();
            this.grocery.position = new Doenerbude.Position(this.position.x - 20 + this.size / 2, this.position.y - 10 + this.size / 2);
            this.grocery.draw(ctx);
        }
        isClicked(clickX, clickY) {
            let c1 = clickX >= this.position.x;
            let c2 = clickX <= this.position.x + this.size;
            let c3 = clickY >= this.position.y;
            let c4 = clickY <= this.position.y + this.size;
            return c1 && c2 && c3 && c4;
        }
    }
    Doenerbude.Container = Container;
})(Doenerbude || (Doenerbude = {}));
//TODO hier den container zeichen und dann die position der grocery in den container setzen
//# sourceMappingURL=container.js.map