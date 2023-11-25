const myArray = [0,1,2,3,4,5]
// IN JS, array are resizeable

//Shallow copy -> Share the reference 
// Deep copy -> Share the copy of it

//const myarray = new Array(1,2,3,5)
myArray.push(6)
myArray.unshift(9)
console.log(myArray);

const newArr = myArray.join()
//slice -> don't include the last index .slice(1,3)
// splice -> include the last index also, also remove it from the array 

const marvel = ["Spiderman","Thor"]
const dc = ["Flash", "Batman"]

marvel.push(dc);
console.log(marvel);

marvel.concat(dc);
console.log(marvel);

const hero = marvel.concat(dc)
console.log(hero);

const all_new_hero = [...marvel, ...dc]
console.log(all_new_hero)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Harshit"));
console.log(Array.from("Harshit"));
console.log(Array.from({name:"Harshit"}))  //It gives output as []
let score1 = 100;
let score2 = 100
let score3 = 100;

console.log(Array.of(score1,score2,score3))