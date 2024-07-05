const myArr=[1,2,3,4]
myArr.push(5)
console.log(myArr)
myArr.pop()
console.log(myArr)
myArr.unshift(0)  //here only 2 3 values are there but if thousand values will be ther then this shift will slow down the performance.
console.log(myArr)
myArr.shift()
console.log(myArr)

myArr.push(5,6,7)
console.log(myArr)

const newArr=myArr.join()
console.log(myArr)
console.log(newArr) // join converts this to string 
console.log(myArr)

const mySlice=myArr.slice(2)
console.log(mySlice) //will not work as heap and will not change original
console.log(myArr)

const mySplice=myArr.splice(2,4,10,11,13)//2->position,4->number of elemnts to remove from that position,10,11,13 this need to add in removed position
console.log(mySplice) //this will change the original array
console.log(myArr)
