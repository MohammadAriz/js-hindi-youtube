// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if(i==5){
        console.log("5 is best number")
    }
    console.log(element)    
}
for (let i = 0; i <= 10; i++) {
        console.log(`outer loop:${i}`);
        for (let j = 0; j <= 10; j++) {
            
            console.log(`inner loop j is ${j} and inner loop i is ${i}`)
        }
        
    }
    
let array=["ariz","mannu","qayyum"]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
}

// BREAK AND CONTINUE- BREAK KHATAM KAR DEGA EXECUTION... CONTINUE US LINE KO SKIP KAR KE FIR CONTINUE KAR DEGA

for (let i = 1; i <=10; i++) {
    if(i==5){
        console.log("5 is detected ")
        break;
    }
    console.log(i);
}

for (let i = 1; i <=10; i++) {
    if(i==5){
        console.log("5 is detected ")
        continue;
    }
    console.log(i);
}



   
    