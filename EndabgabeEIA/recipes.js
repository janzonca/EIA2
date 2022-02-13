var Doenerbude;
(function (Doenerbude) {
    class Order {
        product;
        groceries;
        constructor(_product, groceries) {
            this.product = _product;
            this.groceries = groceries;
        }
        toString() {
            let groceryStr = "";
            this.groceries.forEach(g => {
                groceryStr += " ";
                groceryStr += Doenerbude.GROCERY[g];
            });
            return "Ich will ein " + Doenerbude.PRODUCT[this.product] + " mit" + groceryStr;
        }
    }
    Doenerbude.Order = Order;
    class Orders {
        static availableOrders = [
            new Order(Doenerbude.PRODUCT.KEBAB, [Doenerbude.GROCERY.KEBAB_BREAD, Doenerbude.GROCERY.ONION, Doenerbude.GROCERY.TOMATO]),
            new Order(Doenerbude.PRODUCT.YUFKA, [Doenerbude.GROCERY.YUFKA_BREAD, Doenerbude.GROCERY.PEPPER, Doenerbude.GROCERY.ONION]),
            new Order(Doenerbude.PRODUCT.KEBAB, [Doenerbude.GROCERY.KEBAB_BREAD, Doenerbude.GROCERY.ONION, Doenerbude.GROCERY.PEPPER]),
            new Order(Doenerbude.PRODUCT.KEBAB, [Doenerbude.GROCERY.KEBAB_BREAD, Doenerbude.GROCERY.ONION]),
            new Order(Doenerbude.PRODUCT.YUFKA, [Doenerbude.GROCERY.YUFKA_BREAD, Doenerbude.GROCERY.PEPPER, Doenerbude.GROCERY.ONION, Doenerbude.GROCERY.TOMATO]),
            new Order(Doenerbude.PRODUCT.YUFKA, [Doenerbude.GROCERY.YUFKA_BREAD, Doenerbude.GROCERY.ONION]),
            new Order(Doenerbude.PRODUCT.LAHMACUN, [Doenerbude.GROCERY.LAHMACUN_BREAD, Doenerbude.GROCERY.PEPPER, Doenerbude.GROCERY.ONION]),
            new Order(Doenerbude.PRODUCT.LAHMACUN, [Doenerbude.GROCERY.LAHMACUN_BREAD, Doenerbude.GROCERY.TOMATO, Doenerbude.GROCERY.ONION]),
            new Order(Doenerbude.PRODUCT.LAHMACUN, [Doenerbude.GROCERY.LAHMACUN_BREAD, Doenerbude.GROCERY.PEPPER]),
            new Order(Doenerbude.PRODUCT.LAHMACUN, [Doenerbude.GROCERY.LAHMACUN_BREAD, Doenerbude.GROCERY.TOMATO])
        ];
        static getRandomOrder() {
            return Orders.availableOrders[Orders.getRandomInt(Orders.availableOrders.length)];
        }
        static getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
    }
    Doenerbude.Orders = Orders;
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=recipes.js.map