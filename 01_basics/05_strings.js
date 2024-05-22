const name="Ariz "
const repoCount= 50
// console.log(name + repoCount)
console.log(`the "name" is ${name} 'and' the count's is ${repoCount}`)

let newWay = new String("Ariz")
console.log(newWay)
console.log(newWay.toUpperCase())
console.log(newWay) //original value does not change because it stored in stack 
console.log(newWay.indexOf('z'))
console.log(newWay.includes('f'))
console.log(newWay.replace('Ariz','Ariz is a good boy'))

let extraSpace= "    Ariz"
console.log(extraSpace)
console.log(extraSpace.trim())