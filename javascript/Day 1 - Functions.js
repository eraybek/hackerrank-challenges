// Day 1: Functions (10 Days of Javascript)

function factorial(n){
    
    let i;
    let result = 1;
    
    for (i = 0; i=n; i++){
        result *= n
        n -= 1
    }
    return result;
}


function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}