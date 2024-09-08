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
let sindhimarks = document.querySelector("#marks8")
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
let showsindhi = document.querySelector("#sindhi")
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
    showName.innerHTML = "Name is : " + usersName.value
    showeng.innerHTML = "English Marks is : " + marks1.value
    showphy.innerHTML = "Physics Marks is : " + +marks2.value
    showche.innerHTML = "Chemistry Marks is: " + +marks3.value
    showcs.innerHTML = " CS Marks is : " + +marks4.value
    showurdu.innerHTML = "Urdu Marks is : " + +marks5.value
    showmaths.innerHTML = "Maths Marks is : " + +marks6.value
    showisl.innerHTML = "Islamiat Marks is : " + +marks7.value
    showsindhi.innerHTML = "Sindhi Marks is : " + +marks8.value

    let I1 = marks1.value || 0;
    let I2 = marks2.value || 0;
    let I3 = marks3.value || 0;
    let I4 = marks4.value || 0;
    let I5 = marks5.value || 0;
    let I6 = marks6.value || 0;
    let I7 = marks7.value || 0;
    let I8 = marks8.value || 0;
    
    

    if (I1 >= 100 || I2 >= 100 || I3 >= 100 || I4 >= 100 || I5 >= 100 || I6 >= 100 || I7 >= 100 || I8 >= 100) {
        alert("Enter Correct Number!")
        return;
    }
    else {
    let userValue = +marks1.value + +marks2.value + +marks3.value + +marks4.value + +marks5.value + +marks6.value + +marks7.value + +marks8.value
    let showValue  = obtained.innerHTML = userValue
    let percentage = (showValue / 800) * 100
    obtained.innerHTML = "Your Obtained Marks is  " + showValue
    perc.innerHTML = "Your Percentage is " + percentage + "%"

    usersName.value = ""
    marks1.value = ""
    marks2.value = ""
    marks3.value = ""
    marks4.value = ""
    marks5.value = ""
    marks6.value = ""
    marks7.value = ""
    marks8.value = ""
    }

    // let TotalValue = marks1.value + marks2.value + marks3.value + marks4.value + marks5.value + marks6.value + marks7.value + marks8.value
    // if (TotalValue >=90 && TotalValue <= 100) {
    //     showName.innerHTML = "Congratulation You Got A+ Grade";
    // }
    // else if (TotalValue >= 80 && TotalValue <= 89){
    //     showName.innerHTML = "Congratulation You Got A Grade";
    // }
    // else if (TotalValue >= 70 && TotalValue <= 79){
    //     showName.innerHTML = "Congratulation You Got B Grade"
    // }
    // else if (TotalValue >= 60 && TotalValue <= 69){
    //     showName.innerHTML = "Congratulation You Got C Grade"
    // }
    // else if (I1 + I2 + I3 + I4 + I5 + I6 + I7 + I8 >= 50 && I1 + I2 + I3 + I4 + I5 + I6 + I7 + I8 <= 59){
    //     showName.innerHTML = "You Got D Grade"
    // }
    // else if (obtained >= 40 && obtained <= 49){
    //     showName.innerHTML = "You Got D Grade"
    // }
    // else if (obtained >= 33 && obtained <= 39){
    //     showName.innerHTML =  "You Got D Grade"
    // }
    // else {
    //     showName.innerHTML = showName = "You Are FAILED Better Luck Next Time"
    // }
})

