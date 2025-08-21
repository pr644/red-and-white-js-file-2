let num = 12345;
let count = 0;
let sum = 0;

while(num>0){
    sum += num % 10;
    
    num = Math.floor(num / 10);
    count++;
}
console.log("count of digit " + count);