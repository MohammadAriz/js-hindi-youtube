const coding=["js","ruby","java","python","c++"]
const values=coding.forEach((item)=>{
    return console.log(item);
})
console.log(values); //this will return undefined 

//FILTER - Immutable: These methods do not modify the original array. Instead, they return a new array or value.
const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((num)=> num>=2  )
const newNums=myNums.filter((num)=> { return num>=2}  )
console.log(newNums)

//Using foreach

const newArr=[]
myNums.forEach((num)=>{
    if(num>5){
        newArr.push(num)
    }
})
console.log(newArr);


const books= [
    {
title:"one", genre:"fiction",publish:1981
},
    {
title:"two", genre:"non fiction",publish:1982
},
    {
title:"three", genre:"history",publish:1999
},
    {
title:"Four", genre:"Science",publish:2000
},
    {
title:"Five", genre:"history",publish:2022
},
]
const newBooks=books.filter((val)=>{
    return val.genre==="history" && val.publish===2022
})
console.log(newBooks)