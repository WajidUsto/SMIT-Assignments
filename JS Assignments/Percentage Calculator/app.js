// Inputs
// Inputs
let usersName = document.querySelector("#usersName")
let engMarks = document.querySelector("#marks1")
let phyMarks = document.querySelector("#marks2")
let cheMarks = document.querySelector("#marks3")
let csMarks = document.querySelector("#marks4")
let urduMarks = document.querySelector("#marks5")
let mathsMarks = document.querySelector("#mark6")
let islMarks = document.querySelector("#marks7")
// Inputs
// Inputs

// Show Values
// Show Values
let btn = document.querySelector("button")
let showName = document.querySelector("#showName")
let showeng = document.querySelector("#eng")
let showphy = document.querySelector("#phy")
let showche = document.querySelector("#che")
let showcs = document.querySelector("#cs")
let showurdu = document.querySelector("#urdu")
let showmaths = document.querySelector("#maths")
let showisl = document.querySelector("#isl")
// Show Values
// Show Values

// Calculations
// Calculations
let obtained = document.querySelector("#obtained")
let perc = document.querySelector("#percentage")
// Calculations
// Calculations

// Function
// Function
btn.addEventListener("click" , function result() {
    showName.innerHTML = "Your Name is : " + usersName.value
    showeng.innerHTML = "Your English Marks  :" + marks1.value
    showphy.innerHTML = "Your Physics Marks  :" + +marks2.value
    showche.innerHTML = "Your Chemistry Marks  :" + +marks3.value
    showcs.innerHTML = "Your CS Marks  :" + +marks4.value
    showurdu.innerHTML = "Your Urdu Marks  :" + +marks5.value
    showmaths.innerHTML = "Your Maths Marks  :" + +marks6.value
    showisl.innerHTML = "Your Islamiat Marks  :" + +marks7.value
    let userValue = +marks1.value + +marks2.value + +marks3.value + +marks4.value + +marks5.value + +marks6.value + +marks7.value
    let showValue = obtained.innerHTML = userValue
    let percentage = (showValue / 700) * 100
    perc.innerHTML = "Your Percentage is " + percentage + " %"
})















































































































// var a = document.querySelector("#total")
// function btn() {
//     return a.innerHTML = "hello wajid"
// }
// console.log(btn());







