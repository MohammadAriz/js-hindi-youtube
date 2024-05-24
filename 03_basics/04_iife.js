//IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION)- KABHI KABHI GLOBAL SCOPE KE VARIABLE PROBLEM CREATE KARTE HAI ISLIE HAM IIFE USE KR SAKTE HAI...HA ISKE LIKHNE KE BAAD SEMICOLUMN LAGANA ZAROORI HAI

(function chai(){
    console.log("Hi there")
})();   //this is named iife coz chai name is given

(()=>{
    console.log("ariz")
})();
((name)=>{
    console.log(`name is ${name}`)
})("ariz bhai");
