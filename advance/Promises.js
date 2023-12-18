//fetch('https://something.com').them().catch().finally()

// How to make Promises
//const promiseOne = new Promise()
//In simple terms, a promise in JavaScript is like a 
//guarantee or assurance that something will happen in the future,
// either successfully or with an error.

// To create a Promise
// const promiseOne = new Promise(function(resolve, reject){
//     // Do an asyn task
//     // DB call, cryptography related, network call
//     // Here we do the set call
//     setTimeout(function(){
//         console.log("Async task is complete");
//     }, 1000)
// } )

// //Resolve has link with .then
// promiseOne.then(function(){
//     console.log("Promise consumed");
// })
// Here, it won't generate the output with Promise consumed.
// No link with this and resolve


const promiseOne = new Promise(function(resolve, reject){
        // Do an asyn task
        // DB call, cryptography related, network call
        // Here we do the set call
        setTimeout(function(){
            console.log("Async task is complete");
            resolve() // It will connect  with .then
        }, 1000)
    } )
    
    //Resolve has link with .then by default
    promiseOne.then(function(){
        console.log("Promise consumed");
    })
    

    new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Async Task 2");
            resolve();
        },1000)
    }).then( function(){
        console.log("Async 2 resolved");
    })


    const promiseThree = new Promise(function(resolve, reject){
        setTimeout(function() {
            resolve({username:"Chai", email:"chai@example.com"})
        }, 1000)
    })

    promiseThree.then(function(user){
        console.log(user);
    })

    const promiseFour = new Promise(function(resolve, reject){
        setTimeout(function(){
            let error=true
            if(!error){
                resolve({username:"Harh", password:"123"})
            }
            else{
                reject('ERROR: SOmething Went wrong')
            }
        },1000)
    })

    promiseFour.then((user) => {
            console.log(user);
            return user.username
    }).then((username) =>{
            console.log(username);
    }).catch(function(error){
        console.log(error);
    }).finally(() => console.log("Promise is either rejected or resolved"))


    // const promiseFive = new Promise(function(resolve,reject){
    //     setTimeout(function() {
    //         let error=true
    //         if(!error){
    //             resolve({username:"Javascript", password:"123"})
    //         }
    //         else{
    //             reject('ERROR: JS Went wrong')
    //         }
    //     },1000)
    // });

    // Gracefully, we cannot handle catch
    // async function consumePromiseFive(){
    //     // Wait ehat is the output
    //     const response = await promiseFive
    //     console.log(response);
    // }

    // consumePromiseFive()

    const promiseFive = new Promise(function(resolve, reject){
        setTimeout(function(){
            let error = true
            if (!error) {
                resolve({username: "javascript", password: "123"})
            } else {
                reject('ERROR: JS went wrong')
            }
        }, 1000)
    });
    
    async function consumePromiseFive(){
        try {
            const response = await promiseFive
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    
    consumePromiseFive()

    // async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available

