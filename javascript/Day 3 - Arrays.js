// Day 3: Arrays (10 Days of Javascript)

/* Task
Complete the getSecondLargest function in the editor below.

getSecondLargest has the following parameters:
-int nums[n]: an array of integers
 Returns
-int: the second largest number in "nums"

 Input Format
The first line contains an integer, "n" , the size of the "nums" array.
The second line contains "n" space-separated numbers that describe the elements in "nums" */

function getSecondLargest(nums) {
    let sortedNums = nums.sort(function(a,b) {
        return b-a;
    })
    let maxNumber = sortedNums[0]
    for (let i = 0; i < sortedNums.length; i++){
        if (sortedNums[i] < maxNumber){
            return sortedNums[i]
        }
    }
    return maxNumber
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}