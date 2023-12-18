//const coding = ["js","ruby","java","python"]

// for each doesnt return value
//const value = coding.forEach( (item) => {
//    console.log(item);
//})

const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.filter(  (num) => num > 4)
//console.log(newNums);

// If  start the scope, then needed return keyword
const newNums = myNums.filter(  (num) => { return num > 4})
console.log(newNums);

const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const abc = myNumbers.map( (item) => item + 10
)

console.log(abc);

// Chaining
const newnew = myNumbers
                .map( (num) => num*10)
                .map( (num) => num + 1)

console.log(newnew);




const myreduce = [1,2,3]

const mytotal = myreduce.reduce(
    function(acc, currval) {
        return acc + currval
    },0)


const mytotal2 = myreduce.reduce( (acc,curr) => acc+curr, 0)

console.log(mytotal2);