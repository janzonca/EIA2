var Doenerbude;
(function (Doenerbude) {
    let employee = new Doenerbude.Employee(new Doenerbude.Position(100, 100));
    let ctx;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        // Wir holen uns das Canva aus dem DOM, 
        let canvas = document.querySelector("canvas");
        canvas.addEventListener("pointerdown", handleClick);
        console.log(canvas);
        // Wir holen uns den Kontext vom Canva
        ctx = canvas.getContext("2d");
        // Wir erstellen das Lager
        employee.draw(ctx);
        drawGamefield(ctx);
    }
    function drawGamefield(ctx) {
        //TODO Theke zeichnen
    }
    function handleClick(_evt) {
        if (employee.isClicked(_evt.offsetX, _evt.offsetY)) {
            employee.isCurrent = true;
        }
        else {
            employee.isCurrent = false;
        }
        console.log(_evt.offsetX + " " + _evt.offsetY);
        ctx.clearRect(0, 0, 1600, 800);
        employee.draw(ctx);
    }
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=main.js.map