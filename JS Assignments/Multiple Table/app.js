
let input1 = document.querySelector("#num1")
let input2 = document.querySelector("#num2")
const div = document.querySelector("#main")


function table() {
    div.innerHTML = ""
    for (let i = 1; i <= input2.value; i++) {
        div.innerHTML +=`
        <p>${input1.value} * ${i} = ${input1.value * i}</p>
        `
    }
}
function del() {
    div.innerHTML = ""
    input1.value = ""
    input2.value = ""
}