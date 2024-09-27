

// let obj = {
//     userName: "Wajid Usto",
//     email: "wajidusto@gmail.com",
//     password: "123456789",
//     isLoginIn: true,
//     Arr: ["Ornage" , "Apple" , "Banana"]
// }
// obj.Arr.unshift("Updated!")
// console.log(obj.password);
// console.log(obj.Arr);




const user = {
        userName: 'Wajid Usto',
        email: "wajidusto@gmail.com",
        password: "123456789",
        isLoginIn: true,
        Arr: ["Ornage" , "Apple" , "Banana"],
        greetUser: function () {
            console.log(`Hello ${this.userName}`);
        }
}
console.log(user.userName);

