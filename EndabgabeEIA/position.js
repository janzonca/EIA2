var Doenerbude;
(function (Doenerbude) {
    class Position {
        x;
        y;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(factor) {
            this.x *= factor;
            this.y *= factor;
        }
        add(add) {
            this.x += add.x;
            this.y += add.y;
        }
        getLength() {
            return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        }
    }
    Doenerbude.Position = Position;
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=position.js.map