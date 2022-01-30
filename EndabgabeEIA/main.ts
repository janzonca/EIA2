namespace Doenerbude {
    

    export let crc2: CanvasRenderingContext2D;
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
    
        // Wir holen uns das Canva aus dem DOM, 
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        console.log(canvas)
        // Wir holen uns den Kontext vom Canva
        let ctx = canvas.getContext("2d");
        // Wir erstellen das Lager
        var o = new Onion(new Position(100, 100));
        // und zeichnen das Lager
        o.draw(ctx!);

        var p = new Pepper(new Position(130, 130));
        p.draw(ctx!);
    }
}