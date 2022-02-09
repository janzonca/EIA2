namespace Doenerbude {
    
    //Pixel pro Interval
    export const SPEED: number = 5;

    export const REFRESHRATE: number = 20;

    let initialized = false;

    let customers: Array<Customer> = [];
    let employees: Array<Employee> = [];

    let containers: Array<Container> = [];



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


        //das folgende ist nur beispiel:
        // push fügt dinge zum array hinzu
        employees.push(new Employee(new Position(430, 510)));
        employees.push(new Employee(new Position(40, 510)));
        containers.push(new Container(10, 10, new Pepper (new Position(0,0)), new Position(100, 380)));
        containers.push(new Container(10, 10, new Onion (new Position(0,0)), new Position(180, 380)));
        containers.push(new Container(10, 10, new Tomato (new Position(0,0)), new Position(260, 380)));
        containers.push(new Container(10, 10, new Lahmacun (new Position(0,0)), new Position(340, 380)));
        containers.push(new Container(10, 10, new Kebab (new Position(0,0)), new Position(420, 380)));
        containers.push(new Container(10, 10, new Yufka (new Position(0,0)), new Position(500, 380)));
        //if (das was ausgewählt ist) {
        // 2 mitarbeiter erzeuegn
        // }
        //else if (das ander) {
        // dann einen erzeugen
        // }

        // dann alle container erzeugen


        // mitarbeiter initialisieren

        //behältnisse 
        

        
        


        ctx.canvas.addEventListener("click", handleClick);

        //  Spielfeld wird alle 10 ms neu gezeichnet.  
        setInterval(drawGame, REFRESHRATE);
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
    }

    function drawGamefield(ctx: CanvasRenderingContext2D): void {

        ctx.fillStyle = "lightblue"; 
        ctx.fillRect(0, 300, 1600, 200);
    }

    
  




}