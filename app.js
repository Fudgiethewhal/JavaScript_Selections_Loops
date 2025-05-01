for (let i = 1; i < 99; i+= 2) {
   console.log(i);
}


// Exercise 1 Section along with other examples
// for (let i = 0; i < 100; i++) {
//     if (i % 2 == 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }




//for (let i = 1; i < 100; i++) {
//if (i % 2 !== 0) {
//    console.log(i)
// }
//}

// let i = 1;
//
// while (i < 100) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
//     i++;
// }
// do {
//     if (x % 2 !== 0) {
//         console.log(x);
//     }
//     x++;
// } while (x < 100);
// Exercise 2 Section


for (let i = 1; i < 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ");
    } else {
        if (i % 3 == 0) {
            console.log("FIZZ");
        }
        if (i % 5 == 0) {
            console.log("BUZZ");
        }
    }
}    

// //for (let i = 1; i < 100; i++) {
// if (i % 3 == 0 && i % 5 == 0) {
//     console.log(i, "FIZZBUZZ");
// } else {
//     if (i % 3 == 0) {
//         console.log(i, "FIZZ");
//     } else if (i % 5 == 0) {
//         console.log(i, "BUZZ");
//     } else {
//         console.log(i); 
//     }
// }

for (let i = 1; i < 100; i++) {
    if (i %15 == 0) {
        console.log(i, "FIZZBUZZ");
    } else {
        if (i % 3 == 0) {
            console.log(i, "FIZZ");
        }
        if (i % 5 == 0) {
            console.log(i, "BUZZ");
        }
    }
}

