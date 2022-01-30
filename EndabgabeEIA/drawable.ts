
namespace Doenerbude {
    export interface IDrawable {
        
        position: Position;

        draw(ctx: CanvasRenderingContext2D): void;
    }
}