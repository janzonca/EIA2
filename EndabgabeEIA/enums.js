var Doenerbude;
(function (Doenerbude) {
    let MOOD;
    (function (MOOD) {
        MOOD[MOOD["HAPPY"] = 0] = "HAPPY";
        MOOD[MOOD["ANGRY"] = 1] = "ANGRY";
    })(MOOD = Doenerbude.MOOD || (Doenerbude.MOOD = {}));
    let GROCERY;
    (function (GROCERY) {
        GROCERY[GROCERY["ONION"] = 0] = "ONION";
        GROCERY[GROCERY["TOMATO"] = 1] = "TOMATO";
        GROCERY[GROCERY["PEPPER"] = 2] = "PEPPER";
        GROCERY[GROCERY["YUFKA_BREAD"] = 3] = "YUFKA_BREAD";
        GROCERY[GROCERY["LAHMACUN_BREAD"] = 4] = "LAHMACUN_BREAD";
        GROCERY[GROCERY["KEBAB_BREAD"] = 5] = "KEBAB_BREAD";
    })(GROCERY = Doenerbude.GROCERY || (Doenerbude.GROCERY = {}));
    let PRODUCT;
    (function (PRODUCT) {
        PRODUCT[PRODUCT["YUFKA"] = 0] = "YUFKA";
        PRODUCT[PRODUCT["KEBAB"] = 1] = "KEBAB";
        PRODUCT[PRODUCT["LAHMACUN"] = 2] = "LAHMACUN";
    })(PRODUCT = Doenerbude.PRODUCT || (Doenerbude.PRODUCT = {}));
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=enums.js.map