let myDate = new Date()
//console.log(myDate);
//console.log(myDate.toString());

console.log(Date.now());
let myCreatedDate = new Date("11-25-2023")
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
newDate.toLocaleString('default',{
    weekday : "long"
})
