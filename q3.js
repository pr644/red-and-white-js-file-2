let n = 29;
let isPrime = true;

if(n <= 1){
    console.log("not a prime number")
}else{
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n % i === 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log("prime number");
    }else{
        console.log("not a prime number");
    }
}
