// for of loop

const arr = [1,2,3,4,5]

//for (const i of arr) {
//    console.log(i)
//}

const greetings = "Hello world!"
for (const greet of greetings) {
//    console.log(`Each char is ${greet}`);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr',"France")

//console.log(map);

//this won't work for object
for (const [key,value] of map) {
    console.log(key, ':-', value);
}


const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// Map doesn't work here,as it is not iterable
for (const key in myObject) {
  console.log(myObject[key]);
}


const coding = ["js","ruby","java","python","cpp"]

// for each
//func callback doesnot have a na,e
coding.forEach(   function (item) {
            console.log(item);
})

coding.forEach(  (item) => {
    console.log(item);
})

function printMe(item){
    console.log(item);
}

// Here function are passed
coding.forEach(printMe)


coding.forEach(  (item,inde,arr) => {
    console.log(item, inde, arr);
})


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item);
}
)