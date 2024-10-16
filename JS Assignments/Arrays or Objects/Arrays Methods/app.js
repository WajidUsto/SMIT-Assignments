


// let card = [
//     {
//         product : "Camera",
//         Price : 20000,
//         InStock : true
//     },
//     {
//         product : "Phone",
//         Price : 20000,
//         InStock : true
//     },
//     {
//         product : "Samsung",
//         Price : 20000,
//         InStock : true
//     },
//     {
//         product : "I phone",
//         Price : 20000,
//         InStock : true
//     },
//     {
//         product : "Laptop",
//         Price : 20000,
//         InStock : true
//     },
//     {
//         product : "Lences",
//         Price : 20000,
//         InStock : true
//     },
//     {
//         product : "Mouse",
//         Price : 20000,
//         InStock : true
//     },
//     {
//         product : "keyboard",
//         Price : 20000,
//         InStock : true
//     },
//     {
//         product : "Graphics Card",
//         Price : 20000,
//         InStock : true
//     },
//     {
//         product : "RTX 4090",
//         Price : 2000000,
//         InStock : true
//     }
// ]


// let show = document.querySelector(".show");

// for (let i = 0; i < card.length; i++) {
//     show.innerHTML += `
//     <div class = "card">
//     <h3>Product : ${card[i].product}</h3>
//     <h3>Price : ${card[i].Price}</h3>
//     <h3>InStock : ${card[i].InStock}</h3>
//     <button onclick = "addcart(${i})">
//     <span class="span-mother">
//         <span>ADD</span>
//         <span>To</span>
//         <span>Cart</span>
//     </span>
//     <span class="span-mother2">
//         <span>ADD</span>
//         <span>To</span>
//         <span>Cart</span>
//     </span>
//     </button>
//     <button onclick = "deletecart()" style = "margin-top = "20px"">
//     <span class="span-mother">
//         <span>Delete</span>
//         <span>Cart</span>
//     </span>
//     <span class="span-mother2">
//         <span>Delete</span>
//         <span>Cart</span>
//     </span>
//     </button>
//     </div>
//     ` 
// }


// let cart = document.querySelector("#cart")
// let num = 0;

// function addcart(i) {
//     console.log(card[i]);
//     cart.innerHTML = `
//     Cart :
//     <span>${num++}</span>
//     `
// }

// function deletecart() {
//     cart.innerHTML = `
//     Cart :
//     <span>${num--}</span>
//     `
// }


// // function Edittodo(i) {
// //     card
// // }



// map Methods

const people = [
    {
        name: "John",
        age: 25,
        occupation: "Engineer"
    },
    {
        name: "Jane",
        age: 28,
        occupation: "Designer"
    },
    {
        name: "Mike",
        age: 32,
        occupation: "Developer"
    }
];

people.map(function (elem , i) {
    console.log(elem.name, elem.age, elem.occupation);
    console.log(elem.age [i]);
    // console.log(elem.occupation);
})






