let show = document.querySelector("#show")
let show2 = document.querySelector("#show2")

// Q1

// for (let index = 1; index <= 5; index++) {
//     console.log(index);
// }

// Q2

// for (let index = 1; index <= 10; index++) {
//         console.log(index);
//         document.write(index)
//     }

// Q3
// Table 

// let pro = prompt("Enter Table!")
// let Table = document.querySelector("#table")

// for (let i = 1; i <= 10; i++) {
//     console.log(pro.length);
    
//     Table.innerHTML = `
//     <h3>Multiplication of Table is ${pro} </h3>
//     <h5>Length is ${pro} </h5>
//     `
//     show.innerHTML +=  `
//     <p>${pro} * ${i} = ${i * pro}</p>
//     `
// }

// Q4
// Array 

// let arr = ["Orange" , "Banana" , "Peach" , "Guava"]
// show.innerHTML = `${arr}`


// Q5
// Arry render

// let fruits = ["Mango" , "Orange" , "Banana" , "Pineapple" , "Hello" , "Hellow1" , "Chips"]


// for (let i = 0; i < fruits.length; i++) {
//     show.innerHTML = fruits
//     show2.innerHTML += `
//     <h4>The Element of Index ${[i]} ${fruits[i]}</h4>
//     `
// }


// Q6
// Counting Using For loop


// simple Counting

// let count = []
// for (let i = 1; i <= 15; i++) {
//     show.innerHTML += `
//     ${count.push(i)}
//     `
// }
// show.innerHTML = `<h5>Simple Counting :  ${count.join(", ")}</h5>`

// // Reverse Counting


// let Reverse = []
// for (let i = 20; i >= 1; i--) {
//     show.innerHTML += `
//     ${Reverse.push(i)}
//     `
// }
// show.innerHTML = `<h5>Reverse Counting : ${Reverse.join(", ")}</h5>`



// // Even Counting

// let Even = []

// for (let i = 0; i <= 20; i +=2 ) {
//     Even.push(i)
// }
// show.innerHTML += `<h5>Even Number Counting : ${Even.join(", ")}</h5>` 


// // odd Counting

// let odd = []

// for (let i = 0; i <= 20; i +=3 ) {
//     odd.push(i)
// }
// show.innerHTML += `<h5>Even Number Counting : ${odd.join(", ")}</h5>` 


// let series = []

// for (let i = 2; i <= 21; i += 2) {
//     series.push(i)
// }
// console.log(series);

// show.innerHTML = `Series Counting : ${series.join("K, ")}`


// let check = prompt("Wellcome To My bakrey Which Item you want!")
// Bakrey Array



// else if (input.value == arr[1]){
//     show.innerHTML = (`the ${arr[1]} is available on ${i} Index`);
//     // break
// }else if (input.value == arr[2]){
//     show.innerHTML = (`the ${arr[2]} is available on ${i} Index`);
//     // break
// }else if (input.value == arr[3]){
//     show.innerHTML = (`the ${arr[3]} is available on ${i} Index`);
//     // break
// }
















let input = document.querySelector("input")
let arr = ["Orange" , "Pastry" , "Juice" , "Fruits" , "Cake"]

function enter() {
    for (let i = 0; i < arr.length; i++) {
        if (input.value.toLowerCase() === arr[i].toLowerCase()) {
            show.innerHTML = (`the ${arr[i]} is available on ${i} Index`);
            break
        }
        else{
            show.innerHTML = (`The ${input.value} is Not Available on Our Backery`);
        }
    }
    input.value = ""
}





























