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
        let capacitySelectValue = document.getElementById("capacitySelect").value;
        let warehouseSelectValue = document.getElementById("warehouseSelect").value;
        let breakSelectValue = document.getElementById("breakSelect").value;
        if (employeeSelectValue === "workers" || customerSelectValue == "customer" || capacitySelectValue == "capacity" || breakSelectValue == "break" || warehouseSelectValue == "warehouse") {
            return;
        }
        let capacity = parseInt(capacitySelectValue);
        containers.push(new Doenerbude.Container(capacity, capacity, new Doenerbude.Pepper(new Doenerbude.Position(0, 0)), new Doenerbude.Position(100, 380)));
        containers.push(new Doenerbude.Container(capacity, capacity, new Doenerbude.Onion(new Doenerbude.Position(0, 0)), new Doenerbude.Position(180, 380)));
        containers.push(new Doenerbude.Container(capacity, capacity, new Doenerbude.Tomato(new Doenerbude.Position(0, 0)), new Doenerbude.Position(260, 380)));
        containers.push(new Doenerbude.Container(capacity, capacity, new Doenerbude.Lahmacun(new Doenerbude.Position(0, 0)), new Doenerbude.Position(340, 380)));
        containers.push(new Doenerbude.Container(capacity, capacity, new Doenerbude.Kebab(new Doenerbude.Position(0, 0)), new Doenerbude.Position(420, 380)));
        containers.push(new Doenerbude.Container(capacity, capacity, new Doenerbude.Yufka(new Doenerbude.Position(0, 0)), new Doenerbude.Position(500, 380)));
        if (employeeSelectValue == "2") {
            employees.push(new Doenerbude.Employee(new Doenerbude.Position(430, 510)));
            employees.push(new Doenerbude.Employee(new Doenerbude.Position(40, 510)));
        }
        else if (employeeSelectValue == "1") {
            employees.push(new Doenerbude.Employee(new Doenerbude.Position(430, 510)));
        }
        let customersPerMinute = parseInt(customerSelectValue);
        let interval = 60 / customersPerMinute;
        ctx.canvas.addEventListener("click", handleClick);
        //  Spielfeld wird alle 10 ms neu gezeichnet.  
        setInterval(drawGame, Doenerbude.REFRESHRATE);
        //Customer wird alle X Sekunden ein neuer erzeugt
        setInterval(spawnCustomer, interval * 1000);
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
        // durch alle kunden durchgehen und zeichnen
        customers.forEach(e => e.draw(ctx));
    }
    function drawGamefield(ctx) {
        ctx.fillStyle = "lightblue";
        ctx.fillRect(0, 300, 1600, 200);
    }
    function spawnCustomer(ctx) {
        let customer = new Doenerbude.Customer(new Doenerbude.Position(300, 0));
        customers.push(customer);
        customer.moveTo(new Doenerbude.Position(50 + 30 * customers.length, 300));
        // Referenzvergleich geht hier!!
        if (customers[0] == customer) {
            customer.state = Doenerbude.CUSTOMER_STATE.ORDERED;
        }
    }
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=main.js.map