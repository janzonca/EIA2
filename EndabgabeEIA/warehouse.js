var Doenerbude;
(function (Doenerbude) {
    class Warehouse {
        position;
        onionContainer;
        tomatoContainer;
        pepperContainer;
        lahmacunContainer;
        kebabContainer;
        yufkaContainer;
        /**
         * Objekte werden erstellt - Lager wird erstellt und Container werden instanziert
         *
         * @param _onionCapacity
         * @param _tomatoCapacity
         * @param _pepperCapacity
         * @param _lahmacunCapacity
         * @param _kebabCapacity
         * @param _yufkaCapacity
         */
        constructor(_onionCapacity, _tomatoCapacity, _pepperCapacity, _lahmacunCapacity, _kebabCapacity, _yufkaCapacity) {
            this.onionContainer = new Doenerbude.Container(_onionCapacity, _onionCapacity, new Doenerbude.Onion(new Doenerbude.Position(0, 0)), new Doenerbude.Position(0, 0));
            this.tomatoContainer = new Doenerbude.Container(_tomatoCapacity, _tomatoCapacity, new Doenerbude.Tomato(new Doenerbude.Position(0, 0)), new Doenerbude.Position(0, 0));
            this.pepperContainer = new Doenerbude.Container(_pepperCapacity, _pepperCapacity, new Doenerbude.Pepper(new Doenerbude.Position(0, 0)), new Doenerbude.Position(0, 0));
            this.lahmacunContainer = new Doenerbude.Container(_lahmacunCapacity, _lahmacunCapacity, new Doenerbude.Lahmacun(new Doenerbude.Position(0, 0)), new Doenerbude.Position(0, 0));
            this.kebabContainer = new Doenerbude.Container(_kebabCapacity, _kebabCapacity, new Doenerbude.Kebab(new Doenerbude.Position(0, 0)), new Doenerbude.Position(0, 0));
            this.yufkaContainer = new Doenerbude.Container(_yufkaCapacity, _yufkaCapacity, new Doenerbude.Yufka(new Doenerbude.Position(0, 0)), new Doenerbude.Position(0, 0));
        }
        draw(ctx) {
            throw new Error("Method not implemented.");
            ctx.beginPath();
            ctx.arc(100, 75, 50, 0, 2 * Math.PI);
            // let scale = (0.1 * 1) + (this.position.y - 600) / 1000;
            ctx.stroke();
            ctx.closePath();
            // override draw(): void {
            //     super.draw();
            // }
        }
    }
    Doenerbude.Warehouse = Warehouse;
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=warehouse.js.map