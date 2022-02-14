var Doenerbude;
(function (Doenerbude) {
    //Pixel pro Interval
    Doenerbude.SPEED = 5;
    // Alle 20 ms wird das Spielfeld neu gezeichnet
    Doenerbude.REFRESHRATE = 20;
    // Ist true, wenn auf Start gedrückt wurde -> damit das Spiel nicht 2 mal gezeichnet wird
    let initialized = false;
    // Liste aller Kunden
    let customers = [];
    // Liste aller Mitarbeiter
    let employees = [];
    // Liste aller Container der Theke
    let containers = [];
    // Container, der die Zutaten der Bestellung enthält
    let orderPreparation = undefined;
    // ausgewählter Mitarbeiter
    let currentEmployee = undefined;
    // CanvasContext
    let ctx;
    // Wird ausgeführt nachdem die Seite geladen ist
    window.addEventListener("load", handleLoad);
    /// Initilaisiert die Seite
    function handleLoad(_event) {
        // Wir holen uns das Canva aus dem DOM, 
        let canvas = document.getElementById("canvas");
        let button = document.getElementById("startbutton");
        // Verknüpft die startGame-Funktion mit dem Klicken des Start-Knopfes
        button.addEventListener("click", startGame);
        // Wir holen uns den Kontext vom Canva
        ctx = canvas.getContext("2d");
    }
    function startGame(_evt) {
        // Wenn das nicht gemacht wird, wird die Seite immer neu geladen.
        // Verhindern des default-events
        _evt.preventDefault();
        // Wenn schon initialisiert, dann nichts machen
        if (initialized) {
            return;
        }
        // Die Werte aus den Selects holen
        let employeeSelectValue = document.getElementById("employeeSelect").value;
        let customerSelectValue = document.getElementById("customerSelect").value;
        let capacitySelectValue = document.getElementById("capacitySelect").value;
        let warehouseSelectValue = document.getElementById("warehouseSelect").value;
        let breakSelectValue = document.getElementById("breakSelect").value;
        // Wenn ein Select noch den Anfangswert enthält, dann nicht starten
        if (employeeSelectValue === "workers" || customerSelectValue == "customer" || capacitySelectValue == "capacity" || breakSelectValue == "break" || warehouseSelectValue == "warehouse") {
            return;
        }
        //Container initialisieren
        let capacity = parseInt(capacitySelectValue);
        containers.push(new Doenerbude.Container(capacity, capacity, new Doenerbude.Pepper(new Doenerbude.Position(0, 0)), new Doenerbude.Position(100, 380)));
        containers.push(new Doenerbude.Container(capacity, capacity, new Doenerbude.Onion(new Doenerbude.Position(0, 0)), new Doenerbude.Position(180, 380)));
        containers.push(new Doenerbude.Container(capacity, capacity, new Doenerbude.Tomato(new Doenerbude.Position(0, 0)), new Doenerbude.Position(260, 380)));
        containers.push(new Doenerbude.Container(capacity, capacity, new Doenerbude.Lahmacun(new Doenerbude.Position(0, 0)), new Doenerbude.Position(340, 380)));
        containers.push(new Doenerbude.Container(capacity, capacity, new Doenerbude.Kebab(new Doenerbude.Position(0, 0)), new Doenerbude.Position(420, 380)));
        containers.push(new Doenerbude.Container(capacity, capacity, new Doenerbude.Yufka(new Doenerbude.Position(0, 0)), new Doenerbude.Position(500, 380)));
        // Leere orderPreparation initialisieren
        orderPreparation = new Doenerbude.OrderContainer(new Doenerbude.Position(700, 380));
        // Mitarbeiter initialisieren
        if (employeeSelectValue == "2") {
            employees.push(new Doenerbude.Employee(new Doenerbude.Position(430, 510)));
            employees.push(new Doenerbude.Employee(new Doenerbude.Position(40, 510)));
        }
        else if (employeeSelectValue == "1") {
            employees.push(new Doenerbude.Employee(new Doenerbude.Position(430, 510)));
        }
        let customersPerMinute = parseInt(customerSelectValue);
        let interval = 60 / customersPerMinute;
        // Klick auf das Canvas mit handleClick-Funktion verknüpfen
        ctx.canvas.addEventListener("click", handleClick);
        //  Spielfeld wird alle 10 ms neu gezeichnet.  
        setInterval(drawGame, Doenerbude.REFRESHRATE);
        //Customer wird alle X Sekunden ein neuer erzeugt
        setInterval(spawnCustomer, interval * 1000);
        initialized = true;
    }
    Doenerbude.startGame = startGame;
    function handleClick(_evt) {
        handleContainerClick(_evt);
        handleEmployeeClick(_evt);
    }
    function handleEmployeeClick(_evt) {
        //prüfen ob auf einen Mitarbeiter geklickt wurde, wenn ja, dann ist dieser der ausgewählte Mitarbeiter
        employees.forEach(employee => {
            if (employee.isClicked(_evt.offsetX, _evt.offsetY)) {
                if (currentEmployee) {
                    currentEmployee.isCurrent = false;
                }
                employee.isCurrent = true;
                currentEmployee = employee;
            }
        });
        // Den ausgewählten mitarbeiter finden und bewegen, falls einer ausgewählt ist
        employees.forEach(employee => {
            if (employee.isCurrent) {
                employee.moveTo(new Doenerbude.Position(_evt.offsetX, _evt.offsetY));
            }
        });
    }
    function handleContainerClick(_evt) {
        // Wenn keine kunden existieren dann ist diese prüfung nicht relevant
        if (customers.length === 0) {
            return;
        }
        // Wenn kein Mitarbeiter ausgewählt wurde, dann ist diese prüfung nicht relevant
        if (currentEmployee === undefined) {
            return;
        }
        // Wenn sich ein Mitarbeiter gerade bewegt, darf nichts geschehen
        if (currentEmployee.isMoving) {
            return;
        }
        // Durch alle Container durcheghen
        containers.forEach(container => {
            // Wenn nicht geklickt, dann nächster Container
            if (!container.isClicked(_evt.offsetX, _evt.offsetY)) {
                return;
            }
            // Wenn Lebensmittel nicht in der Bestellung ist, dann nächster Container
            if (!customers[0].getOrder().groceries.includes(container.grocery.groceryType)) {
                return;
            }
            // Wenn der Container keine Lebensmittel beinhaltet, dann Nutzer benachrichtigen 
            if (container.count === 0) {
                alert("Container ist leer");
                return;
            }
            // Wenn alles ok ist, dann ein Lebensmittel zur orderPreparation hinzufügen und die Anzahl im Container um 1 verringern
            orderPreparation.groceries.push(container.grocery.clone());
            container.count -= 1;
            // Prüfen ob die Bestellung fertig ist
            checkCustomersOrder();
        });
    }
    /// Prüft ob die Bestellung fertig ist
    function checkCustomersOrder() {
        if (customers.length === 0) {
            return;
        }
        // Aktuelle Bestellung anschauen
        let order = customers[0].getOrder();
        // Wenn jedes Lebensmittel der Order in der orderPreparation vorhanden ist, dann ist die bestellung fertig
        if (order.groceries.every(grocery => orderPreparation.groceries.some(x => x.groceryType === grocery))) {
            orderPreparation.groceries = [];
            let customer = customers.splice(0, 1)[0];
            customer.state = Doenerbude.CUSTOMER_STATE.FINISHED;
            // Falls noch andere Kunden in der Warteschlange existieren, müssen diese behandelt werden
            if (customers.length > 0) {
                // Der nächste Kunde bestellt -> state = CUSTOMER_STATE.ORDERED
                customers[0].state = Doenerbude.CUSTOMER_STATE.ORDERED;
                // Alle anderen Kunden rücken in der Schlange ein auf
                for (let i = 0; i < customers.length; i++) {
                    customers[i].moveTo(new Doenerbude.Position(50 + 30 * (i + 1), 300));
                }
            }
        }
    }
    /**
     * Spielfeld wird gezeichnet. Durch clear wird das Spielfeld ausradiert.
     * Diese Funktion wird alle REFRESHTIME ms gezeichnet
     */
    function drawGame() {
        // Canvas wegradieren 
        ctx.clearRect(0, 0, 1600, 800);
        // Das Spielfeld zeichnen
        drawGamefield(ctx);
        // durch alle mitarbeiter durchgehen und zeichnen
        employees.forEach(e => e.draw(ctx));
        // durch alle container durchgehen und zeichnen
        containers.forEach(e => e.draw(ctx));
        // durch alle kunden durchgehen und zeichnen
        customers.forEach(e => e.draw(ctx));
        // orderPreparation zeichnen
        orderPreparation.draw(ctx);
    }
    // Zeichnet die Theke
    function drawGamefield(ctx) {
        ctx.fillStyle = "lightblue";
        ctx.fillRect(0, 300, 1600, 200);
    }
    // Spawnt einen neuen Kunden
    function spawnCustomer(ctx) {
        let customer = new Doenerbude.Customer(new Doenerbude.Position(300, 0));
        // Kunden zum CustomerArray hinzufügen
        customers.push(customer);
        // Kunden an das Ende der Warteschlange bewegen
        customer.moveTo(new Doenerbude.Position(50 + 30 * customers.length, 300));
        // Referenzvergleich geht hier!!
        if (customers[0] == customer) {
            customer.state = Doenerbude.CUSTOMER_STATE.ORDERED;
        }
    }
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=main.js.map