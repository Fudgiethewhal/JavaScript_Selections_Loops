//exercise 1
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

//exercise 2
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

//exercise 3
// for (let i = 1; i < 100; i++) {
//     if (i %15 == 0) {
//         console.log(i, "FIZZBUZZ");
//     } else {
//         if (i % 3 == 0) {
//             console.log(i, "FIZZ");
//         }
//         if (i % 5 == 0) {
//             console.log(i, "BUZZ");
//         }
//     }
// }
//exercise 3
let x = 1;
do {
    let output = "";
    if (x % 3 == 0) {
        output += "FIZZ";
    }
    if (x % 5 == 0) {
        output += "BUZZ";
    }
    
    console.log(`${x} ${output}`);
    x++;
} while (x <= 100 );

// exercise 4 
let numberToFind = Math.round((Math.random() * 500)); 
let n = Math.round(Math.random() * (500 - 100) + 100);

let foundValue;
for (let i = 1; i <= n && !foundValue; i++) {
    foundValue = (i == numberToFind);
    }

if (foundValue) {
    console.log(`Found ${numberToFind}!`);
} else {
    console.log(`Did not find ${numberToFind} within 1-${n}..`);
}

//exercise 5

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); 
let start = Math.round(Math.random() * (10 - 1) + 1); 
let end = Math.round(Math.random() * (1000 - 100) + 100); 

for (let i = start; i <= end; i++) {
    let output = "";
    
    if (i % fizzDivisor == 0) {
        output += "FIZZ";
    }
    
    if (i % buzzDivisor == 0) {
        output += "BUZZ";
    }
    
    console.log(`${i} ${output}`); 
}
console.log(fizzDivisor, buzzDivisor);
