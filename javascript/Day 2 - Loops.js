//Day 2: Loops (10 Days of Javascript)

/* Task
    * First, print each vowel in "s" on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in "s".
    * Second, print each consonant (i.e., non-vowel) in "s" on a new line in the same order as it appeared in "s".
 */

function vowelsAndConsonants(s) {
    
    let vowels = ["a", "e", "i", "o", "u"]
    let myVowels = []
    let myConstants = []
    for (let index = 0; index < s.length; index++){
        if (vowels.includes(s[index])) myVowels.push(s[index])
        else myConstants.push(s[index])
    } 
    myVowels.push.apply(myVowels, myConstants)
    
    for (let index = 0; index < myVowels.length; index++){
        console.log(myVowels[index])
    }
}   


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}