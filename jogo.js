// A trilha do farol · jogo de demonstração do Jovem Tech (E15)
// Tudo aqui usa o que vocês já viram: variáveis, prompt, if / else, while e vetor.
// Só uma coisa é nova: Math.random(), que sorteia um número entre 0 e 1.
const prompt = require("prompt-sync")();
const heroi = require("./heroi") 

// ===== CONTROLE DO JOGO =====
let local = "vila";        // onde o herói está agora
let jogando = true;        // o jogo continua enquanto for true
const TESTE = false;       // true = a sorte fica fixa, para o roteiro de teste

// ===== HERÓI =====
heroi.nome = prompt("Qual é o nome do seu herói? ");

console.log("");
console.log(heroi.nome + ", o farol da costa apagou. Alguém precisa chegar lá antes do anoitecer.");

while (jogando) {
  // a cada passo, o veneno tira 1 de vida
  if (heroi.veneno > 0) {
    heroi.vida = heroi.vida - 1;
    heroi.veneno = heroi.veneno - 1;
    console.log("O veneno arde. Vida: " + heroi.vida);
  }
  if (heroi.vida <= 0) {
    console.log("Você caiu no caminho. Fim de jogo.");
    jogando = false;
  } else if (local === "vila") {
    console.log("");
    console.log("[VILA] Um velho pescador te entrega uma moeda furada: 'Não vale nada. Guarde mesmo assim.'");
    if (heroi.inventario.includes("moeda furada") === false && heroi.inventario.includes("corda") === false) {
      heroi.inventario.push("moeda furada");
    }
    console.log("1 - ir para a floresta   2 - ir para o poço");
    let escolha = prompt("> ");
    if (escolha === "1") {
      local = "floresta";
    } else if (escolha === "2") {
      local = "poco";
    }
  } else if (local === "floresta") {
    console.log("");
    console.log("[FLORESTA] Galhos fechados. Algo se mexe no chão.");
    let sorte = Math.random();
    if (TESTE) {
      sorte = 0.2;
    }
    if (sorte < 0.4) {
      console.log("Uma aranha te morde! Você está envenenado por 3 passos.");
      veneno = 3;
    } else {
      console.log("Era só o vento.");
    }
    console.log("1 - seguir para a ponte   2 - voltar para a vila");
    let escolha = prompt("> ");
    if (escolha === "1") {
      local = "ponte";
    } else if (escolha === "2") {
      local = "vila";
    }
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
      heroi.vida = Math.min(heroi.vida + 3, heroi.vidaMaxima)
      console.log("A água é gelada. Vida: " + heroi.vida);
    } else if (escolha === "3" && heroi.inventario.includes("moeda furada")) {
      console.log("A moeda cai sem fazer barulho. Uma corda sobe do fundo do poço, sozinha.");
      heroi.inventario.shift()
      heroi.inventario.push("corda");
      console.log("Inventário: " + heroi.inventario);
    }
  } else if (local === "ponte") {
    console.log("");
    console.log("[PONTE] A ponte para o farol caiu. Do outro lado, o farol apagado.");
    if (heroi.inventario.includes("corda")) {
      console.log("1 - amarrar a corda e atravessar   2 - voltar para a floresta");
    } else {
      console.log("Não tem como atravessar.   2 - voltar para a floresta");
    }
    let escolha = prompt("> ");
    if (escolha === "1" && heroi.inventario.includes("corda")) {
      local = "farol";
    } else if (escolha === "2") {
      local = "floresta";
    }
  } else if (local === "farol") {
    console.log("");
    console.log("[FAROL] Você sobe a escada e acende a luz. Lá embaixo, os barcos voltam para casa.");
    console.log("Fim: " + heroi.nome + " salvou a costa com " + heroi.vida + " de vida.");
    jogando = false;
  }
}