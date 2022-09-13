const helloPromise=()=>{
    return new Promise((resolve,reject)=>{
        if (true){
            resolve("Hey!");
        }else{
            reject("Upss!!");
        }
    })
}

helloPromise()
    .then(response=>console.log(response))
    .then(()=> console.log("Hola"))
    .catch(error=> console.log(error));