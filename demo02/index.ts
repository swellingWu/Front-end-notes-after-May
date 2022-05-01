// const apples: number = 5

// //=> apples = "yes"
// //- apples is number

// let point: {x: number, y: number} = {
//     x: 10,
//     y: 20
// }

// const logNumber: (i: number) => void =(i: number) => {
//     console.log(i)
// }

// const json = '{"x": 10,"y": 20}'
// const corrdinates: {x: number,y: number} = JSON.parse(json)
// console.log(corrdinates.x)


let words = ['red','green','blue'];
let foundWorld: boolean

for(let i=0; i < words.length; i++) {
    if(words[i] === 'green') {
        foundWorld = true;
    }
}
