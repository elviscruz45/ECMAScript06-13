const  botton=document.getElementById("btn");

botton.addEventListener("click",async function(){
    const module= await import("./module.js");
    console.log(module);
    module.hello()
})

