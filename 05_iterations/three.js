// for of loop 
const arr=[1,2,"ariz"]
for (const val of arr) {
    console.log(val)
}
for (const val in arr) {
    console.log(val) //this will give key
    console.log(arr[val]) //this will give value
}
const greetings= "Hello World"
for(const greet of greetings){
    if(greet===" "){
        continue;
    } //this code to remove the space
    console.log(greet)
}

//MAP - key value pair but in same order and repeated value will not count
const map= new Map()
map.set('IN','INDIA')
map.set('USA','UNITED STATES OF AMARICA')
map.set('FR','France')
map.set('IN','INDIA') // this will not count 
console.log(map)

for(const keyvalue of map ){
    console.log(keyvalue)
}
for(const [key,value] of map ){
    console.log([key,value])
}

// const myObj={
//     'gameone':'NFS',
//     'gametwo':'spiderman'
// }
// for (const obj of myObj ){
//     console.log(obj) //not iteratable here for for-of
// }