class User{
    constructor(email, password){
        this.email = email
        this.password = password
        /// this.password is overwritten by get and set
    }


    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
     this._email = value
    }
    // to get the vlaue from the class
    get password(){
        //return this._password.toUpperCase()
        return `${this._password}harshit`
    }


    // to set the value
    // COnstuctor and set are both in race, bcoz of which
    // Rangeerror came Maximum call stack size exceeded

    set password(value){
     //   this.password = value;
     //   It acts likea password element

         this._password = value;
    }
}

const harshit = new User("har@harshit.ai","abc")
console.log(harshit.password);
console.log(harshit.email);