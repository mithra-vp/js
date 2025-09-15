// for (let i = 0; i <= 5; i++) {
//     let row = "";

//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }
//     console.log(row);
                
// }
let rows = 5;

for (let i = 1; i <= rows; i++) {
    let row = "";

    // Print leading spaces
    for (let j = 1; j <= rows - i; j++) {
        row += " ";
    }

    // Print stars (odd numbers: 1, 3, 5, ...)
    for (let k = 1; k <= 2 * i - 1; k++) {
        row += "*";
    }

    console.log(row);
}
