class User {};


class user {
greeting(){
    return "Hello";
}

};

const gndx= new user()


console.log(gndx.greting())


// constructor

class casa {
    constructor(){
        console.log("Nuevo Usuario")
    }

    greeting(){
        return "Hello";
    }
    
}

const David=new casa();


// this

class usuario {
    constructor(name){
        this.name=name;
    }
    //metodos
    speak(){
        return "Hello";}
    greetings(){
        return `${this.speak()} ${this.name}`    
    }
}

const ana= new usuario("Ana");
console.log(ana.greetings())



//setter and getters

class usuarios {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    speak(){
        return "Hello";
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age=n;
    }
}

const bebeloper1=new usuarios("David",20)
console.log(bebeloper1.uAge)
console.log(bebeloper1.uAge=112)
console.log(bebeloper1.speak())