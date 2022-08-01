//Starting array
let array = [1, 4, 11, 2, 37, 6,0,];

// Write your solution below:
answer = true;
for (i = 0; i < array.length && answer; i++){
    for (x = i+1; x < array.length && answer; x ++){
        if (array[i]=== -array[x]){
            console.log("true")
            answer = false;
        } 
    }
    if(i === array.length-1){
        console.log("False")
    }
}

        
//     }
// }
// // console.log(total)
// let array = [1, 4, 11, 2, 37, -4];
// let answers = [];

// for (let i = 0; i < array.length; i++){
//     for(let j = 0; j < i; j++){
//         if (array[i] + array[j] === 0){
//             answers.push("true")
//         } else if (array[i] + array[j] !== 0) {
//         answers.push("false")
//     }
//     }

//     }
// if (answers.includes("true")){
//         console.log("true")
//     } else {
//         console.log("false")
// }

// let value = false

// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array.length; j++) {
//     if (i !== j) {
//       if (array[i] + array[j] === 0) {
//         value = true
//       } 
//     }
//   }
// }