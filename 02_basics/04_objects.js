const tinderUser={};
tinderUser.id="1234abc";
tinderUser.name="Mohammad Ariz"
tinderUser.email="ariz@gmail.com"
console.log(tinderUser)

const regularUser={
    email:"something@gmail.com",
    fullname:{
        userFullName:{
            firstname:"Mohammad",
            lastname:"Ariz",
        }
    }
}
console.log(regularUser.fullname.userFullName.firstname)
console.log(regularUser.fullname.userFullName.firstname)



const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
const obj3={
    5:"e",
    6:"f"
}
const obj4={...obj1,...obj2,...obj3}
console.log(obj4)
console.log(tinderUser)
console.log(Object.keys(tinderUser)) //this will returns an array so we can apply loop over them
console.log(Object.values(tinderUser))

// ************Object Destructuring**************
const course={
    coursename:"javascript",
    courseInstructor:"Ariz"
}

console.log(course.courseInstructor) //every time when i need to take the name of instructor i have to write like this so to shorten this we can do destructuring
const {courseInstructor:inst}=course
console.log(inst)