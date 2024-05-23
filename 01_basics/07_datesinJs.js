let myDate= new Date()
console.log(myDate)
console.log(typeof myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
let myCreatedDate= new Date("01-04-2024");
console.log(myCreatedDate.toLocaleDateString())

let myTimeStamp=  Date.now()
console.log(myTimeStamp) //gives time in mili second to convert in second divide by 1000
console.log(myCreatedDate.getTime())
