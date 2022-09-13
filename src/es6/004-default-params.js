function newUser(name,age,country){
    var name=name || "Oscar";
    var age=age || 34;
    var country = country || "Max";
    console.log(name,age,country);
}

newUser();
newUser("David",13)



function newSUser(name="Oscar",age=100,country="CL"){

    console.log(name,age,country);
}

newSUser();
newSUser("David",13)


