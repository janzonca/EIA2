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
        draw() {
        }
    }
    Doenerbude.Container = Container;
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=container.js.map