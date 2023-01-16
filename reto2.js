// Reto #2: Nadie quiere hacer horas extra
function countHours(year, holidays) {
    let horasExtra = 0;

    holidays.forEach( diaFestivo => {
        let diaSemanal = new Date(diaFestivo + '/' + year);
        diaSemanal.getDay() != 0 && diaSemanal.getDay() != 6 ? horasExtra = horasExtra + 2 : null;
    })

    return horasExtra;
}

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

// countHours(year, holidays) // 2 días -> 4 horas extra en el año
console.log('countHours(year, holidays): ', countHours(year, holidays));