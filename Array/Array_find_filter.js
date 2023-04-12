let Cars = ['BMW', 'Benz', 'Audi', 'Lexus'];
let Prices = [200, 250, 320, 180];

console.log('-'.repeat(80))

console.log(Prices.findIndex(p => p > 300))
console.log(Prices.filter(p => p > 250))

Prices.filter(function(item, index) {
    if (item > 250) {
        console.log(`${Cars[index]} is ${item}`)
    }
})

// let Computer = ['CPU', 'DRAM', 'RAM', 'SSD', 'Mouse']
// let Cars = ['BMW', 'Benz', 'Audi', 'Lexus']
// let Fruits = ['Apple', 'Banana', 'Cherry']

// Fruits.push('Orange')