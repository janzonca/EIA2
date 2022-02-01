var Doenerbude;
(function (Doenerbude) {
    class Container {
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
            ctx.rect(this.position.x, this.position.y, 10, 10);
            ctx.stroke();
        }
    }
    Doenerbude.Container = Container;
})(Doenerbude || (Doenerbude = {}));
//TODO hier den container zeichen und dann die position der grocery in den container setzen
//# sourceMappingURL=container.js.map