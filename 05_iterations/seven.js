//MAP- immutable i.e. wont change the original array

const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.map((num)=>{
// return num*2
// })
// console.log(newNums)

const newNums=myNums.map((num)=>num*2).map((num)=>num*2).filter((num)=>num>8)
console.log(newNums);