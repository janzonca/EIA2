
namespace Doenerbude {
    //Stimmung
    export enum MOOD {
        HAPPY,
        ANGRY
    }
    //Lebensmittel
    export enum GROCERY {
        ONION,
        TOMATO,
        PEPPER,
        YUFKA_BREAD,
        LAHMACUN_BREAD,
        KEBAB_BREAD
    }
// Alle "Brotartigen" Produkte
    export enum PRODUCT {
        YUFKA,
        KEBAB,
        LAHMACUN
    }
// Bestellstatus
    export enum CUSTOMER_STATE {
        WAIT,
        ORDERED,
        FINISHED
    }
}