//REDUCE- IMMUTABLE

const myNums=[1,2,3]
const newNums=myNums.reduce((accumulator,current)=>(accumulator+current),8)
console.log(newNums)


const shoppingCart=[
    {
        item:"ball",
        price:100
    },
    {
        item:"bat",
        price:200
    },
]
const total=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(total)