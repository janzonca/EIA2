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
        var p = new Doenerbude.Pepper(new Doenerbude.Position(130, 130));
        p.draw(ctx);
    }
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=main.js.map