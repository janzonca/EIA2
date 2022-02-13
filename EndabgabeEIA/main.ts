namespace Doenerbude {
    
    //Pixel pro Interval
    export const SPEED: number = 5;

    export const REFRESHRATE: number = 20;

    let initialized = false;

    let customers: Array<Customer> = [];
    let employees: Array<Employee> = [];

    let containers: Array<Container> = [];

    let customersPerMinute: Number = 0;



    let currentEmployee: Employee = undefined;
    let employee: Employee = new Employee(new Position(100, 100));
    let pepper: Grocery = new Onion(new Position(100, 100));
    let ctx: CanvasRenderingContext2D;

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
    
        
        // Wir holen uns das Canva aus dem DOM, 
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");
        let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("startbutton");

        button.addEventListener("click", startGame);
        // Wir holen uns den Kontext vom Canva
        ctx = canvas.getContext("2d");
       

    }

    export function startGame(_evt: Event): void {
        _evt.preventDefault();
        if (initialized) {
            return;
        }

        let employeeSelectValue: String = document.getElementById("employeeSelect").value;
        let customerSelectValue: String = document.getElementById("customerSelect").value;
        let capacitySelectValue: String = document.getElementById("capacitySelect").value;
        let warehouseSelectValue: String = document.getElementById("warehouseSelect").value;
        let breakSelectValue: String = document.getElementById("breakSelect").value;

        if (employeeSelectValue === "workers" || customerSelectValue == "customer" || capacitySelectValue == "capacity" || breakSelectValue == "break" || warehouseSelectValue == "warehouse" ) {
            return;
        }
        

        let capacity: number = parseInt(capacitySelectValue);
        containers.push(new Container(capacity, capacity, new Pepper (new Position(0,0)), new Position(100, 380)));
        containers.push(new Container(capacity, capacity, new Onion (new Position(0,0)), new Position(180, 380)));
        containers.push(new Container(capacity, capacity, new Tomato (new Position(0,0)), new Position(260, 380)));
        containers.push(new Container(capacity, capacity, new Lahmacun (new Position(0,0)), new Position(340, 380)));
        containers.push(new Container(capacity, capacity, new Kebab (new Position(0,0)), new Position(420, 380)));
        containers.push(new Container(capacity, capacity, new Yufka (new Position(0,0)), new Position(500, 380)));
       
        if (employeeSelectValue == "2") {
            employees.push(new Employee(new Position(430, 510)));
            employees.push(new Employee(new Position(40, 510)));
        } else if (employeeSelectValue == "1") {
            employees.push(new Employee(new Position(430, 510)));
        }


        let customersPerMinute: number = parseInt(customerSelectValue);
        let interval: number = 60 / customersPerMinute


        ctx.canvas.addEventListener("click", handleClick);

        //  Spielfeld wird alle 10 ms neu gezeichnet.  
        setInterval(drawGame, REFRESHRATE);
        //Customer wird alle X Sekunden ein neuer erzeugt
        setInterval(spawnCustomer, interval * 1000);
        initialized = true;
    }


    function handleClick(_evt: PointerEvent): void {
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

                employee.moveTo(new Position(_evt.offsetX, _evt.offsetY));
            
            }
        });
       
    }

    /**
     * Spielfeld wird gezeichnet. Durch clear wird das Spielfeld ausradiert.
     */
    function drawGame(): void {
        ctx.clearRect(0, 0, 1600, 800);
        drawGamefield(ctx);

        // durch alle mitarbeiter durchgehen und zeichnen
        employees.forEach(e => e.draw(ctx));
        // durch alle container durchgehen und zeichnen
        containers.forEach(e => e.draw(ctx));
        // durch alle kunden durchgehen und zeichnen
        customers.forEach(e => e.draw(ctx));
    }

    function drawGamefield(ctx: CanvasRenderingContext2D): void {

        ctx.fillStyle = "lightblue"; 
        ctx.fillRect(0, 300, 1600, 200);
    }

    function spawnCustomer(ctx: CanvasRenderingContext2D): void {
        let customer = new Customer(new Position(300, 0));
        customers.push(customer)
        customer.moveTo(new Position(50 + 30 * customers.length, 300))

        // Referenzvergleich geht hier!!
        if (customers[0] == customer) {
            customer.state = CUSTOMER_STATE.ORDERED
        }
    }

    
  




}