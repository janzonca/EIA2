
namespace Doenerbude {
    export interface IDrawable {
        // Jedes Element, welches gezeichnet werden soll, muss eine Position besitzen
        position: Position;
        // und die Draw-Funktion implementieren
        draw(ctx: CanvasRenderingContext2D): void;
    }
}
