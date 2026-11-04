
const TESTE = false;

function sorte(chance) {
    let sorte =Math.random();

    if (TESTE) {
        sorte = 0.2;
    }
    return sorte < chance
}

module.exports = sorte;
