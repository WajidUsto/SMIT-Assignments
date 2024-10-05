


let card = [
    {
        product : "Camera",
        Price : 20000,
        InStock : true
    },
    {
        product : "Phone",
        Price : 20000,
        InStock : true
    },
    {
        product : "Samsung",
        Price : 20000,
        InStock : true
    },
    {
        product : "I phone",
        Price : 20000,
        InStock : true
    },
    {
        product : "Laptop",
        Price : 20000,
        InStock : true
    },
    {
        product : "Lences",
        Price : 20000,
        InStock : true
    },
    {
        product : "Mouse",
        Price : 20000,
        InStock : true
    },
    {
        product : "keyboard",
        Price : 20000,
        InStock : true
    },
    {
        product : "Graphics Card",
        Price : 20000,
        InStock : true
    },
    {
        product : "RTX 4090",
        Price : 2000000,
        InStock : true
    }
]


let show = document.querySelector(".show");

for (let i = 0; i < card.length; i++) {
    show.innerHTML += `
    <div class = "card">
    <h3>Product : ${card[i].product}</h3>
    <h3>Price : ${card[i].Price}</h3>
    <h3>InStock : ${card[i].InStock}</h3>
    <button onclick = "getresult(${i})">
    <span class="span-mother">
        <span>B</span>
        <span>u</span>
        <span>t</span>
        <span>t</span>
        <span>o</span>
        <span>n</span>
    </span>
    <span class="span-mother2">
        <span>B</span>
        <span>u</span>
        <span>t</span>
        <span>t</span>
        <span>o</span>
        <span>n</span>
    </span>
    </button>
    </div>
    ` 
}





function getresult(i) {
    console.log(card[i]);
    
}














