
let input = document.getElementById("input")
let btn = document.querySelector("button")
let p = document.querySelector("p")

btn.addEventListener("click" ,function table() {
    for(let index = 1; index <= 10; index++){
        // console.log(input.value + " x " + index + " = " + index * input.value);
        // console.log(`${2} x ${i} = ${i * 2}`);
        p.innerHTML += `${input.value} x ${index} = ${index * input.value}<br/>`
        input.value = ""
    }
})
































// function table() {
//     // p.innerHTML = "";
//     // p.innerHTML = "<h1>Your Printed Table Here!</h1>"
//     for (var table = 1; table <= 10; table++) {
//         // console.log("2" + " x " + table + " = " + table * 2)   ///console testing
//         p.innerHTML += `${input.value} x  ${table} =  ${table * input.value} <br />`
//     }
//     // if (input.value >= 1) {
//     // } else {
//     //     tableError.innerHTML = "Warning: Please enter a number to generate its multiplication table. Without a valid input, the table cannot be displayed."
//     // }
// }

