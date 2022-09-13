const fnAsync=()=>{
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout(()=> resolve("Async!!"),20000)
        : reject(new Error("Error!"));
    });
}

const anotherFn=async()=>{
    const something=await fnAsync()
    console.log(something)
    console.log("Hellooo1112")
}


console.log("Before");
anotherFn();
console.log("After");





const helloWorld=()=>{
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout(()=> resolve("Hello World!!"),5000)
        : reject(new Error("Test Error!"));
    });
}

const HelloAsync=async()=>{
    const something=await helloWorld();
    console.log(something);
};

HelloAsync();

const anotherFunction= async ()=>{
    try{
        const hello= await helloWorld();
        console.log(hello);
    }catch (error){
        console.log(error);
    }
};