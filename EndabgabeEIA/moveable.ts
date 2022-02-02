namespace Doenerbude {
    export abstract class Moveable implements IDrawable {
        position: Position;

        protected constructor(_position: Position) {
            this.position = _position;
        }

        public moveTo(position: Position): void {
        }

        abstract draw(ctx: CanvasRenderingContext2D): void;
    }
}