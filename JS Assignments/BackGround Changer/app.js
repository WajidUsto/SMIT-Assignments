
let div = document.querySelector(".main")
let Arr = ["Orange" , "Blue" , "Green" , "Red" , "Yellow" , "Black" , "Pink"]
let body = document.querySelector("body")

for (let i = 0; i < Arr.length; i++) {
    div.innerHTML += `
    <button onclick = "color(${i})">${Arr[i]}</button>
    `
}

function color(i) {
    console.log(`You Clicked ${Arr[i]}`)
    body.style.backgroundColor = Arr[i]
}



