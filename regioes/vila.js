
const prompt = require("prompt-sync")();

function vila(heroi) {
    console.log("");
    console.log("[VILA] Um velho pescador te entrega uma moeda furada: 'Não vale nada. Guarde mesmo assim.'");

    if (
        heroi.inventario.includes("moeda furada") === false &&
        heroi.inventario.includes("corda") === false
    ) {
        heroi.inventario.push("moeda furada");
    }

    console.log("1 - ir para a floresta   2 - ir para o poço");

    let escolha = prompt("> ");

    if (escolha === "1") {
        return "floresta";
    } else if (escolha === "2") {
        return "poco";
    }

    return "vila";
}

module.exports = vila;
