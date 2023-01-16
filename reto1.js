// Reto #1: ¡Automatizando envolver regalos de navidad!
function wrapping(gifts) {
  return gifts.map( regalo => {
    return `${'*'.repeat(regalo.length + 2)}\n*${regalo}*\n${'*'
    .repeat(regalo.length + 2)}`
  })
}
const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */