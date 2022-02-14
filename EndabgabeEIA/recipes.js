var Doenerbude;
(function (Doenerbude) {
    /// Diese Klasse definiert eine Bestellung
    class Order {
        product;
        groceries;
        constructor(_product, groceries) {
            this.product = _product;
            this.groceries = groceries;
        }
        toString() {
            let groceryStr = "";
            // Durch alle Lebensmittel der Order iterieren
            this.groceries.forEach(g => {
                // Leerzeichen zum String hinzufügen
                groceryStr += " ";
                // Lebensmittel zum String hinzufügen
                groceryStr += Doenerbude.GROCERY[g];
            });
            return "Ich will ein " + Doenerbude.PRODUCT[this.product] + " mit" + groceryStr;
        }
    }
    Doenerbude.Order = Order;
    class Orders {
        /// Verfügbaren bestellungen
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
        /// Gibt eine zufällige Bestellung zurück
        static getRandomOrder() {
            let randomNumber = Orders.getRandomNumber(Orders.availableOrders.length);
            return Orders.availableOrders[randomNumber];
        }
        /// Gibt zufällige Nummer zwischen 0 und max zurück
        static getRandomNumber(max) {
            return Math.floor(Math.random() * max);
        }
    }
    Doenerbude.Orders = Orders;
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=recipes.js.map