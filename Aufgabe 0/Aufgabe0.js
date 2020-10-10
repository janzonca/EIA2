
"use strict";
var person = prompt("Bitte gebe deinen Namen ein");
if (person != null) {
    document.getElementById("name").innerHTML =
        "Hey " + person;
    }