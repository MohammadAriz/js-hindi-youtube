var a=10
let b=20 
const c= 30
console.log(a)
console.log(b)
console.log(c)

{
var a=100
let b=200
const c=300
}
console.log(a)// not blocked scope 
console.log(b) //this wont give you 200
console.log(c)// this wont give you 300


function one(){
    const username="Ariz"
    function two(){
        const website="youtube"
        console.log(username)
    }
    two()
    // console.log(website)
}
one()

if(true){
    const username="Ariz"
    if(username==="Ariz"){
        const website="youtube"
        console.log(website + username)
    }
    // console.log(website) will throw an error
}
// console.log(username) also will throw an error



addone(3) //here we can define before also
function addone(num){
console.log(num)
}

const addtwo= function(num){
console.log(num)
}
addtwo(5) //here  we can define but see next code


addthree(5) //here cant define earlier
const addthree= function(num){
    console.log(num)
    }
   