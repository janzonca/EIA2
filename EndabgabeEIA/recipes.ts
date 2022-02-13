namespace Doenerbude {

    export class Order {
        product: PRODUCT;
        groceries: Array<GROCERY>
    
        constructor(_product: PRODUCT, groceries: Array<GROCERY>) {
            this.product = _product;
            this.groceries = groceries;
        }

        public toString(): string {
            let groceryStr: string = ""

            this.groceries.forEach(g => {
                groceryStr += " "
                groceryStr += GROCERY[g]
            })
            return "Ich will ein " + PRODUCT[this.product] + " mit" + groceryStr;
        }
    }

    export class Orders {

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

        public static getRandomOrder(): Order {
            return Orders.availableOrders[Orders.getRandomInt(Orders.availableOrders.length)];
        }  

        private static getRandomInt(max: number):number {
            return Math.floor(Math.random() * max);
        }  
    }
}