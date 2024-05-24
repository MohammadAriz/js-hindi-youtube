//for in loop
const myObjects={
    'js': 'javascript',
    'java':'java',
    'python':'py'
}
for (key in myObjects){
    console.log(key)
    console.log(myObjects[key])

}

const arr=[1,2,3,"Ariz"]
for(const key in arr){
    // console.log(key)
    console.log(arr [key])
}

const map= new Map()
map.set('IN','INDIA')
map.set('USA','UNITED STATES OF AMARICA')
map.set('FR','France')
map.set('IN','INDIA') // this will not count 
console.log(map)
for (const keyvalue in map){
    console.log(keyvalue)
}

