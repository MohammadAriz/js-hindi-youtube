//foreach loop
const coding =["js","c","html","css","api"]
coding.forEach(function (item) {
    console.log(item)
});
coding.forEach((item) => {
    console.log(item)
});

coding.forEach((item,index,array)=>{
    
    console.log(item,index,array)
    console.log(item,array,index)
})

const array=[{
    'language':'js',
    'level':'intermediate'
    },
    {
        'language':'c',
        'level':'beginner'
    },
    {
        'language':'python',
        'level':'advanced'
    }]
    array.forEach((item)=>{
    console.log(item.language)
    })
