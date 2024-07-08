//if
const score=200;
// if(score>100){
//     console.log("done")
// }

if(score>100) console.log("done"),console.log("this comma is not a good practice");//this is IMPLICIT scope in which without scope we can write the code but in single line.... but by putting comma we can write in the next line which is not a good practice.

//SWITCH CASE STATEMENT
const month=3;
switch (month) {
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break; // if we dont use break then it will take all the next values EXCEPT DEFAULT.
    case 4:
        console.log("April")
        break;

    default:
        break;
}

