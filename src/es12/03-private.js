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
    get #uAge(){
        return this.age;
    }
    set #uAge(n){
        this.age=n;
    }
}

const bebeloper1=new usuarios("David",20)
console.log(bebeloper1.uAge)
console.log(bebeloper1.uAge=112)
console.log(bebeloper1.speak())

