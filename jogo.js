
const prompt = require("prompt-sync")();
const heroi = require("./heroi");

const vila = require("./regioes/vila");
const floresta = require("./regioes/floresta");

// CONTROLE DO JOGO
let local = "vila";
let jogando = true;

// NOME DO HEROI
heroi.nome = prompt("Qual é o nome do seu herói? ");

console.log("");
console.log(heroi.nome + ", o farol da costa apagou. Alguém precisa chegar lá antes do anoitecer.");

while (jogando) {

    // EFEITO DO VENENO
    if (heroi.veneno > 0) {
        heroi.vida = heroi.vida - 1;
        heroi.veneno = heroi.veneno - 1;

        console.log("O veneno arde. Vida: " + heroi.vida);
    }

    // FIM DE JOGO
    if (heroi.vida <= 0) {
        console.log("Você caiu no caminho. Fim de jogo.");
        jogando = false;

    // VILA
    } else if (local === "vila") {
        local = vila(heroi);

    // FLORESTA
    } else if (local === "floresta") {
        local = floresta(heroi);

    // POCO
    } else if (local === "poco") {
        console.log("");
        console.log("[POÇO] Um poço antigo. Não dá para ver o fundo.");

        console.log("1 - voltar para a vila   2 - beber água (recupera 3 de vida)");

        if (heroi.inventario.includes("moeda furada")) {
            console.log("3 - jogar a moeda furada no poço");
        }

        let escolha = prompt("> ");

        if (escolha === "1") {
            local = "vila";

        } else if (escolha === "2") {
            heroi.vida = Math.min(
                heroi.vida + 3,
                heroi.vidaMaxima
            );

            console.log("A água é gelada. Vida: " + heroi.vida);

        } else if (
            escolha === "3" &&
            heroi.inventario.includes("moeda furada")
        ) {
            console.log("A moeda cai sem fazer barulho. Uma corda sobe do fundo do poço, sozinha.");

            const indice = heroi.inventario.indexOf("moeda furada");
            heroi.inventario.splice(indice, 1);

            heroi.inventario.push("corda");

            console.log("Inventário: " + heroi.inventario);
        }

    // PONTE
    } else if (local === "ponte") {
        console.log("");
        console.log("[PONTE] A ponte para o farol caiu. Do outro lado, o farol apagado.");

        if (heroi.inventario.includes("corda")) {
            console.log("1 - amarrar a corda e atravessar   2 - voltar para a floresta");
        } else {
            console.log("Não tem como atravessar.   2 - voltar para a floresta");
        }

        let escolha = prompt("> ");

        if (
            escolha === "1" &&
            heroi.inventario.includes("corda")
        ) {
            local = "farol";

        } else if (escolha === "2") {
            local = "floresta";
        }

    // FAROL
    } else if (local === "farol") {
        console.log("");
        console.log("[FAROL] Você sobe a escada e acende a luz. Lá embaixo, os barcos voltam para casa.");

        console.log("Fim: " + heroi.nome + " salvou a costa com " + heroi.vida + " de vida.");

        jogando = false;
    }
}
