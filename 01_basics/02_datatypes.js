// number,bigInt, string,boolean,symbol,null,undefined - primitive data types
//Array,objects and functions - non primitive datatypes.
// console.log(typeof Null) will give you object. 
// console.log(typeof Undefined) will give you Undefined. 

// the catogrization of primitive and non primitive done on the basis of how they stored in the memory

// const sym1= symbol('123')
// const sym2= symbol('123')
// console.log(sym1===sym2)//will return false 

// *********stack( in primitive type ) and heap memory(non primitive)**********
 let name="Ariz"
 let newName=name;
 newName="changedname"
 console.log(name)//here output will be ariz irrespective newname changed
 console.log(newName) //in this output will be changedName

 let user1={
    'email':"ariz@gmail.com",
    age:29
 }
 let user2=user1;
 console.log(user2)
 console.log(user1)
 user1.email="changed@gmail.com"
 console.log(user2) //here email changed
 console.log(user1)// here also email changed 