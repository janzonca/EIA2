namespace Doenerbude {
    export class Warehouse implements IDrawable {
        position: Position;

        onionContainer: Container;
        tomatoContainer: Container;
        pepperContainer: Container;
        lahmacunContainer: Container;
        kebabContainer: Container;
        yufkaContainer: Container;
        
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
        constructor( _onionCapacity: number, _tomatoCapacity: number, _pepperCapacity: number, _lahmacunCapacity: number, _kebabCapacity: number, _yufkaCapacity: number) { // Objekte werden erzeugt
            this.onionContainer = new Container(_onionCapacity, _onionCapacity, new Onion(new Position(0,0)), new Position(0, 0));
            this.tomatoContainer = new Container(_tomatoCapacity, _tomatoCapacity, new Tomato (new Position(0,0)), new Position(0, 0));
            this.pepperContainer = new Container(_pepperCapacity, _pepperCapacity, new Pepper(new Position(0,0)), new Position(0, 0));
            this.lahmacunContainer = new Container(_lahmacunCapacity, _lahmacunCapacity, new Lahmacun(new Position(0,0)), new Position(0, 0));
            this.kebabContainer = new Container(_kebabCapacity, _kebabCapacity, new Kebab(new Position(0,0)), new Position(0, 0));
            this.yufkaContainer = new Container(_yufkaCapacity, _yufkaCapacity, new Yufka(new Position(0,0)), new Position(0, 0));
            
        }

        draw(ctx:CanvasRenderingContext2D): void {
            throw new Error("Method not implemented.");
            ctx.beginPath();
            ctx.arc(100, 75, 50, 0, 2 * Math.PI);
            // let scale = (0.1 * 1) + (this.position.y - 600) / 1000;
            ctx.stroke();
            ctx.closePath();
    

        // override draw(): void {
        //     super.draw();
        // }
    
    }}}
