var Doenerbude;
(function (Doenerbude) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        // Wir holen uns das Canva aus dem DOM, 
        let canvas = document.querySelector("canvas");
        console.log(canvas);
        // Wir holen uns den Kontext vom Canva
        let ctx = canvas.getContext("2d");
        // Wir erstellen das Lager
        var o = new Doenerbude.Onion(new Doenerbude.Position(100, 100));
        // und zeichnen das Lager
        o.draw(ctx);
        //
        var p = new Doenerbude.Pepper(new Doenerbude.Position(130, 130));
        p.draw(ctx);
        var t = new Doenerbude.Tomato(new Doenerbude.Position(160, 160));
        t.draw(ctx);
        var k = new Doenerbude.Kebab(new Doenerbude.Position(190, 190));
        k.draw(ctx);
        var y = new Doenerbude.Yufka(new Doenerbude.Position(220, 220));
        y.draw(ctx);
        var l = new Doenerbude.Lahmacun(new Doenerbude.Position(250, 250));
        l.draw(ctx);
    }
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=main.js.map