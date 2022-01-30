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
//
        var p = new Pepper(new Position(130, 130));
        p.draw(ctx!);

        var t = new Tomato(new Position(160, 160));
        t.draw(ctx!);

        var k = new Kebab(new Position (190, 190));
        k.draw(ctx!);

        var y = new Yufka(new Position (220, 220));
        y.draw(ctx!);

        var l = new Lahmacun (new Position (250, 250));
        l.draw(ctx!);

        

    }
}