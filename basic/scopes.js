
// var as a scope issue
var c = 300
if(true){
    let a = 10
    const b = 20
    var c = 30

}

//console.log(a);
//console.log(b);
console.log(c);
// Scope is different in node engine and browser engine

//Closure -> DOM (DOcument object Module)

function one(){
    const username = "harshit"
     function two(){
        const website = "youtube"
        console.log(username);
     }
     //console.log(website);

     two()
}

// one()

numone(5)   // execution will be done
function addone(num1)
{
    return num + 1
}


addtwo(5) // execution will not be happening
// also knows as expression
const addtwo = function(num){   
    return num+2
}



