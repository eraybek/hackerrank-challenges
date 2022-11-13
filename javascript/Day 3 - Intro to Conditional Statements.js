// Day 3: Intro to Conditional Statements (30 Days of Code)

/* Task
Given an integer, n , perform the following conditional actions:

* If n is odd, print Weird
* If n is even and in the inclusive range of 2 to 5, print Not Weird
* If n is even and in the inclusive range of 6 to 20, print Weird
* If n is even and greater than 20, print Not Weird

Complete the stub code provided in your editor to print whether or not n is weird. */

function main() {
    const N = parseInt(readLine().trim(), 10);
    
    if (N % 2 == 1){
        console.log("Weird")
    }
    else{
        if (N <= 5 && N >= 2){
            console.log("Not Weird")
        }
        else if (N <= 20 && N >= 6) {
            console.log("Weird")
        }
        else 
           console.log("Not Weird")
        
    }
}