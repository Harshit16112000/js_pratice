const user = {
    _email:'frfefmesw',
    _password:'acvdsv',
    // to get it from memory
    get email(){
        return this._email.toUpperCase()
    },
    // 
    set email(value){
        this._email = value
    }
}

// Factory Function
const tea = Object.create(user)
console.log(tea._email);

