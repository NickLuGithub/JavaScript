let person = {
    neme: "Kenve",
    age: 35,
    height: 180,
    weight: 80
}

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

// 通常跨越網路的時候就要轉 String
// { neme: 'Kenve', age: 35, height: 180, weight: 80 }
// The OBJ is: [object Object]
// The OBJ is: { neme: 'Kenve', age: 35, height: 180, weight: 80 }
// {"neme":"Kenve","age":35,"height":180,"weight":80}
// string