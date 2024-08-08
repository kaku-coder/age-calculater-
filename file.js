const btn = document.querySelector(".btn")
const input= document.querySelector("#inp")
const output= document.querySelector(".useroutput")
function calculateage(){
    
    let date = new Date().getFullYear(); // Corrected instantiation
    // console.log(date);
    
    let value = parseInt(input.value, 10); // Convert input value to an integer
    let age = date - value; // Calculate age
    console.log(age); // Logging the calculated age
    
    output.innerText=`Your age is ${age} Year old`
    
}




btn.addEventListener("click",calculateage)