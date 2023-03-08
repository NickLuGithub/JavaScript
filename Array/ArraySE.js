let Computer = ["CPU", "DARM", "SSD", "mouse"];

let products = [
    ["CPU", "DARM", "SSD", "mouse"],
]

console.log(Computer instanceof Array);

console.log(Array.isArray(Computer));

function AddThead(titleArray) {
    // todo...

    // 防呆
    if (!Array.isArray(titleArray)) {
        return;
    }
}

let Cars = ['BMW', 'Benz', 'Audi', 'Lexus'];

for (var i = 0; i < Cars.length; i++) {
    console.log(Cars[i]);
}

Cars.forEach(function(item, index) {
    console.log(`${index} : ${item}`);
})

Cars.forEach((item, index) => {
    console.log(`${index} : ${item}`);
})

Cars.forEach((car, idx) => {
    console.log(`${car} : ${idx}`);
})

let friends = [];
let person1 = {
    id: 1,
    name: "Kevin",
    email: "Kevin@gmail.com"
}

let person2 = {
    id: 2,
    name: "Nick",
    email: "Nick@gmail.com"
}

let person3 = {
    id: 3,
    name: "Jon",
    email: "Jon@gmail.com"
}

friends.push(person1);
// friends.pop();
friends.push(person2);
// friends.pop();
friends.push(person1, person2);
friends.unshift(person3);


friends.forEach((item, index) => {
    console.log(`${item} : ${index}`);
})