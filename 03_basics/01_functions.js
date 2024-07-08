function sayMyName(){
console.log("A")
console.log("r")
console.log("i")
console.log("z")
}
sayMyName()

function addTwoNumbers(num1,num2){
    
    console.log(num1+num2);
}
addTwoNumbers(5,"a")
const result=addTwoNumbers(9,5)

console.log(result) //will give you undefined because function did not return anything

function addNumbers(num1,num2){
    console.log("here will work because before return it works")
    return num1+num2
    console.log("here will not work because before return it wont works")
}
const resultReturn=addNumbers(10,5)
console.log(resultReturn)


function userLoginMessage(message){
    if(message){
        return `${message} is just logged in`
    }
    else{
        return "please enter input"
    }
   
}
console.log(userLoginMessage("Ariz"))
console.log(userLoginMessage("")) //if empty string passed 
console.log(userLoginMessage()) //nothing is passed 

function addCartItems(num){
return num;
}
console.log(addCartItems(2))
console.log(addCartItems(2,3,4))// this will return the first value only thats why we will use spread operator

function addCartItemsAgain(...num){
    return num;
    }
console.log(addCartItemsAgain(2,3,4)) 

const user={
    userName:"Ariz",
    price:199
}
function object(anything){
return `user name is ${anything.userName} and price is ${anything.price}`
}
console.log(object(user))
console.log(object({
    userName:"sam"
}))

const myNewArray=[200,400,600,800]
function returnSecondValue(anything){
console.log(anything[1])
}
returnSecondValue(myNewArray)