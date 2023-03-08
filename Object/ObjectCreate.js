let person = {
    name: "Kenve",
    age: 35,
    height: 180,
    weight: 80
}

console.log(person.name);
console.log(person['name']);

let keys = Object.keys(person);
let values = Object.values(person);

console.log(keys, values)

keys.forEach((keys) => {
    console.log(`${keys} => ${person[keys]}`);
})

// %o 可以列印出物件
console.log(person);
console.log("The OBJ is: " + person);
console.log("The OBJ is: %o", person);

let jsonText = JSON.stringify(person);
console.log(jsonText);
console.log(typeof jsonText);

let p = JSON.parse([jsonText]);
console.log(p)
console.log(typeof p)

// 字串 VS 文字
// Runtime

// 通常跨越網路的時候就要轉 String
// { neme: 'Kenve', age: 35, height: 180, weight: 80 }
// The OBJ is: [object Object]
// The OBJ is: { neme: 'Kenve', age: 35, height: 180, weight: 80 }
// {"neme":"Kenve","age":35,"height":180,"weight":80}
// string

// 用陣列包物件比較好
// 因為陣列比較好用