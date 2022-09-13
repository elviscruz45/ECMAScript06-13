const anotherfunction=()=>{
    return new Promise((resolve,reject)=>{
        if (true){
            resolve("hew!");
        }
        else{
            reject("whooops!");
        }
    })
}


anotherfunction()
    .then(response => console.log(response))
    .catch(err=> console.log(err))
    .finally(()=> console.log("Finally"));




