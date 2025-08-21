let str = "hello world";
let count = 0;

for(let i=0; i<str.length;i++){

    let ch   = str.charAt(i).toLocaleLowerCase();  
    if(ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u" || ch === "A" || ch === "E" || ch === "I" || ch === "O" || ch === "U"){
    count++;
    } 
}
console.log("Total vowels: " + count);
