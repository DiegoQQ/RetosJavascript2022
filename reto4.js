// Reto #4: Una caja dentro de otra caja y otra...

function fitsInOneBox(boxes) {

    const newBoxes = boxes.sort(function (a, b) {

      if (a.l > b.l) {
        return 1;
      }
      if (a.l < b.l) {
        return -1;
      }
      return 0;
    });
    const bol = newBoxes.every( (a,b) => {
        let next = newBoxes[b+1] == undefined ? true : (a.l < newBoxes[b+1].l) && (a.w < newBoxes[b+1].w) && (a.h < newBoxes[b+1].h);
        return next;
    });
    return bol;
}

const boxes = [
    { l: 1, w: 2, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
  ]
  
console.log('fitsInOneBox(boxes): ', fitsInOneBox(boxes));

// var items = [
//     { name: 'Edward', value: 21 },
//     { name: 'Sharpe', value: 37 },
//     { name: 'And', value: 45 },
//     { name: 'The', value: -12 },
//     { name: 'Magnetic', value: 13 },
//     { name: 'Zeros', value: 37 }
//   ];
//   items.sort(function (a, b) {
//       console.log('b: ', b);
//       console.log('a: ', a);
//       console.log('----------------------------');
    
//     if (a.value > b.value) {
//       return 1;
//     }
//     if (a.value < b.value) {
//       return -1;
//     }
//     return 0;
//   });
//   console.log('items: ', items);