let age=33;
// let age="33abc" //this will get converted to number but its value will be NaN

let stringAge=Number(age);
console.log(stringAge);
console.log(typeof stringAge);

let value= undefined
// let value= null
let newValue= Number(value);
console.log(typeof newValue)
console.log(newValue)

//Notes- "33" will get convert to 33
// "33abc" will give NaN
//true will give 1 ,"" will give false but "written" will give true

// ********OPERATIONS*********
// let str1="hello";
// let str2=" Ariz";
// console.log(str1+str2);

console.log(1+"2")//will  give you 12
console.log("1"+2)//will  give you 12
console.log("1"+2-13) //now will become 12-13
console.log("1"+2+2)
console.log(1+2+"2") //will give you 32 check with substraction also 
