// Day 2: Conditional Statements: Switch

/* Task

Complete the getLetter(s) function in the editor. It has one parameter: a string, s , consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

If the first character in string s is in the set {a, e, i, o, u}, then return A.
If the first character in string s is in the set {b, c, d, f, g}, then return B.
If the first character in string s is in the set {h, j, k, l, m}, then return C.
If the first character in string s is in the set {n, p, q, r, s, t, v, w, x, y, z}, then return D.
Hint: You can get the letter at some index  in  using the syntax s[i] or s.charAt(i). */

function getLetter(s) {
    
    s = s.toLowerCase()

    switch(true){
        case ['a', 'e', 'i', 'o', 'u'].includes(s[0]):
            return "A"
        case ['b', 'c', 'd', 'f', 'g'].includes(s[0]):
            return "B"
        case ['h', 'j', 'k', 'l', 'm'].includes(s[0]):
            return "C"
        case ['n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'].includes(s[0]):
            return "D"
    }
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}