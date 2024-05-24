//this function current context ko define karta hai.
const user={
    username:"Ariz",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

console.log(this) // here this will give empty but in console it will give global Window object

function chai (){
    let username="Ariz"
    console.log(this.username)// will give you undefined because object ke andar ye work kar rha lekin function me nahi
}
chai()

const chai2 =function (){
    let username="Ariz"
    console.log(this.username)// will give you undefined because object ke andar ye work kar rha lekin function me nahi
}
chai2()


//Arrow Function
const chai3 =()=>{
    let username="Ariz"
    console.log(this.username)// will give you undefined because object ke andar ye work kar rha lekin function me nahi
}
chai3()

const addTwo=(num1,num2)=>{
return num1+num2
}
console.log(addTwo(3,4))

//IMPLICIT RETURN ... mtlb yaha return likhne ki zaroorat nahi hai or parenthesis me likh lenge to return nai likhna padega
const addThree=(num1,num2,num3)=>(num1+num2+num3)
console.log(addThree(2,3,4))

const object=()=>({username:"ariz"})//yaha object ko bhi parenthesis me defie karna hota hai nahi to undefined dega
console.log(object())