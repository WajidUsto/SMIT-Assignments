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
// show.innerHTML = ("Counting : " + count.join(", "));

// Reverse Counting


// let count = []
// for (let i = 20; i >= 1; i--) {
//     show.innerHTML += `
//     ${count.push(i)}
//     `
// }
// show.innerHTML = "Reverse Counting  " + count.join(", ")