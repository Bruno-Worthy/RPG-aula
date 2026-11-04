


function floresta(heroi) {
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