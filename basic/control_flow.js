(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

(function abc(){
    console.log("DB connected");
})();

var ans = (() => 2+3)();
console.log(ans);

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('har')


// Javascript Execution Context
// In two phase
/*

{}  -> GLobal Execution  -> called with this
Javascript -> SIngle Threaded



// FUnctional Execution Context


{} -> In two phase
1. Memory Creation Phase  //Memry is allocated, but not ececuted
2. Execution Phase   // 
 

1. Global Execution
2. Memory Phase ->
   val1  -> undefined
   val2 -> undefined
   addNumber -> defination
   result1 -> undefiend
   result2  -> undefined


3. Execution Phase
    val1 - 10
    val2 = 5
    addNum  ->      Create one execution phase
                    new variablee environement + Execution thread



    |                      |
    |   function()                   |
    |_Global Execution _ __|                

empty array is considered as true, 
empty string is considered as false

// falsy value
false, 0, -0, BigInt 0n, "", null undefined, NaN

True 
"0",'false'," ",[]., {}, function(){}
*/

const emptyObj = {}
if(Object.keys(emptyObj).length === 0)
{
    console.log("Object is empty");
} 


// Nullish Coalescing Operator (??): null undefined
let val1;
//val1 = 5 ?? 10
val1 = 10 ?? null
console.log(val1);