
const prompt = require("prompt-sync")();
const sorte = require("../Sistemas/sorte");

function floresta(heroi) {
    console.log("");
    console.log("[FLORESTA] Galhos fechados. Algo se mexe no chão.");



    if (sorte < 0.4) {
        heroi.veneno = (heroi.veneno ) + 3;
        console.log("Uma aranha te morde! Você está envenenado por 3 passos.");
    } else {
        console.log("Era só o vento.");
    }

    console.log("1 - seguir para a ponte   2 - voltar para a vila");

    let escolha = prompt("> ");

    if (escolha === "1") {
        return "ponte";
    } else if (escolha === "2") {
        return "vila";
    }

    return "floresta";
}

module.exports = floresta;
