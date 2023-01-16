// Reto #3: ¿Cuántas cajas de regalos puede llevar Papá Noel?
function distributeGifts(packOfGifts, reindeers) {
    let peso = packOfGifts.reduce( (acumulador, regalo) => acumulador + regalo);
    peso = peso.length;
    let renosP = reindeers.map( reno => reno.length * 2);
    renosP = renosP.reduce((a, b) => a + b);
    return Math.trunc(renosP / peso);
}

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

// distributeGifts(packOfGifts, reindeers) // 2
console.log('distributeGifts(packOfGifts, reindeers): ', distributeGifts(['videogames', 'console'], ['midu']));