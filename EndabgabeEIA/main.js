var Doenerbude;
(function (Doenerbude) {
    //Pixel pro Interval
    Doenerbude.SPEED = 5;
    Doenerbude.REFRESHRATE = 20;
    let initialized = false;
    let customers = [];
    let employees = [];
    let containers = [];
    let customersPerMinute = 0;
    let currentEmployee = undefined;
    let employee = new Doenerbude.Employee(new Doenerbude.Position(100, 100));
    let pepper = new Doenerbude.Onion(new Doenerbude.Position(100, 100));
    let ctx;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        // Wir holen uns das Canva aus dem DOM, 
        let canvas = document.getElementById("canvas");
        let button = document.getElementById("startbutton");
        button.addEventListener("click", startGame);
        // Wir holen uns den Kontext vom Canva
        ctx = canvas.getContext("2d");
    }
    function startGame(_evt) {
        _evt.preventDefault();
        if (initialized) {
            return;
        }
        let employeeSelectValue = document.getElementById("employeeSelect").value;
        let customerSelectValue = document.getElementById("customerSelect").value;
        let containerSelectValue = document.getElementById("containerSelect").value;
        //das folgende ist nur beispiel:
        // push fügt dinge zum array hinzu
        employees.push(new Doenerbude.Employee(new Doenerbude.Position(430, 510)));
        employees.push(new Doenerbude.Employee(new Doenerbude.Position(40, 510)));
        containers.push(new Doenerbude.Container(10, 10, new Doenerbude.Pepper(new Doenerbude.Position(0, 0)), new Doenerbude.Position(100, 380)));
        containers.push(new Doenerbude.Container(10, 10, new Doenerbude.Onion(new Doenerbude.Position(0, 0)), new Doenerbude.Position(180, 380)));
        containers.push(new Doenerbude.Container(10, 10, new Doenerbude.Tomato(new Doenerbude.Position(0, 0)), new Doenerbude.Position(260, 380)));
        containers.push(new Doenerbude.Container(10, 10, new Doenerbude.Lahmacun(new Doenerbude.Position(0, 0)), new Doenerbude.Position(340, 380)));
        containers.push(new Doenerbude.Container(10, 10, new Doenerbude.Kebab(new Doenerbude.Position(0, 0)), new Doenerbude.Position(420, 380)));
        containers.push(new Doenerbude.Container(10, 10, new Doenerbude.Yufka(new Doenerbude.Position(0, 0)), new Doenerbude.Position(500, 380)));
        // if (employees.values = "2") {  
        // 2 mitarbeiter erzeuegn
        // else if (employees.values = "1") {
        // dann einen erzeugen
        employees.push(new Doenerbude.Employee(new Doenerbude.Position(430, 510)));
        // }
        //if (customers.values = "2") {   
        // 2 mitarbeiter erzeuegn
        // else if (customers.values = "1") {
        // dann einen erzeugen
        // }
        // dann alle container erzeugen
        // mitarbeiter initialisieren
        //behältnisse 
        ctx.canvas.addEventListener("click", handleClick);
        //  Spielfeld wird alle 10 ms neu gezeichnet.  
        setInterval(drawGame, Doenerbude.REFRESHRATE);
        initialized = true;
    }
    Doenerbude.startGame = startGame;
    function handleClick(_evt) {
        employees.forEach(employee => {
            if (employee.isClicked(_evt.offsetX, _evt.offsetY)) {
                if (currentEmployee) {
                    currentEmployee.isCurrent = false;
                }
                employee.isCurrent = true;
                currentEmployee = employee;
            }
        });
        employees.forEach(employee => {
            if (employee.isCurrent) {
                employee.moveTo(new Doenerbude.Position(_evt.offsetX, _evt.offsetY));
            }
        });
    }
    /**
     * Spielfeld wird gezeichnet. Durch clear wird das Spielfeld ausradiert.
     */
    function drawGame() {
        ctx.clearRect(0, 0, 1600, 800);
        drawGamefield(ctx);
        // durch alle mitarbeiter durchgehen und zeichnen
        employees.forEach(e => e.draw(ctx));
        // durch alle container durchgehen und zeichnen
        containers.forEach(e => e.draw(ctx));
    }
    function drawGamefield(ctx) {
        ctx.fillStyle = "lightblue";
        ctx.fillRect(0, 300, 1600, 200);
    }
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=main.js.map