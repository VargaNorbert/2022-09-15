import {hozzaad} from "./lista.js";
import {atlag} from "./lista.js";

function katt() {
    hozzaad(document.getElementById("text").value);

    alert(atlag());
}

document.getElementById('gomb').addEventListener('click', katt);