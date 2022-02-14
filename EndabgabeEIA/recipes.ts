namespace Doenerbude {

    /// Diese Klasse definiert eine Bestellung
    export class Order {

        product: PRODUCT;
        groceries: Array<GROCERY>
    
        constructor(_product: PRODUCT, groceries: Array<GROCERY>) {
            this.product = _product;
            this.groceries = groceries;
        }

        public toString(): string {
            let groceryStr: string = ""

            // Durch alle Lebensmittel der Order iterieren
            this.groceries.forEach(g => {
                // Leerzeichen zum String hinzufügen
                groceryStr += " "
                // Lebensmittel zum String hinzufügen
                groceryStr += GROCERY[g]
            })
            return "Ich will ein " + PRODUCT[this.product] + " mit" + groceryStr;
        }
    }

    export class Orders {
        /// Verfügbaren bestellungen
        private static availableOrders: Array<Order> = [
            new Order( PRODUCT.KEBAB, [ GROCERY.KEBAB_BREAD, GROCERY.ONION, GROCERY.TOMATO ]),
            new Order( PRODUCT.YUFKA, [ GROCERY.YUFKA_BREAD, GROCERY.PEPPER, GROCERY.ONION ]),
            new Order( PRODUCT.KEBAB, [ GROCERY.KEBAB_BREAD, GROCERY.ONION, GROCERY.PEPPER ]),
            new Order( PRODUCT.KEBAB, [ GROCERY.KEBAB_BREAD, GROCERY.ONION]),
            new Order( PRODUCT.YUFKA, [ GROCERY.YUFKA_BREAD, GROCERY.PEPPER, GROCERY.ONION , GROCERY.TOMATO]),
            new Order( PRODUCT.YUFKA, [ GROCERY.YUFKA_BREAD, GROCERY.ONION ]),
            new Order( PRODUCT.LAHMACUN, [ GROCERY.LAHMACUN_BREAD, GROCERY.PEPPER, GROCERY.ONION ]),
            new Order( PRODUCT.LAHMACUN, [ GROCERY.LAHMACUN_BREAD, GROCERY.TOMATO, GROCERY.ONION ]),
            new Order( PRODUCT.LAHMACUN, [ GROCERY.LAHMACUN_BREAD, GROCERY.PEPPER ]),
            new Order( PRODUCT.LAHMACUN, [ GROCERY.LAHMACUN_BREAD, GROCERY.TOMATO ])
        ];

        /// Gibt eine zufällige Bestellung zurück
        public static getRandomOrder(): Order {
            let randomNumber: number = Orders.getRandomNumber(Orders.availableOrders.length)
            return Orders.availableOrders[randomNumber];
        }  

        /// Gibt zufällige Nummer zwischen 0 und max zurück
        private static getRandomNumber(max: number):number {
            return Math.floor(Math.random() * max);
        }  
    }
}