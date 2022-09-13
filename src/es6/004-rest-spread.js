//arrays destructuring


let fruits=["apple", "banana"]

let [a,b] = fruits;
console.log(a, fruits[1])


let user={username:"oscar",age:34}
let {username,age}=user;

console.log(username,age)



// spread opeator

let person={username:"oscar",age:340}
let country="MX";

let data={cama:"casa",...person,country}

console.log(data);


// rest

function sum(num, ...values){
    console.log(values);
    console.log(num+values[0]);
    return num + values[0];
}

sum(1,11,2,3);



