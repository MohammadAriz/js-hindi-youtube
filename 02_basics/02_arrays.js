const marvel_heros=["thor","ironman","hulk"]
const dc_heros=["superman","flash","batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

const newHero= marvel_heros.concat(dc_heros)
console.log(newHero)

//Spread operator
const All_Heros=[...marvel_heros,...dc_heros,"ariz"]
console.log(All_Heros)

//FLAT 
const arrayinArray= [1,2,3,[4,5,[6,7]]]
const realArray= arrayinArray.flat(Infinity)
console.log(realArray)
console.log(arrayinArray)


//
const check=Array.isArray("Ariz")
console.log(check)
const makeArray=Array.from("Ariz")
console.log(makeArray)
const makeAnotherArray=Array.of("Ariz")
console.log(makeAnotherArray)

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))
