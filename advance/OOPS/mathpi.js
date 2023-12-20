// Object.getOwnPropertyDescriptor(Math)
console.log(Math.PI)

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);

const mynewObejct = Object.create(null)
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("Chai nai bani");
    }
}

console.log(chai);

console.log( Object.getOwnPropertyDescriptor(chai, "name"));
Object.defineProperty(chai, 'name',{
    //writable: false,
    enumerable: false
})
console.log( Object.getOwnPropertyDescriptor(chai, "name"));


// Object are not iterable by default
// for (let [key, value] of chai) {
//     console.log(`${key}, ${value}`);
// }

for (let [key, value] of Object.entries(chai)) {
            if(typeof value !== 'function'){
                console.log(`${key}: ${value}`);
            }
     }