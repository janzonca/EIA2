namespace Doenerbude {
    
    //Pixel pro Interval
    export const SPEED: number = 5;
    // Alle 20 ms wird das Spielfeld neu gezeichnet
    export const REFRESHRATE: number = 20;
    // Ist true, wenn auf Start gedrückt wurde -> damit das Spiel nicht 2 mal gezeichnet wird
    let initialized = false;

    // Liste aller Kunden
    let customers: Array<Customer> = [];
    // Liste aller Mitarbeiter
    let employees: Array<Employee> = [];
    // Liste aller Container der Theke
    let containers: Array<Container> = [];
    
    // Container, der die Zutaten der Bestellung enthält
    let orderPreparation: OrderContainer = undefined;

    // ausgewählter Mitarbeiter
    let currentEmployee: Employee = undefined;
    
    // CanvasContext
    let ctx: CanvasRenderingContext2D;

    // Wird ausgeführt nachdem die Seite geladen ist
    window.addEventListener("load", handleLoad);


    /// Initilaisiert die Seite
    function handleLoad(_event: Event): void {
    
        
        // Wir holen uns das Canva aus dem DOM, 
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");
        let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("startbutton");

        // Verknüpft die startGame-Funktion mit dem Klicken des Start-Knopfes
        button.addEventListener("click", startGame);

        // Wir holen uns den Kontext vom Canva
        ctx = canvas.getContext("2d");
       

    }

    export function startGame(_evt: Event): void {
        // Wenn das nicht gemacht wird, wird die Seite immer neu geladen.
        // Verhindern des default-events
        _evt.preventDefault();

        // Wenn schon initialisiert, dann nichts machen
        if (initialized) {
            return;
        }

        // Die Werte aus den Selects holen
        let employeeSelectValue: String = document.getElementById("employeeSelect").value;
        let customerSelectValue: String = document.getElementById("customerSelect").value;
        let capacitySelectValue: String = document.getElementById("capacitySelect").value;
        let warehouseSelectValue: String = document.getElementById("warehouseSelect").value;
        let breakSelectValue: String = document.getElementById("breakSelect").value;

        // Wenn ein Select noch den Anfangswert enthält, dann nicht starten
        if (employeeSelectValue === "workers" || customerSelectValue == "customer" || capacitySelectValue == "capacity" || breakSelectValue == "break" || warehouseSelectValue == "warehouse" ) {
            return;
        }
        

        //Container initialisieren
        let capacity: number = parseInt(capacitySelectValue);
        containers.push(new Container(capacity, capacity, new Pepper (new Position(0,0)), new Position(100, 380)));
        containers.push(new Container(capacity, capacity, new Onion (new Position(0,0)), new Position(180, 380)));
        containers.push(new Container(capacity, capacity, new Tomato (new Position(0,0)), new Position(260, 380)));
        containers.push(new Container(capacity, capacity, new Lahmacun (new Position(0,0)), new Position(340, 380)));
        containers.push(new Container(capacity, capacity, new Kebab (new Position(0,0)), new Position(420, 380)));
        containers.push(new Container(capacity, capacity, new Yufka (new Position(0,0)), new Position(500, 380)));
       
        // Leere orderPreparation initialisieren
        orderPreparation = new OrderContainer(new Position(700, 380))

        // Mitarbeiter initialisieren
        if (employeeSelectValue == "2") {
            employees.push(new Employee(new Position(430, 510)));
            employees.push(new Employee(new Position(40, 510)));
        } else if (employeeSelectValue == "1") {
            employees.push(new Employee(new Position(430, 510)));
        }


        let customersPerMinute: number = parseInt(customerSelectValue);
        let interval: number = 60 / customersPerMinute


        // Klick auf das Canvas mit handleClick-Funktion verknüpfen
        ctx.canvas.addEventListener("click", handleClick);

        //  Spielfeld wird alle 10 ms neu gezeichnet.  
        setInterval(drawGame, REFRESHRATE);
        
        //Customer wird alle X Sekunden ein neuer erzeugt
        setInterval(spawnCustomer, interval * 1000);
        initialized = true;
    }


    function handleClick(_evt: PointerEvent): void {
        handleContainerClick(_evt);
        handleEmployeeClick(_evt);
    }

    function handleEmployeeClick(_evt: PointerEvent) {
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

                employee.moveTo(new Position(_evt.offsetX, _evt.offsetY));

            }
        });
    }

    function handleContainerClick(_evt: PointerEvent): void {
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
            if (!customers[0].getOrder().groceries.includes(container.grocery.groceryType)){
                return;
            }

            // Wenn der Container keine Lebensmittel beinhaltet, dann Nutzer benachrichtigen 
            if (container.count === 0) {
                alert("Container ist leer")
                return
            }

            // Wenn alles ok ist, dann ein Lebensmittel zur orderPreparation hinzufügen und die Anzahl im Container um 1 verringern
            orderPreparation.groceries.push(container.grocery.clone());
            container.count -= 1;

            // Prüfen ob die Bestellung fertig ist
            checkCustomersOrder()
        });
    }

    /// Prüft ob die Bestellung fertig ist
    function checkCustomersOrder(): void {
        if (customers.length === 0) {
            return
        }

        // Aktuelle Bestellung anschauen
        let order = customers[0].getOrder();
        // Wenn jedes Lebensmittel der Order in der orderPreparation vorhanden ist, dann ist die bestellung fertig
        if (order.groceries.every(grocery => orderPreparation.groceries.some( x => x.groceryType === grocery))) {
            orderPreparation.groceries = [];
            let customer = customers.splice(0, 1)[0];
            customer.state = CUSTOMER_STATE.FINISHED

            // Falls noch andere Kunden in der Warteschlange existieren, müssen diese behandelt werden
            if (customers.length > 0 ) {
                // Der nächste Kunde bestellt -> state = CUSTOMER_STATE.ORDERED
                customers[0].state = CUSTOMER_STATE.ORDERED
    
                
                // Alle anderen Kunden rücken in der Schlange ein auf
                for (let i = 0; i < customers.length; i++) {
                    customers[i].moveTo(new Position(50 + 30 * (i + 1), 300))
                }
            }
        }
    }

    /**
     * Spielfeld wird gezeichnet. Durch clear wird das Spielfeld ausradiert.
     * Diese Funktion wird alle REFRESHTIME ms gezeichnet
     */
    function drawGame(): void {
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
    function drawGamefield(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "lightblue"; 
        ctx.fillRect(0, 300, 1600, 200);
    }

    // Spawnt einen neuen Kunden
    function spawnCustomer(ctx: CanvasRenderingContext2D): void {
        let customer = new Customer(new Position(300, 0));
        // Kunden zum CustomerArray hinzufügen
        customers.push(customer)
        // Kunden an das Ende der Warteschlange bewegen
        customer.moveTo(new Position(50 + 30 * customers.length, 300))

        // Referenzvergleich geht hier!!
        if (customers[0] == customer) {
            customer.state = CUSTOMER_STATE.ORDERED
        }
    }

    
  




}