// Falsy values- 0,-0,null,undefined,""(empty string),BigInt 0n,false,NaN

// Truthy values- rest all truthy but here are some examples
// "0"," "(non empty string i.e. space),"false",[],{},function(){} this is empty function which is also truthy and rest all the value which is not in falsy

const emptyArray=[];
if(emptyArray){
    console.log("this array is empty and the conditon is truthy")
}
if(emptyArray.length===0){
    console.log("this array is empty and the conditon is truthy")
}
const emptyObject={};
if(emptyObject){
    console.log("this object is empty and the conditon is truthy")
}
if((Object.keys(emptyObject)).length===0){
    console.log("this object is empty and the conditon is truthy");
};

// NULLISH CAOLESCING OPERATOR(??): NULL UNDEFINED
let val1;
val1= 5 ??10;
console.log(val1) // will always give first value but this nullish we use for null and undefined i.e. if from database null or undefined is coming then it may create problem so this bypass the null and undefined
let val2= null??10;
console.log(val2)
let val3= null??8??5??10;
console.log(val3) //will take the first value 

let val4= undefined??50;
console.log(val4)

//TERNERAY OPERATOR

condition ? 'true':'false'