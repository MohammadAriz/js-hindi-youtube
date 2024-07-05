const mySym=Symbol("key1")
const user={
    "full_name":"Mohammad Ariz",
    name:"Ariz",
    age:29,
    location:"jabalpur",
    email:"ariz@gmail.com",
    [mySym]:"myKey1"

}
console.log(user)
console.log(user.email);
user.email="changed@gmail.com";
console.log(user.email)
console.log(user.full_name)

// Object.freeze(user); //this will freeze that means if changes will be done but it will not reflect
user.email="againchanged@gmail.com";
console.log(user)

user.greeting=function(){
    console.log(`hellowww ${this.name}`) //this will give output from this user.greeting's user
}
console.log( user.greeting());
